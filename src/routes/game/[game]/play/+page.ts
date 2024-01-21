import { ConvexClient } from 'convex/browser';
import type { PageLoad } from './$types';
import { api } from '$convex/_generated/api';
import { getConvexClient } from '$lib/clients/convex';

export const load: PageLoad = async ({ params }) => {
    const convex = getConvexClient();
    const rules = await convex.query(api.rules.get, { name: params.game });
    
    return {
        gameName: params.game,
        rulesSource: rules.source,
    };
}