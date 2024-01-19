import { ConvexClient } from 'convex/browser';
import type { PageLoad } from './$types';
import { PUBLIC_CONVEX_URL } from '$env/static/public';
import { api } from '$convex/_generated/api';

export const load: PageLoad = async ({ params }) => {
    const convex = new ConvexClient(PUBLIC_CONVEX_URL);
    const rules = await convex.query(api.rules.get, { idOrName: params.game });
    
    return {
        gameName: params.game,
        rulesSource: rules.source,
    };
}