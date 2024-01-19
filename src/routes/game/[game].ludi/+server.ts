
import { getConvexClient } from "$lib/clients/convex";
import { api } from "$convex/_generated/api";
import type { RouteParams } from "./$types";

export async function GET({ params }: { params: RouteParams}) {
  const convex = getConvexClient();
  const result = await convex.query(api.rules.get, { idOrName: params.game });
  
  return new Response(result.source);
}