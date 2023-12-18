import { AnimatedSprite } from '@pixi/react'
import { useEffect } from 'react'

import { EHummerPitState } from '@/games/hummer/slices/model/Pit'

import { useActions } from '@/hooks/useActions'

import { IPitPXProps } from './PitPX'

const WIN_SCORE = 100

export function AnimatedHummerPitPX({ frames, pit, index }: IPitPXProps) {
	const { setHummerPits, setHummerScore } = useActions()

	const hidePit = () => setHummerPits({ currentIndex: index, state: EHummerPitState.EMPTY })

	const onHidePitClick = () => {
		hidePit()
		setHummerScore(WIN_SCORE)
	}

	useEffect(() => {
		const timeout = setTimeout(() => {
			hidePit()
			setHummerScore(-WIN_SCORE * 2)
		}, 1200)

		return () => clearTimeout(timeout)
	}, [index, setHummerPits])

	if (!frames.length) return <></>

	return (
		<AnimatedSprite
			textures={frames}
			animationSpeed={0.05}
			isPlaying={true}
			anchor={{
				x: 0.5,
				y: 1
			}}
			position={pit.position}
			loop={false}
			interactive={true}
			onmousedown={onHidePitClick}
		/>
	)
}
