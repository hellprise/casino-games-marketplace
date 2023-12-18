import { Link } from 'react-router-dom'

import { ROUTES } from '@/app/router/utils'
import { useAppSelector } from '@/app/store/hooks'

export default function Homepage() {
	const { nickname } = useAppSelector(state => state.user)

	return (
		<div className='flex gap-5'>
			<h1 className='text-4xl font-bold text-black'>Hello, {nickname}!</h1>

			<Link className='text-xl font-medium text-black underline underline-offset-2' to={ROUTES.games.roulette}>
				Roulette
			</Link>
			<Link className='text-xl font-medium text-black underline underline-offset-2' to={ROUTES.games.slots}>
				Slots
			</Link>
			<Link className='text-xl font-medium text-black underline underline-offset-2' to={ROUTES.games.hummer}>
				Hummer
			</Link>
		</div>
	)
}
