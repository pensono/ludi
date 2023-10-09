import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { advance, initialize } from "../src/lib/ludi/engine";
import { Game, Move } from "../src/lib/ludi/types";

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
    const liveGame = await ctx.db.insert("liveGame", {game: game, state: initialState});
    return liveGame;
  },
});

export const playMove = mutation({
  args: { liveGameId: v.id("liveGame"), move: v.any() },
  handler: async (ctx, { liveGameId, move }) => {
    const liveGame = await ctx.db.get(liveGameId);
    const newState = advance(liveGame.game, liveGame.state, move as Move);
    const updatedLiveGame = await ctx.db.patch(liveGameId, {state: newState});
    return updatedLiveGame;
  },
});