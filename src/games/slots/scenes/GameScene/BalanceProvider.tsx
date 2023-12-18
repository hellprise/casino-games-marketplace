import { PropsWithChildren, useEffect } from 'react'

import { ESlotLifecycle, ESlotStatus } from '@/games/slots/slices/slotSlice'

import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'

const KOEF_WIN = 10

export default function BalanceProvider({ children }: Readonly<PropsWithChildren<unknown>>) {
	const { lifecycle, slotStatus, currentBet } = useTypedSelector(({ slot }) => slot)

	const { setBalance } = useActions()

	const isPlaying = lifecycle === ESlotLifecycle.PLAY

	const balance = slotStatus === ESlotStatus.WIN ? currentBet * KOEF_WIN : -currentBet

	useEffect(() => {
		if (isPlaying) setBalance(balance)
	}, [isPlaying, setBalance, balance])

	return <>{children}</>
}
