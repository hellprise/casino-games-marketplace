import { Container, Sprite } from '@pixi/react'

import bg from '@/assets/roulette/bg1.jpg'

export function BgPX() {
	return (
		<Container>
			<Sprite
				x={0}
				y={0}
				anchor={{
					x: 0,
					y: 0
				}}
				image={bg}
				scale={0.8}
			/>
		</Container>
	)
}
