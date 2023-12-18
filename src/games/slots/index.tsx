import { SlotsGameScene } from './scenes/GameScene'

export function CoreSlotsGame() {
	return (
		<section className='bg-slots flex min-h-screen flex-col items-center justify-center bg-cover bg-no-repeat'>
			<SlotsGameScene />
		</section>
	)
}
