import { PropsWithChildren, useEffect } from 'react'

import { ERouletteBetStatus, RouletteLifecycle } from '@/games/roulette/slices/rouletteSlice'

import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'

export function GameSceneActionsProvider({ children }: PropsWithChildren<unknown>) {
	const { roulette, rouletteSpin } = useTypedSelector(state => state)

	const { setBalance, setRouletteLifecycle, setRouletteBetStatus, resetRouletteSpin, resetRoulette } = useActions()

	useEffect(() => {
		if (roulette.lifecycle === RouletteLifecycle.FINISHED) {
			if (roulette.activeNumber === rouletteSpin.currentNumber) {
				// win case
				setBalance(roulette.currentBet * roulette.winBet)
				setRouletteBetStatus(ERouletteBetStatus.WIN)
			} else {
				// lose case
				setBalance(-roulette.currentBet)
				setRouletteBetStatus(ERouletteBetStatus.LOSE)
			}

			setRouletteLifecycle(RouletteLifecycle.INFO)
		}
	}, [
		roulette.lifecycle,
		roulette.currentBet,
		roulette.winBet,
		roulette.activeNumber,
		rouletteSpin.currentNumber,
		setBalance,
		setRouletteLifecycle,
		setRouletteBetStatus
	])

	useEffect(() => {
		if (roulette.lifecycle === RouletteLifecycle.INFO) {
			const timeout = setTimeout(() => {
				resetRouletteSpin()
				resetRoulette()
			}, 2000)

			return () => clearTimeout(timeout)
		}
	}, [roulette.lifecycle, setRouletteBetStatus, setRouletteLifecycle, resetRoulette, resetRouletteSpin])

	return <>{children}</>
}
