
import { httpAction } from './_generated/server';
import { api } from './_generated/api';

const DescopeB2BAuth = 'Bearer P2cC4YzygthpPTF11mXVnJVK3PnW';



export const validateB2BSession = httpAction(async (ctx, request) => {
	const params: any = await request.json();

	const SessionResponse = await ctx.runAction(api.descopeActions.B2BSessionValidation, params)
	
    console.log(SessionResponse);


	return new Response(JSON.stringify({ 'DescopeResponse': SessionResponse }), {
		headers: new Headers({
			'content-type': 'application/json',
			'Access-Control-Allow-Origin': 'http://localhost:4201',
			Vary: 'origin',
		}),
		status: 200,
	});
});


export const validateB2CSession = httpAction(async (ctx, request) => {
	const params = await request.json();

	const SessionResponse = await ctx.runAction(api.descopeActions.B2CSessionValidation, params)
	
    console.log(SessionResponse);


	return new Response(JSON.stringify({ 'DescopeResponse': SessionResponse }), {
		headers: new Headers({
			'content-type': 'application/json',
			'Access-Control-Allow-Origin': 'http://localhost:4201',
			Vary: 'origin',
		}),
		status: 200,
	});
});





export const descopeSAMLExchange = httpAction(async (ctx, request) => {
	const params = JSON.stringify(await request.json());

	console.log(params);

  const getJWT = await fetch('https://api.descope.com/v1/auth/saml/exchange ', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': DescopeB2BAuth,
    },
	body: params

  });
  const JWT = await getJWT.json();

  return new Response(JSON.stringify({ 'DescopeResponse': JWT }), {
    headers: new Headers({
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4201',
        Vary: 'origin',
      }),
    status: 200,
  });
});


export const addNewDescopeAdminSession = httpAction(async (ctx, request) => {
	const params = await request.json();

	const response = await ctx.runMutation(api.thriveMutations.saveDescopeAdminSession, params);

	return new Response(JSON.stringify(response), {
		headers: {
			'content-type': 'application/json',
		},
		status: 200,
	});
});

export const addNewDescopeAdminUser = httpAction(async (ctx, request) => {
	const params = await request.json();

	const response = await ctx.runMutation(api.thriveMutations.saveDescopeAdminUser, params);

	return new Response(JSON.stringify(response), {
		headers: {
			'content-type': 'application/json',
		},
		status: 200,
	});
});

export const addNewDescopeUser = httpAction(async (ctx, request) => {
	const params = await request.json();

	const response = await ctx.runMutation(api.thriveMutations.saveNewDescopeUser, params);

	return new Response(JSON.stringify(response), {
		headers: {
			'content-type': 'application/json',
		},
		status: 200,
	});
});

export const addNewDescopeUserSession = httpAction(async (ctx, request) => {
	const params = await request.json();

	const response = await ctx.runMutation(api.thriveMutations.saveDescopeUserSession, params);

	return new Response(JSON.stringify(response), {
		headers: {
			'content-type': 'application/json',
		},
		status: 200,
	});
});

