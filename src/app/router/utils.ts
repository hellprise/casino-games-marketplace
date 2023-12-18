export const ROUTES = {
	main: '/',
	auth: {
		login: 'auth/login',
		register: 'auth/register'
	},
	games: {
		roulette: 'games/roulette',
		hummer: 'games/hummer',
		slots: 'games/slots'
	}
}

export const generateUrl = (url: string, params?: any) => {
	if (params) {
		Object.keys(params).forEach(key => {
			url = url.replace(`:${key}`, params[key])
		})
	}

	return url
}
