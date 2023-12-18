import clsx from 'clsx'
import { PropsWithChildren } from 'react'

import { LosePanel } from '@/games/hummer/ui/game/LosePanel'
import { ScorePanel } from '@/games/hummer/ui/game/ScorePanel'

import { useTypedSelector } from '@/hooks/useTypedSelector'

export function HummerGameSceneUI({ children }: Readonly<PropsWithChildren<unknown>>) {
	const isGameOver = useTypedSelector(state => state.hummerCore.isGameOver)

	return (
		<section className='relative'>
			<div className='relative z-[1]'>{children}</div>

			<div className='absolute left-0 right-0 top-[5%] z-[1]'>
				<ScorePanel />
			</div>

			<div
				className={clsx('absolute left-1/2 top-[25%] z-[1] -translate-x-1/2 transition-all duration-200', {
					'scale-0 opacity-0': !isGameOver,
					'scale-100 opacity-100': isGameOver
				})}
			>
				<LosePanel />
			</div>
		</section>
	)
}
