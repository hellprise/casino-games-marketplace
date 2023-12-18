import { Container, Sprite } from '@pixi/react'

import bgImage from '@/assets/hummer/bg.jpg'

export function HummerBgPX() {
	return (
		<Container>
			<Sprite x={0} y={0} image={bgImage} />
		</Container>
	)
}
