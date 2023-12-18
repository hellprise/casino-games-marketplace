import { createBrowserRouter } from 'react-router-dom'

import LoginPage from '@/pages/auth/login'
import RegisterPage from '@/pages/auth/register'
import HummerPage from '@/pages/games/hummer'
import RoulettePage from '@/pages/games/roulette'
import SlotsPage from '@/pages/games/slots'

import { AuthLayout } from '@/layouts/authLayout/AuthLayout'
import { GamesLayout } from '@/layouts/gamesLayout/GamesLayout'
import { MainLayout } from '@/layouts/mainLayout/MainLayout'

import Homepage from '@/pages'

export const router = createBrowserRouter([
	{
		path: '/',
		Component: MainLayout,
		children: [
			{
				index: true,
				Component: Homepage
			}
		]
	},
	{
		path: 'auth',
		Component: AuthLayout,
		children: [
			{
				path: 'login',
				Component: LoginPage
			},
			{
				path: 'register',
				Component: RegisterPage
			}
		]
	},
	{
		path: 'games',
		Component: GamesLayout,
		children: [
			{
				path: 'roulette',
				Component: RoulettePage
			},
			{
				path: 'hummer',
				Component: HummerPage
			},
			{
				path: 'slots',
				Component: SlotsPage
			}
		]
	}
])
