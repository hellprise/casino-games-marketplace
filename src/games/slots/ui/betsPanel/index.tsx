import { useActions } from '@/hooks/useActions'

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
	const { setSlotCurrentBet } = useActions()

	const pickBet = (value: number) => setSlotCurrentBet(value)

	return (
		<section className='relative flex items-center gap-5'>
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
