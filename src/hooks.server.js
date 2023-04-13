import { sequence } from '@sveltejs/kit/hooks';

const handleCustomRoute = async ({ event, resolve }) => {

	if (event.url.pathname.startsWith('/stars')) {
		return new Response('✨ Shine on.');
	}

	const response = await resolve(event);
	return response;
}

export const handle = sequence(handleCustomRoute);