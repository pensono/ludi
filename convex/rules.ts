import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import type { Id } from "./_generated/dataModel";

// Required since convex doesn't support structured clone
import "core-js/actual/structured-clone";

export const get = query({
  args: { idOrName: v.union(v.id("rules"), v.string()) },
  handler: async (ctx, { idOrName }) => {
    let result = ctx.db.get(idOrName as Id<"rules">)
    if (result) {
      return result;
    }

    return ctx.db.query("rules")
      .filter(q => q.eq(idOrName, q.field('name')))
      .unique()
  },
});

export const create = mutation({
  args: { source: v.string() },
  handler: async (ctx, { source }) => {
    const rules = await ctx.db.insert("rules", {text: source});

    return rules;
  },
});