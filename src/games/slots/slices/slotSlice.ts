import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { ISlotRow } from '../pixi/rows/utils'

export enum ESlotLifecycle {
	READY_TO_START = 'start',
	PLAY = 'play',
	STOPPING = 'stopping',
	STOP = 'stop',
	INFO = 'info'
}

export enum ESlotStatus {
	WIN = 'win',
	LOSE = 'lose'
}

interface ISlot {
	lifecycle?: `${ESlotLifecycle}`
	slotStatus: `${ESlotStatus}` | null
	rows: ISlotRow[]
	currentBet: number
}

const initialState: ISlot = {
	lifecycle: ESlotLifecycle.READY_TO_START,
	slotStatus: null,
	rows: [
		{
			id: 2,
			activeItemId: 7
		},
		{
			id: 1,
			activeItemId: 7
		},
		{
			id: 3,
			activeItemId: 7
		}
	],
	currentBet: 0
}

export const slotSlice = createSlice({
	name: 'slot',
	initialState,
	reducers: {
		setSlotLifecycle: (state, { payload }: PayloadAction<ESlotLifecycle>) => {
			state.lifecycle = payload
		},
		startSlot: state => {
			state.lifecycle = ESlotLifecycle.PLAY
			state.rows = state.rows.map(row => ({
				...row,
				activeItemId: Math.ceil(Math.random() * 12)
			}))

			const arrActiveItemsId = state.rows.map(row => row.activeItemId)

			const firstItem = arrActiveItemsId[0]

			const win = arrActiveItemsId.every(el => el === firstItem)

			if (win) state.slotStatus = ESlotStatus.WIN
			else state.slotStatus = ESlotStatus.LOSE
		},
		setSlotStatus: (state, { payload }: PayloadAction<ESlotStatus | null>) => {
			state.slotStatus = payload
		},
		setSlotCurrentBet: (state, { payload }: PayloadAction<number>) => {
			if (state.currentBet + payload < 0) state.currentBet = 0
			else state.currentBet += payload
		}
	}
})

export const { setSlotLifecycle, startSlot, setSlotStatus, setSlotCurrentBet } = slotSlice.actions

export default slotSlice.reducer
