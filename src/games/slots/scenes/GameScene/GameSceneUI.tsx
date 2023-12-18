import { PropsWithChildren } from 'react'

import { BetsPanel } from '@/games/slots/ui/betsPanel'
import { EventPanel } from '@/games/slots/ui/eventPanel'
import { InfoPanel } from '@/games/slots/ui/infoPanel'

import titleImage from '@/assets/slot/title.svg'

export function GameSceneUI({ children }: PropsWithChildren<unknown>) {
	return (
		<section className='shadow-slots relative rounded-[20px]'>
			<div className='absolute -top-[17%] left-1/2 z-10 -translate-x-1/2'>
				<img src={titleImage} alt='title image' />
			</div>

			<div className='relative z-[1] overflow-hidden rounded-[20px]'>{children}</div>

			<div className='absolute left-[3%] top-[30%] z-[1]'>
				<InfoPanel />
			</div>

			<div className='absolute bottom-[15%] right-[10.7%] z-[1]'>
				<EventPanel />
			</div>

			<div className='absolute bottom-[2%] left-1/2 z-[1] -translate-x-1/2'>
				<BetsPanel />
			</div>
		</section>
	)
}
