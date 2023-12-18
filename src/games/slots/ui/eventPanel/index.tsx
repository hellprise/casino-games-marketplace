import clsx from 'clsx'

import { ESlotLifecycle, ESlotStatus } from '@/games/slots/slices/slotSlice'

import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'

import buttonImage from '@/assets/slot/info/button.png'
import handleImage from '@/assets/slot/info/handle.png'
import loseImage from '@/assets/slot/info/lose.png'
import spinText from '@/assets/slot/info/spin.png'
import winImage from '@/assets/slot/info/win.svg'

export function EventPanel() {
	const { lifecycle, slotStatus } = useTypedSelector(({ slot }) => slot)

	const { startSlot } = useActions()

	const onStart = () => startSlot()

	const isReadyToStart = lifecycle === ESlotLifecycle.READY_TO_START

	return (
		<div className='flex h-[300px] w-[150px] flex-col justify-between'>
			<div>
				{lifecycle === ESlotLifecycle.INFO && (
					<div>
						{/* TODO: it can be optimized */}
						{slotStatus === ESlotStatus.WIN && <img src={winImage} />}
						{slotStatus !== ESlotStatus.WIN && <img src={loseImage} />}
					</div>
				)}
			</div>

			<button onClick={onStart} className={clsx('relative', { 'cursor-not-allowed': !isReadyToStart })}>
				{isReadyToStart && (
					<span className='absolute left-[45%] top-[50%] z-20 block translate-x-[-50%] translate-y-[-50%]'>
						<img src={spinText} />
					</span>
				)}

				<img src={buttonImage} className='relative z-10' />

				<img className='absolute bottom-0 right-[85%]' src={handleImage} />
			</button>
		</div>
	)
}
