import { Stage } from '@/app/config/contextBridge'

import { BodyPX } from '@/games/slots/pixi/body/BodyPX'
import { RowsPX } from '@/games/slots/pixi/rows/RowsPX'

import BalanceProvider from './BalanceProvider'
import { GameSceneUI } from './GameSceneUI'
import { SlotLifecycleProvider } from './SlotLifecycleProvider'
import { height, width } from './config'

export function SlotsGameScene() {
	return (
		<SlotLifecycleProvider>
			<BalanceProvider>
				<GameSceneUI>
					<Stage width={width} height={height} options={{ backgroundColor: 'rgba(46, 29, 51, 0.96)' }}>
						<BodyPX />
						<RowsPX />
					</Stage>
				</GameSceneUI>
			</BalanceProvider>
		</SlotLifecycleProvider>
	)
}
