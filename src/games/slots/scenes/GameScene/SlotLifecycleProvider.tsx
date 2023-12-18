import { PropsWithChildren, useEffect } from 'react'

import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'

import { ESlotLifecycle } from '../../slices/slotSlice'

export function SlotLifecycleProvider({ children }: Readonly<PropsWithChildren<unknown>>) {
	const lifecycle = useTypedSelector(({ slot }) => slot.lifecycle)

	const { setSlotLifecycle } = useActions()

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (lifecycle === ESlotLifecycle.PLAY) setSlotLifecycle(ESlotLifecycle.STOPPING)
		}, 2000)

		return () => clearTimeout(timeout)
	}, [lifecycle, setSlotLifecycle])

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (lifecycle === ESlotLifecycle.STOPPING) setSlotLifecycle(ESlotLifecycle.STOP)
		}, 3000)

		return () => clearTimeout(timeout)
	}, [lifecycle, setSlotLifecycle])

	useEffect(() => {
		if (lifecycle === ESlotLifecycle.STOP) setSlotLifecycle(ESlotLifecycle.INFO)
	}, [lifecycle, setSlotLifecycle])

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (lifecycle === ESlotLifecycle.INFO) setSlotLifecycle(ESlotLifecycle.READY_TO_START)
		}, 3000)

		return () => clearTimeout(timeout)
	}, [lifecycle, setSlotLifecycle])

	return <>{children}</>
}
