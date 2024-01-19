import type { PageLoad, RouteParams } from './$types';

export const load: PageLoad = async () => {
    return {
        user: 'placeholder',
    };
}