
import { ConvexClient } from "convex/browser";
import { PUBLIC_CONVEX_URL } from '$env/static/public';
import { api } from "$convex/_generated/api";
import type { Id } from "$convex/_generated/dataModel";
import type { RouteParams } from "./$types";

export async function GET({ params }: { params: RouteParams}) {
  const convex = new ConvexClient(PUBLIC_CONVEX_URL);
  const result = await convex.query(api.rules.get, { idOrName: params.game });
  
  return new Response(result.source);
}