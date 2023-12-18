import { useTypedSelector } from '@/hooks/useTypedSelector'

import { HummerGameScene } from './scenes/game/HummerGameScene'
import { HummerMenuScene } from './scenes/menu/HummerMenuScene'
import { EHummerScenes } from './slices/hummerCoreSlice'

export function CoreHummerGame() {
	const { scene } = useTypedSelector(state => state.hummerCore)

	switch (scene) {
		case EHummerScenes.MENU:
			return <HummerMenuScene />

		case EHummerScenes.GAME:
			return <HummerGameScene />

		default:
			return <HummerMenuScene />
	}
}
