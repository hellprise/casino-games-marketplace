import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export const ROULETTE_NUMBERS = [
	0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7,
	28, 12, 35, 3, 26
]

interface IRouletteSpin {
	readonly rouletteNumbers: number[]
	readonly stepCircle: number
	speed: number
	rotationInProgress: boolean
	degreesRotation: number
	currentNumber: number | null
}

const initialState: IRouletteSpin = {
	rouletteNumbers: ROULETTE_NUMBERS,
	stepCircle: 360 / ROULETTE_NUMBERS.length,
	speed: 0,
	rotationInProgress: false,
	degreesRotation: 0,
	currentNumber: null
}

export const rouletteSpinSlice = createSlice({
	name: 'rouletteSpin',
	initialState,
	reducers: {
		setRouletteSpinStartSpeed: state => {
			const randomSpeed = 1 + Math.random() * 0.1

			state.speed = randomSpeed
			state.rotationInProgress = true
		},
		setRouletteSpinSpeed: (state, { payload }: PayloadAction<number | null>) => {
			if (payload === 0) {
				state.rotationInProgress = false
				state.speed = 0
			} else {
				state.speed -= state.speed / 150
			}
		},
		setRouletteSpinDegreesRotation: (state, { payload }: PayloadAction<number>) => {
			state.degreesRotation = payload

			const deltaIndex = Math.floor((payload + state.stepCircle / 2) / state.stepCircle)

			const currentIndex = state.rouletteNumbers.length - deltaIndex

			state.currentNumber = state.rouletteNumbers[currentIndex]
		},
		resetRouletteSpin: state => {
			state.currentNumber = null
		}
	}
})

export const { setRouletteSpinStartSpeed, setRouletteSpinSpeed, setRouletteSpinDegreesRotation, resetRouletteSpin } =
	rouletteSpinSlice.actions

// export const selectRouletteSpinSpeed = (state: RootState) => state.rouletteSpin.speed

export default rouletteSpinSlice.reducer
