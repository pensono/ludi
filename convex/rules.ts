import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import type { Id } from "./_generated/dataModel";

// Required since convex doesn't support structured clone
import "core-js/actual/structured-clone";

export const get = query({
  args: { idOrName: v.union(v.id("rules"), v.string()) },
  handler: async (ctx, { idOrName }) => {
    const byName = ctx.db.query("rules")
      .filter(q => q.eq(idOrName, q.field('name')))
      .unique();
    if (byName) {
      return byName;
    }

    // ID should be queried first, but it's not possible to tell if we have an ID or a name -_-
    return ctx.db.get(idOrName as Id<"rules">);
  },
});

export const create = mutation({
  args: { source: v.string() },
  handler: async (ctx, { source }) => {
    const rules = await ctx.db.insert("rules", {text: source});

    return rules;
  },
});