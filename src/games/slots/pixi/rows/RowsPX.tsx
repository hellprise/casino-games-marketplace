import { Container, Graphics } from '@pixi/react'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { useTypedSelector } from '@/hooks/useTypedSelector'

import { RowPX } from './RowPX'
import { SLOT_ROW, generateRandomRow } from './utils'

export function RowsPX() {
	const [mounted, setMounted] = useState(false)

	const maskRef = useRef(null)

	const rows = useTypedSelector(({ slot }) => slot.rows)

	const firstSlotRow = useMemo(() => generateRandomRow(SLOT_ROW), [])
	const secondSlotRow = useMemo(() => generateRandomRow(SLOT_ROW), [])
	const thirdSlotRow = useMemo(() => generateRandomRow(SLOT_ROW), [])

	const slotRows = [firstSlotRow, secondSlotRow, thirdSlotRow]

	const draw = useCallback((g: any) => {
		g.beginFill(0x000000)
		g.drawRect(-80, 50, 400, 300)
		g.endFill()
	}, [])

	useEffect(() => {
		setMounted(true)
	}, [])

	return (
		// <Container x={480} y={0} mask={maskRef?.current}>
		<Container x={480} y={50} mask={maskRef?.current}>
			<Graphics name='mask' draw={draw} ref={maskRef} />

			{rows.map((row, index) => (
				<RowPX key={row.id} row={row} index={index} slotRow={slotRows[index]} />
			))}
		</Container>
	)
}
