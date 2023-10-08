import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
    return {
        gameName: params.game,
        gameId: params.gameId,
    };
}