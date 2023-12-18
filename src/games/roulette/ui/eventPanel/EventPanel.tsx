import { sound } from '@pixi/sound'

import { ESOUNDS_ROULETTE } from '@/games/roulette/scenes/GameScene/config'
import RouletteStartButton from '@/games/roulette/shared/button/RouletteStartButton'
import { ERouletteBetStatus, RouletteLifecycle } from '@/games/roulette/slices/rouletteSlice'

import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'

export function EventPanel() {
	const { setRouletteSpinStartSpeed, setRouletteLifecycle } = useActions()

	const { roulette, rouletteSpin } = useTypedSelector(({ roulette, rouletteSpin }) => ({ roulette, rouletteSpin }))

	const { lifecycle, betStatus } = roulette
	const { currentNumber } = rouletteSpin

	const onStart = () => {
		sound.play(ESOUNDS_ROULETTE.SPIN)
		setRouletteSpinStartSpeed()
		setRouletteLifecycle(RouletteLifecycle.PLAY)
	}

	return (
		<section>
			{lifecycle === RouletteLifecycle.READY_TO_START && <RouletteStartButton onClick={onStart} />}

			{lifecycle === RouletteLifecycle.PLAY && <div>playing...</div>}

			{lifecycle === RouletteLifecycle.INFO && (
				<div>
					<section>{betStatus === ERouletteBetStatus.WIN ? <span>win</span> : <span>lose</span>}</section>

					<section>{currentNumber}</section>
				</div>
			)}

			{lifecycle === RouletteLifecycle.FINISHED && <div>calculating...</div>}
		</section>
	)
}
