
import { ConvexClient } from "convex/browser";
import { PUBLIC_CONVEX_URL } from '$env/static/public';
import { api } from "$convex/_generated/api";
import type { Id } from "$convex/_generated/dataModel";

export async function GET({ params }) {
  const convex = new ConvexClient(PUBLIC_CONVEX_URL);
  const result = await convex.query(api.rules.get, { id: params.game as Id<'rules'> });
  
  return new Response(result.text);
}