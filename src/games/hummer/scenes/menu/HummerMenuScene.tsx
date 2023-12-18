import { HummerMenuStartButton } from '@/games/hummer/ui/menu/StartButton'

import { useTypedSelector } from '@/hooks/useTypedSelector'

export function HummerMenuScene() {
	const balance = useTypedSelector(state => state.wallet.game_balance)

	return (
		<section className='flex min-h-screen flex-col items-center justify-center'>
			<section>
				<div className='flex flex-col items-center gap-4 rounded-xl bg-slate-100 p-3'>
					<section className='flex items-center gap-4'>
						<h1>Balance:</h1>
						<span>{balance}</span>
					</section>

					<section className='flex items-center gap-4'>
						<h1>Last score result & level:</h1>
						<span>0</span>
					</section>
				</div>

				<div>
					<HummerMenuStartButton />
				</div>
			</section>
		</section>
	)
}
