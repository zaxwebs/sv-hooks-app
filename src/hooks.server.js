import { sequence } from '@sveltejs/kit/hooks';

const handleCustomRoute = async ({ event, resolve }) => {

	if (event.url.pathname.startsWith('/stars')) {
		return new Response('✨ Shine on.');
	}

	const response = await resolve(event);
	return response;
}

const handleConsoleRoute = async ({ event, resolve }) => {

	if (event.url.pathname.startsWith('/console')) {
		console.log('Hello world!');
		return new Response('There\'s stuff in your server console.');
	}

	const response = await resolve(event);
	return response;
}

const handleLogEvent = async (input) => {

	if (input.event.url.pathname.startsWith('/event')) {
		console.log(input);
		return new Response('Event has been logged.');
	}

	const response = await resolve(input);
	return response;
}

export const handle = sequence(handleCustomRoute, handleConsoleRoute, handleLogEvent);