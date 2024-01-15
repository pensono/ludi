import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Required since convex doesn't support structured clone
import "core-js/actual/structured-clone";

export const get = query({
  args: { id: v.id("rules") },
  handler: async (ctx, { id }) => {
    return await ctx.db.get(id);
  },
});

export const create = mutation({
  args: { source: v.string() },
  handler: async (ctx, { source }) => {
    const rules = await ctx.db.insert("rules", {text: source});

    return rules;
  },
});