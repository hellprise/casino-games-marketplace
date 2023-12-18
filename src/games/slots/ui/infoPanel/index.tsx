import { useEffect, useState } from 'react'

import { ESlotLifecycle } from '@/games/slots/slices/slotSlice'

import { useTypedSelector } from '@/hooks/useTypedSelector'

import { SlotScoreWindow } from '../../shared/ScoreWindow'

export function InfoPanel() {
	const {
		slot: { currentBet, lifecycle },
		wallet: { game_balance }
	} = useTypedSelector(state => state)

	const [displayBalance, setDisplayBalance] = useState(game_balance)

	const isInfo = lifecycle === ESlotLifecycle.INFO // TODO: цю змінну та подіні до неї цілком можна винести в slotSlice і діставати з useTypedSelector, коли потрібно, щоб не прописувати постійно вручну
	// TODO: є баг, треба не дозволяти користувачу клікати по кнопці spin, коли він вже зробив клік та до моменту, коли відпрацює анімація він чи лос, бо зараз можна нескінченно клікати, навіть коли курсор показує, що не можна (подивитись це при станах lifecycle)

	useEffect(() => {
		if (isInfo) setDisplayBalance(game_balance)
	}, [game_balance, isInfo])

	return (
		<section className='flex flex-col gap-4'>
			<SlotScoreWindow icon='balance'>
				<span>{displayBalance ?? 0}</span>
			</SlotScoreWindow>

			<SlotScoreWindow icon='bets'>
				<span>{currentBet}</span>
			</SlotScoreWindow>
		</section>
	)
}
