import { userSlice } from '@/entities/user/slices/userSlice'
import { walletSlice } from '@/entities/wallet/slices/walletSlice'

import { hummerCoreSlice } from '@/games/hummer/slices/hummerCoreSlice'
import { rouletteSlice } from '@/games/roulette/slices/rouletteSlice'
import { rouletteSpinSlice } from '@/games/roulette/slices/rouletteSpinSlice'
import { slotSlice } from '@/games/slots/slices/slotSlice'

export const rootActions = {
	...rouletteSlice.actions,
	...rouletteSpinSlice.actions,
	...walletSlice.actions,
	...userSlice.actions,
	...slotSlice.actions,
	...hummerCoreSlice.actions
}
