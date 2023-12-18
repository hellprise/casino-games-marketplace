import { PayloadAction, createSlice } from '@reduxjs/toolkit'

// import { RootState } from '@/app/store'
import { IWallet } from '../model/Wallet'

const initialState: IWallet = {
	game_balance: 5000
}

export const walletSlice = createSlice({
	name: 'wallet',
	initialState,
	reducers: {
		setBalance: (state, { payload }: PayloadAction<number>) => {
			state.game_balance += payload
		}
	}
})

export const { setBalance } = walletSlice.actions

// export const selectBalance = (state: RootState ) => state.wallet.game_balance

export default walletSlice.reducer
