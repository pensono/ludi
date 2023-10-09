import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { advance, initialize, nextPlayer } from "../src/lib/ludi/engine";
import { Game, Move } from "../src/lib/ludi/types";
import { GameParticipant } from "../src/lib/realtime/types";

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
  args: { game: v.any() },
  handler: async (ctx, { game }) => {
    const initialState = initialize(game as Game);

    const liveGame = await ctx.db.insert("liveGame", {game: game, state: initialState, participants: []});

    return liveGame;
  },
});

export const playMove = mutation({
  args: { liveGameId: v.id("liveGame"), move: v.any() },
  handler: async (ctx, { liveGameId, move }) => {
    const liveGame = await ctx.db.get(liveGameId);

    // TODO check move validity
    const newState = advance(liveGame.game, liveGame.state, move as Move);
    const updatedLiveGame = await ctx.db.patch(liveGameId, {state: newState});

    return updatedLiveGame;
  },
});

export const reset = mutation({
  args: { liveGameId: v.id("liveGame") },
  handler: async (ctx, { liveGameId }) => {
    const liveGame = await ctx.db.get(liveGameId);

    const newState = initialize(liveGame.game);
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
    const newRole = nextPlayer(liveGame.game, currentRoles) ?? "Spectator";
    const newParticipants = [...liveGame.participants, {id: participantId, name: participantId, role: newRole}];

    await ctx.db.patch(liveGameId, {participants: newParticipants});

    return;
  },
});