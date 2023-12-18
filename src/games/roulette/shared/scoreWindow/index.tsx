import { PropsWithChildren } from 'react'

import { type InfoPanelItem } from '@/games/roulette/ui/infoPanel/InfoPanel'

import { BalanceSvg } from './icons/BalanceSvg'
import { BetNumberSvg } from './icons/BetNumberSvg'
import { BetsSvg } from './icons/BetsSvg'
import { WinBetSvg } from './icons/WinBetSvg'

interface IScoreWindowProps extends PropsWithChildren {
	icon: InfoPanelItem['type']
}

export function ScoreWindow({ children, icon }: IScoreWindowProps) {
	return (
		<div className='relative font-sans text-[35px]'>
			<svg xmlns='http://www.w3.org/2000/svg' width='224' height='60' viewBox='0 0 224 60' fill='none'>
				<path
					opacity='0.4'
					d='M37.634 57.9706H186.01C202.576 57.9706 216.081 54.3474 216.081 49.903V10.072C216.081 5.62758 202.576 2.00439 186.01 2.00439H37.634C21.0678 2.00439 7.56274 5.62758 7.56274 10.072V49.8788C7.56274 54.3474 20.9777 57.9706 37.634 57.9706Z'
					fill='url(#paint0_linear_64_1006)'
				/>
				<path
					opacity='0.6'
					d='M186.01 2.00483C202.576 2.00483 216.082 5.62802 216.082 10.0725V49.8792C216.082 54.3237 202.576 57.9469 186.01 57.9469H37.6341C21.0679 57.9469 7.56287 54.3237 7.56287 49.8792V10.0725C7.56287 5.62802 21.0679 2.00483 37.6341 2.00483H186.01ZM186.01 0H37.6341C16.9263 0 0 4.51691 0 10.0966V49.9034C0 55.4589 16.8363 60 37.6341 60H186.01C206.718 60 223.644 55.4831 223.644 49.9034V10.0725C223.644 4.5169 206.808 0 186.01 0Z'
					fill='white'
				/>
				<defs>
					<linearGradient
						id='paint0_linear_64_1006'
						x1='111.835'
						y1='57.9665'
						x2='111.835'
						y2='2.01321'
						gradientUnits='userSpaceOnUse'
					>
						<stop />
						<stop offset='1' />
					</linearGradient>
				</defs>
			</svg>

			<section className='absolute right-[40%] top-[55%] translate-y-[-50%] text-right'>{children}</section>

			<section className='absolute bottom-[-5%] right-[-2%]'>
				{icon === 'balance' && <BalanceSvg />}
				{icon === 'winBet' && <WinBetSvg />}
				{icon === 'currentBet' && <BetsSvg />}
				{icon === 'activeNumber' && <BetNumberSvg />}
			</section>
		</div>
	)
}

export default ScoreWindow
