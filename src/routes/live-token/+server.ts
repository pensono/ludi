import { json } from '@sveltejs/kit';
import { ABLY_API_KEY } from '$env/static/private';
import Ably from "ably/promises";

export async function GET({ request, url }) {
    const clientId = url.searchParams.get('clientId');
    if (!clientId) {
        return json({ error: 'clientId is required' }, { status: 400 });
    }
    
    const gameId = url.searchParams.get('gameId');
    if (!gameId) {
        return json({ error: 'gameId is required' }, { status: 400 });
    }

    console.log(JSON.stringify(request));
    const client = new Ably.Realtime(ABLY_API_KEY);
    const tokenRequestData = await client.auth.createTokenRequest({ clientId, capability: { [`game:${gameId}`]: ['subscribe', 'publish', 'presence'] } });
    
    return json(tokenRequestData);
}