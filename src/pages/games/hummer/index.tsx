import { Link } from 'react-router-dom'

import { CoreHummerGame } from '@/games/hummer'

export default function HummerPage() {
	return (
		<section>
			<Link to='/'>Back Home</Link>

			<CoreHummerGame />
		</section>
	)
}
