import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IHummerPit, MOCK_PITS } from './model/Pit'

const DEFAULT_HEALTH = 3
const DEFAULT_SCORE = 1000

export enum EHummerScenes {
	MENU = 'menu',
	GAME = 'game'
}

interface IHummer {
	scene: `${EHummerScenes}`
	pits: IHummerPit[]
	score: number
	health: number
	isGameOver: boolean
}

const initialState: IHummer = {
	scene: EHummerScenes.MENU,
	pits: MOCK_PITS,
	health: DEFAULT_HEALTH,
	score: DEFAULT_SCORE,
	isGameOver: false
}

export const hummerCoreSlice = createSlice({
	name: 'hummerCore',
	initialState,
	reducers: {
		setHummerCoreScene: (state, { payload }: PayloadAction<EHummerScenes>) => {
			state.scene = payload
		},
		setHummerPits: (state, { payload }: PayloadAction<{ currentIndex: number; state: IHummerPit['state'] }>) => {
			const newPitsState = state.pits.map((pit, index) => {
				if (index === payload.currentIndex) {
					return {
						...pit,
						state: payload.state
					}
				}

				return pit
			})

			state.pits = [...newPitsState]
		},
		setHummerHealth: (state, { payload }: PayloadAction<number>) => {
			state.health = payload
		},
		setHummerScore: (state, { payload }: PayloadAction<number>) => {
			if (state.score + payload < 0) {
				if (state.health - 1 <= 0) state.isGameOver = true
				else {
					state.health -= 1
					state.score = DEFAULT_SCORE
				}
			} else state.score += payload
		}
	}
})

export const { setHummerCoreScene, setHummerPits, setHummerScore, setHummerHealth } = hummerCoreSlice.actions

export default hummerCoreSlice.reducer
