import { useEffect } from 'react'

import { EHummerScenes } from '@/games/hummer/slices/hummerCoreSlice'

import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'

export function LosePanel() {
	const isGameOver = useTypedSelector(state => state.hummerCore.isGameOver)

	const { setHummerCoreScene } = useActions()

	useEffect(() => {
		if (!isGameOver) return
		// TODO: щможна пофіксити поведінку після лузу. зараз, коли гравець програє - кроти продовжують з'являтися та очки продовжують нараховуватися. тому можна створити або якусь перевірку у екшенах, або створити елемент, який будет на весь екран, та перекривати своїм z-index всі елементи, окрім обох панелей. (краще зробити обидва варіанти разом, щоб було надійніше)

		const timeout = setTimeout(() => {
			// window.location.reload()
			setHummerCoreScene(EHummerScenes.MENU)
		}, 3000)

		return () => clearTimeout(timeout)
	}, [isGameOver])

	return (
		<section>
			<h1>You are lose!</h1>
		</section>
	)
}
