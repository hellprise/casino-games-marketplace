import { sound } from '@pixi/sound'

import { ESOUNDS_ROULETTE } from '@/games/roulette/scenes/GameScene/config'

import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'

import bet50 from '@/assets/roulette/bet-50.png'
import bet100 from '@/assets/roulette/bet-100.png'
import bet200 from '@/assets/roulette/bet-200.png'
import bet400 from '@/assets/roulette/bet-400.png'
import bet800 from '@/assets/roulette/bet-800.png'

const BETS = [
	{ image: bet50, value: 50 },
	{ image: bet100, value: 100 },
	{ image: bet200, value: 200 },
	{ image: bet400, value: 400 },
	{ image: bet800, value: 800 }
]

export function BetsPanel() {
	const activeNumber = useTypedSelector(({ roulette }) => roulette.activeNumber)

	const { setCurrentBet } = useActions()

	const pickBet = (value: number) => {
		sound.play(ESOUNDS_ROULETTE.BET)
		activeNumber !== 0 ? setCurrentBet(value) : alert('Please, choose a number')
	}

	return (
		<section className='relative flex items-center gap-5 rounded-[40px] bg-bets bg-no-repeat px-9 py-4'>
			{BETS.map(({ image, value }) => (
				<button
					className='relative z-[1]'
					onClick={() => pickBet(value)}
					onContextMenu={e => {
						e.preventDefault()

						pickBet(-value)
					}} // click right button to remove current bet
					key={value}
				>
					<img
						src={image}
						alt={value.toString()}
						className='h-bet w-bet cursor-pointer transition-all duration-200 ease-linear hover:scale-105'
					/>
				</button>
			))}
		</section>
	)
}
