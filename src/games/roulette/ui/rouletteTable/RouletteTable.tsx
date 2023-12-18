import { sound } from '@pixi/sound'
import clsx from 'clsx'

import { ESOUNDS_ROULETTE } from '@/games/roulette/scenes/GameScene/config'

import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'

import { ROULETTE_TABLE_NUMBER } from './initData'

export function RouletteTable() {
	const { setActiveNumber } = useActions()

	const activeNumber = useTypedSelector(({ roulette }) => roulette.activeNumber)

	const handleClick = (number: number) => {
		sound.play(ESOUNDS_ROULETTE.BET)
		setActiveNumber(number)
	}

	return (
		<section className='grid grid-cols-12 gap-2'>
			{ROULETTE_TABLE_NUMBER.map(({ number, color }) => (
				<button
					onClick={() => handleClick(number)}
					key={number}
					className={clsx(
						'flex h-11 w-11 items-center justify-center rounded-full border-2 transition-all duration-200 ease-in hover:scale-90 hover:border-yellow hover:opacity-90',
						{
							'border-red bg-red': color === 'red',
							'border-black bg-black': color === 'black',
							'border-yellow': activeNumber === number
						}
					)}
				>
					<span
						className={clsx('font-bold transition-all duration-200 ease-in', {
							'text-white': activeNumber !== number,
							'text-yellow': activeNumber === number // TODO: on red this color looks pretty bad, maybe change it in the future for red
						})}
					>
						{number}
					</span>
				</button>
			))}
		</section>
	)
}
