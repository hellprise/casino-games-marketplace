import { EHummerScenes } from '@/games/hummer/slices/hummerCoreSlice'

import { useActions } from '@/hooks/useActions'

export function HummerMenuStartButton() {
	const { setHummerCoreScene } = useActions()

	const onStartGame = () => {
		setHummerCoreScene(EHummerScenes.GAME)
	}
	return <button onClick={onStartGame}>Start game</button>
}
