import { useTypedSelector } from '@/hooks/useTypedSelector'

import balanceSvg from '@/assets/hummer/balance.svg'
import healthSvg from '@/assets/hummer/health.svg'

export function ScorePanel() {
	const { health, score } = useTypedSelector(state => state.hummerCore)
	const balance = useTypedSelector(state => state.wallet.game_balance)

	return (
		<section className='flex items-center justify-between px-6 text-xl'>
			<div>
				<h4>Score</h4>
				<p>{score}</p>
			</div>

			<div className='relative'>
				<div className='absolute left-[-20%] top-[50%] translate-y-[-50%]'>
					<img src={healthSvg} />
				</div>

				<h6 className='min-w-[80px] rounded-lg bg-slate-200 pl-4 text-center'>{health}</h6>
			</div>

			<div className='relative'>
				<div className='absolute left-[-20%] top-[50%] translate-y-[-50%]'>
					<img src={balanceSvg} />
				</div>

				<h6 className='min-w-[88px] rounded-lg bg-slate-200 pl-8 pr-1.5 text-center'>{balance}</h6>
			</div>
		</section>
	)
}
