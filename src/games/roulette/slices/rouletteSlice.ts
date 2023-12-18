import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export enum ERouletteBetStatus {
	WIN = 'win',
	LOSE = 'lose'
}

export enum RouletteLifecycle {
	READY_TO_START = 'start',
	PLAY = 'play',
	FINISHED = 'finished',
	INFO = 'info'
}

interface IRouletteInitialState {
	readonly winBet: number
	lifecycle: `${RouletteLifecycle}`
	betStatus: `${ERouletteBetStatus}` | null
	activeNumber: number | null
	currentBet: number
}

const initialState: IRouletteInitialState = {
	winBet: 36,
	lifecycle: RouletteLifecycle.READY_TO_START,
	betStatus: null,
	activeNumber: null,
	currentBet: 0
}

export const rouletteSlice = createSlice({
	name: 'roulette',
	initialState,
	reducers: {
		setActiveNumber: (state, { payload }: PayloadAction<number>) => {
			state.activeNumber = payload
		},
		setCurrentBet: (state, { payload }: PayloadAction<number>) => {
			if (state.currentBet + payload < 0) state.currentBet = 0
			else state.currentBet += payload
		},
		setRouletteLifecycle: (state, { payload }: PayloadAction<RouletteLifecycle>) => {
			state.lifecycle = payload
		},
		setRouletteBetStatus: (state, { payload }: PayloadAction<ERouletteBetStatus | null>) => {
			state.betStatus = payload
		},
		resetRoulette: state => {
			state.activeNumber = null
			state.currentBet = 0
			state.betStatus = null
			state.lifecycle = RouletteLifecycle.READY_TO_START
		}
	}
})

export const { setActiveNumber, setCurrentBet, setRouletteLifecycle, setRouletteBetStatus, resetRoulette } =
	rouletteSlice.actions

export default rouletteSlice.reducer
