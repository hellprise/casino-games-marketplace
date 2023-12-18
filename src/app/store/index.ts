import { configureStore } from '@reduxjs/toolkit'

import { userApi } from '@/entities/user/api/userApi'
import userReducer from '@/entities/user/slices/userSlice'
import { walletApi } from '@/entities/wallet/api/walletApi'
import walleteReducer from '@/entities/wallet/slices/walletSlice'

import HummerCoreReducer from '@/games/hummer/slices/hummerCoreSlice'
import rouletteReducer from '@/games/roulette/slices/rouletteSlice'
import rouletteSpinReducer from '@/games/roulette/slices/rouletteSpinSlice'
import slotReducer from '@/games/slots/slices/slotSlice'

export const store = configureStore({
	reducer: {
		user: userReducer,
		wallet: walleteReducer,
		roulette: rouletteReducer,
		rouletteSpin: rouletteSpinReducer,
		slot: slotReducer,
		hummerCore: HummerCoreReducer,
		[userApi.reducerPath]: userApi.reducer,
		[walletApi.reducerPath]: walletApi.reducer
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat([userApi.middleware, walletApi.middleware])
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
