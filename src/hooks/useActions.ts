import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'

import { useAppDispatch } from '@/app/store/hooks'
import { rootActions } from '@/app/store/rootActions'

export const useActions = () => {
	const dispatch = useAppDispatch()

	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
