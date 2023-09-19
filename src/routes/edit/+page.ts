import type { PageLoad } from './$types';

export const ssr = false;

export const load: PageLoad = async ({ params }) => {
    let gameText = await fetch("/games/number-guessing.ludi").then(r => r.text());

    return {
        gameText
    };
}