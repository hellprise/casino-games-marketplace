import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '@/app/store'

interface IUserState {
	name: string
	nickname: string
}

const initialState: IUserState = {
	name: '',
	nickname: 'default nick'
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setName: (state, action) => {
			state.name = action.payload
		}
	}
})

export const { setName } = userSlice.actions

export const selectUser = (state: RootState) => state.user

export default userSlice.reducer
