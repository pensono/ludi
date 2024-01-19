import { mutation, query } from "./_generated/server";
import { ConvexError, v } from "convex/values";
import { initialize, nextPlayer, execute } from "../src/lib/ludi/engine";
import type { Rules } from "../src/lib/ludi/types";
import type { GameParticipant } from "../src/lib/realtime/types";

// Required since convex doesn't support structured clone
import "core-js/actual/structured-clone";

export const get = query({
  args: { id: v.id("liveGame") },
  handler: async (ctx, { id }) => {
    const tasks = await ctx.db
      .get(id);
    return tasks;
  },
});

export const newGame = mutation({
  args: { rules: v.any() },
  handler: async (ctx, { rules }) => {
    const initialState = initialize(rules as Rules);

    const liveGame = await ctx.db.insert("liveGame", {rules: rules, state: initialState, participants: []});

    return liveGame;
  },
});

export const executeStatements = mutation({
  args: { liveGameId: v.id("liveGame"), participantId: v.string(), statements: v.any(), locals: v.any() },
  handler: async (ctx, { liveGameId, participantId, statements, locals }) => {
    const liveGame = await ctx.db.get(liveGameId);

    // TODO check move validity
    const role = liveGame.participants.find((p: GameParticipant) => p.id === participantId)?.role;
    const newState = execute(liveGame.rules, liveGame.state, role, statements, locals);

    if (!newState) {
      // Illegal move!
      throw new ConvexError(`Illegal move: ${JSON.stringify(statements)}`);
    }

    const updatedLiveGame = await ctx.db.patch(liveGameId, {state: newState});

    return updatedLiveGame;
  },
});

export const reset = mutation({
  args: { liveGameId: v.id("liveGame") },
  handler: async (ctx, { liveGameId }) => {
    const liveGame = await ctx.db.get(liveGameId);

    const newState = initialize(liveGame.rules);
    const updatedLiveGame = await ctx.db.patch(liveGameId, {state: newState});

    return updatedLiveGame;
  },
});

export const join = mutation({
  args: { liveGameId: v.id("liveGame"), participantId: v.string() },
  handler: async (ctx, { liveGameId, participantId }) => {
    const liveGame = await ctx.db.get(liveGameId);

    const alreadyJoined = liveGame.participants.some((p: GameParticipant) => p.id === participantId);

    if (alreadyJoined) {
      return;
    }

    const currentRoles = liveGame.participants.map((p: GameParticipant) => p.role);
    const newRole = nextPlayer(liveGame.rules, currentRoles) ?? "Spectator";
    const newParticipants = [...liveGame.participants, {id: participantId, name: participantId, role: newRole}];

    await ctx.db.patch(liveGameId, {participants: newParticipants});

    return;
  },
});