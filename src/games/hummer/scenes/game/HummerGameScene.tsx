import { Stage } from '@/app/config/contextBridge'

import { HummerBgPX } from '@/games/hummer/pixi/game/bg/HummerBgPX'
import { HummerPitsPX } from '@/games/hummer/pixi/game/pits/PitsPX'

import { HummerGameSceneUI } from './HummerGameSceneUI'
import { height, width } from './config'

export function HummerGameScene() {
	return (
		<section className='flex min-h-screen flex-col items-center justify-center'>
			<HummerGameSceneUI>
				<Stage width={width} height={height} options={{ backgroundColor: 'green' }}>
					<HummerBgPX />
					<HummerPitsPX />
				</Stage>
			</HummerGameSceneUI>
		</section>
	)
}
