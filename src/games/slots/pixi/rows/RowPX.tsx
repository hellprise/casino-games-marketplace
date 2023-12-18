import { Container, Sprite, useTick } from '@pixi/react'
import { useState } from 'react'

import { ESlotLifecycle } from '@/games/slots/slices/slotSlice'

import { useTypedSelector } from '@/hooks/useTypedSelector'

import { ISlotRow, TSlotRow } from './utils'

const ITEM_HEIGHT = 100
const SPEED = 40
const DELTA_ALIGN_CENTER = 200

export function RowPX({ row, slotRow, index }: Readonly<{ row: ISlotRow; slotRow: TSlotRow[]; index: number }>) {
	const FULL_ROW_HEIGHT = slotRow.length * ITEM_HEIGHT

	const [position, setPosition] = useState(-FULL_ROW_HEIGHT)
	const [fixPosition, setFixPosition] = useState(false)

	const lifecycle = useTypedSelector(({ slot }) => slot.lifecycle)

	const currentIndexRowItem = slotRow.findIndex(rowItem => rowItem.id === row.activeItemId)
	const currentPosition = -(currentIndexRowItem * ITEM_HEIGHT - DELTA_ALIGN_CENTER)
	const startPosition = currentPosition - FULL_ROW_HEIGHT

	const isStopping = lifecycle === ESlotLifecycle.STOPPING
	const isPlaying = lifecycle === ESlotLifecycle.PLAY

	const speed = isStopping || isPlaying ? SPEED : 0

	useTick(delta => {
		if (position >= FULL_ROW_HEIGHT) setPosition(-FULL_ROW_HEIGHT)
		else setPosition(position + speed * delta)

		if (isStopping && !fixPosition) {
			setPosition(startPosition)
			setFixPosition(true)
		}

		if (isStopping && fixPosition) {
			const koefC = currentPosition - position

			if (koefC > 0) {
				setPosition(position + speed * delta)
			} else {
				setPosition(currentPosition)
			}
		}
	})

	return (
		<Container x={index * 120} y={position}>
			{/* fate top row start */}
			<Container y={-FULL_ROW_HEIGHT}>
				{slotRow.map((row, index) => (
					<Sprite key={row.id} image={row.image} x={0} y={index * ITEM_HEIGHT} anchor={0.5} scale={0.5} />
				))}
			</Container>
			{/* fake top row end */}

			{/* fake center row start */}
			<Container>
				{slotRow.map((row, index) => (
					<Sprite key={row.id} image={row.image} x={0} y={index * ITEM_HEIGHT} anchor={0.5} scale={0.5} />
				))}
			</Container>
			{/* fake center row end */}

			{/* fake bottom row start */}
			<Container y={FULL_ROW_HEIGHT}>
				{slotRow.map((row, index) => (
					<Sprite key={row.id} image={row.image} x={0} y={index * ITEM_HEIGHT} anchor={0.5} scale={0.5} />
				))}
			</Container>
			{/* fake bottom row end */}
		</Container>
	)
}
