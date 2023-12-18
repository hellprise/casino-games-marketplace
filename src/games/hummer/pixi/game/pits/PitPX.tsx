import { Sprite } from '@pixi/react'
import * as PIXI from 'pixi.js'

import { EHummerPitState, IHummerPit } from '@/games/hummer/slices/model/Pit'

import pitEmptyImage from '@/assets/hummer/item.svg'

import { AnimatedHummerPitPX } from './AnimatedPitPX'

export interface IPitPXProps {
	pit: IHummerPit
	frames: PIXI.Texture[]
	index: number
}

export function HummerPitPX({ pit, frames, index }: IPitPXProps) {
	return (
		<>
			{pit.state === EHummerPitState.EMPTY && (
				<Sprite
					x={pit.position.x}
					y={pit.position.y}
					image={pitEmptyImage}
					anchor={{
						x: 0.5,
						y: 1
					}}
				/>
			)}

			{pit.state === EHummerPitState.PROCESSING && <AnimatedHummerPitPX pit={pit} frames={frames} index={index} />}
		</>
	)
}
