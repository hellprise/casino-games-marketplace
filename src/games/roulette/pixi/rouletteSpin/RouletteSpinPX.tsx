import { Container, Sprite, useTick } from '@pixi/react'
import { sound } from '@pixi/sound'
import { useState } from 'react'

import { ESOUNDS_ROULETTE } from '@/games/roulette/scenes/GameScene/config'
import { RouletteLifecycle } from '@/games/roulette/slices/rouletteSlice'

import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'

import arrow from '@/assets/roulette/arrow.png'
import bgRoulette from '@/assets/roulette/bg-roulette.png'
import externalCircle from '@/assets/roulette/external-circle.png'
import internalCircle from '@/assets/roulette/internal-circle.png'
import mediumCircle from '@/assets/roulette/medium-circle.png'
import wheel from '@/assets/roulette/wheel.png'

import { radianToDegrees } from '@/shared/lib/degrees/radianToDegrees'

const POSITION_SPIN = {
	x: 200,
	y: 286
}

const POSITION_ARROW = {
	x: 200,
	y: 161,
	rotation: -0.44
	// x: 287,
	// y: 215,
	// rotation: 0.4
}

export function RouletteSpinPX() {
	const [rotationMedium, setRotationMedium] = useState(0)
	const [rotationWheel, setRotationWheel] = useState(0)

	const { setRouletteSpinSpeed, setRouletteSpinDegreesRotation, setRouletteLifecycle } = useActions()

	const rouletteSpin = useTypedSelector(({ rouletteSpin }) => rouletteSpin)

	useTick(delta => {
		if (!rouletteSpin.rotationInProgress) return

		const rotation = delta * rouletteSpin.speed
		setRotationMedium(prev => prev + rotation)
		setRotationWheel(prev => prev - rotation)

		if (rouletteSpin.speed <= 0.005) {
			setRouletteSpinSpeed(0)
			setRouletteSpinDegreesRotation(radianToDegrees(rotationMedium % (Math.PI * 2)))
			setRouletteLifecycle(RouletteLifecycle.FINISHED)
			sound.stop(ESOUNDS_ROULETTE.SPIN)
		} else {
			setRouletteSpinSpeed(null)
		}
	})

	return (
		<Container>
			<Sprite image={bgRoulette} x={361} y={500} anchor={1} />
			<Sprite image={externalCircle} x={POSITION_SPIN.x} y={POSITION_SPIN.y} anchor={0.5} />
			<Sprite image={mediumCircle} x={POSITION_SPIN.x} y={POSITION_SPIN.y} rotation={rotationMedium} anchor={0.5} />
			<Sprite image={internalCircle} x={POSITION_SPIN.x} y={POSITION_SPIN.y} anchor={0.5} />
			<Sprite image={wheel} x={POSITION_SPIN.x} y={POSITION_SPIN.y} rotation={rotationWheel} anchor={0.5} />
			<Sprite image={arrow} x={POSITION_ARROW.x} y={POSITION_ARROW.y} rotation={POSITION_ARROW.rotation} anchor={0.5} />
		</Container>
	)
}
