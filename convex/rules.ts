import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import type { Id } from "./_generated/dataModel";

// Required since convex doesn't support structured clone
import "core-js/actual/structured-clone";

export const get = query({
  args: { name: v.string() },
  handler: async (ctx, { name }) => {
    return ctx.db.query("rules")
      .filter(q => q.eq(name, q.field('name')))
      .unique();
  },
});

export const create = mutation({
  args: { source: v.string(), name: v.optional(v.string()) },
  handler: async (ctx, { source, name }) => {
    const rulesId = await ctx.db.insert("rules", {source, name});

    if (!name) {
      name = rulesId;
      ctx.db.patch(rulesId, {name});
    }

    return name;
  },
});