import type { Id } from '$convex/_generated/dataModel';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
    return {
        gameId: params.game as Id<'liveGame'>,
    };
}