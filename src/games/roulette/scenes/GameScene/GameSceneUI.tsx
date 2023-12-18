import { PropsWithChildren } from 'react'

import { BetsPanel } from '@/games/roulette/ui/betsPanel/BetsPanel'
import { EventPanel } from '@/games/roulette/ui/eventPanel/EventPanel'
import { InfoPanel } from '@/games/roulette/ui/infoPanel/InfoPanel'
import { RouletteTable } from '@/games/roulette/ui/rouletteTable/RouletteTable'

export function GameSceneUI({ children }: PropsWithChildren<unknown>) {
	return (
		<section className='relative'>
			<div className='relative z-[1]'>{children}</div>

			<div className='absolute left-0 right-0 top-6 z-[1] w-full px-14'>
				<InfoPanel />
			</div>

			<div className='absolute right-[12%] top-[25%] z-[1]'>
				<EventPanel />
			</div>

			<div className='absolute right-[8%] top-[40%] z-[1]'>
				<RouletteTable />
			</div>

			<div className='absolute bottom-10 right-[26.5%] z-[1]'>
				<BetsPanel />
			</div>

			<div className='absolute -inset-8 z-0 bg-[#4C1100] blur-lg' />
		</section>
	)
}
