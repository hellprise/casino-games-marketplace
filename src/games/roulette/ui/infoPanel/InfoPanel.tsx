import clsx from 'clsx'

import ScoreWindow from '@/games/roulette/shared/scoreWindow'

import { useTypedSelector } from '@/hooks/useTypedSelector'

import { addUuid } from '@/shared/lib/addUuid'

export interface InfoPanelItem {
	id: string
	title: string
	type: 'balance' | 'winBet' | 'currentBet' | 'activeNumber'
}

const ITEMS: InfoPanelItem[] = [
	{
		id: addUuid(),
		title: 'Balance',
		type: 'balance'
	},
	{
		id: addUuid(),
		title: 'Win Bet',
		type: 'winBet'
	},
	{
		id: addUuid(),
		title: 'Bet',
		type: 'currentBet'
	},
	{
		id: addUuid(),
		title: 'Bet number',
		type: 'activeNumber'
	}
]

export function InfoPanel() {
	const roulette = useTypedSelector(({ roulette }) => roulette)
	const balance = useTypedSelector(({ wallet }) => wallet.game_balance)

	const panelValues = {
		balance: balance,
		winBet: 100,
		currentBet: roulette.currentBet,
		activeNumber: roulette.activeNumber
	}

	return (
		<section className='flex w-full items-center justify-between'>
			{ITEMS.map(({ id, title, type }) => (
				<div className='relative' key={id}>
					<h5 className='absolute -top-5 left-2 text-sm text-[#A0B9A2CC]'>{title}</h5>

					<section>
						<ScoreWindow icon={type}>
							<div
								className={clsx({
									'mr-7': type === 'activeNumber',
									'mr-2': type === 'winBet'
								})}
							>
								<h2 className='text-[#A0B9A2]'>{panelValues[type]}</h2>
							</div>
						</ScoreWindow>
					</section>
				</div>
			))}
		</section>
	)
}
