import { Outlet } from 'react-router-dom'

export function GamesLayout() {
	return (
		<>
			{/* <header>header games</header> */}

			<main>
				<Outlet />
			</main>
		</>
	)
}
