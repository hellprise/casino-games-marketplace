import { Container } from '@pixi/react'
import * as PIXI from 'pixi.js'
import { useEffect, useState } from 'react'

import { EHummerPitState, MOCK_PITS } from '@/games/hummer/slices/model/Pit'

import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'

import spriteSheet from '@/assets/hummer/sprite-mole.json'

import { HummerPitPX } from './PitPX'

export function HummerPitsPX() {
	const [frames, setFrames] = useState<PIXI.Texture[]>([])

	const { pits } = useTypedSelector(state => state.hummerCore)

	const { setHummerPits } = useActions()

	useEffect(() => {
		const interval = setInterval(() => {
			const randomIndex = Math.floor(Math.random() * MOCK_PITS.length)

			setHummerPits({ currentIndex: randomIndex, state: EHummerPitState.PROCESSING })
		}, 2000)

		return () => clearInterval(interval)
	}, [setHummerPits])

	// load
	useEffect(() => {
		PIXI.Assets.load(JSON.stringify(spriteSheet)).then(() => {
			const names = ['mole-001.svg', 'mole-002.svg', 'mole-003.svg']

			const frames = names.map(name => {
				return PIXI.Texture.from(name)
			})

			setFrames(frames)
		})
	}, [])
	return (
		<Container x={50} y={50}>
			{pits.map((pit, index) => (
				<HummerPitPX key={`pit-${index + 1}`} pit={pit} frames={frames} index={index} />
			))}
		</Container>
	)
}
