import { sound } from '@pixi/sound'
import * as PIXI from 'pixi.js'
import { useEffect } from 'react'

import { Stage } from '@/app/config/contextBridge'

import { BgPX } from '@/games/roulette/pixi/bg/bgPX'
import { RouletteSpinPX } from '@/games/roulette/pixi/rouletteSpin/RouletteSpinPX'

import soundBet from '@/assets/sounds/roulette/bet.mp3'
import soundBg from '@/assets/sounds/roulette/bg.mp3'
import soundNumber from '@/assets/sounds/roulette/number.mp3'
import soundRouletteSpin from '@/assets/sounds/roulette/spin.mp3'

import { GameSceneActionsProvider } from './GameSceneActionsProvider'
import { GameSceneUI } from './GameSceneUI'
import { ESOUNDS_ROULETTE, height, width } from './config'

export function RouletteGameScene() {
	sound.add(ESOUNDS_ROULETTE.BG, soundBg)
	sound.add(ESOUNDS_ROULETTE.BET, soundBet)
	sound.add(ESOUNDS_ROULETTE.NUMBER, soundNumber)
	sound.add(ESOUNDS_ROULETTE.SPIN, soundRouletteSpin)

	useEffect(() => {
		// eslint-disable-next-line no-extra-semi
		;(async () => {
			await PIXI.Assets.load(ESOUNDS_ROULETTE.BG)
			sound.play(ESOUNDS_ROULETTE.BG)
			sound.volume(ESOUNDS_ROULETTE.BG, 0.2)
		})()
	}, [])

	return (
		<section className='flex min-h-screen flex-col items-center justify-center bg-roulette bg-cover bg-no-repeat'>
			<GameSceneActionsProvider>
				<GameSceneUI>
					<Stage width={width} height={height} options={{ backgroundColor: 'green' }}>
						<BgPX />
						<RouletteSpinPX />
					</Stage>
				</GameSceneUI>
			</GameSceneActionsProvider>
		</section>
	)
}
