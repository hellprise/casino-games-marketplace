import { Container, Sprite } from '@pixi/react'

import bodyImage from '@/assets/slot/body.svg'
import lineImage from '@/assets/slot/line.png'

export function BodyPX() {
	return (
		<Container>
			{/* <Sprite x={600} y={225} image={bodyImage} anchor={0.5} /> */}
			<Sprite x={600} y={250} image={bodyImage} anchor={0.5} />

			{/* <Sprite image={lineImage} x={420} y={50} /> */}
			<Sprite image={lineImage} x={420} y={75} />
			<Sprite image={lineImage} x={540} y={75} />
			<Sprite image={lineImage} x={660} y={75} />
			<Sprite image={lineImage} x={780} y={75} />
		</Container>
	)
}
