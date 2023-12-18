import { Outlet } from 'react-router-dom'

export function AuthLayout() {
	return (
		<>
			<header>header auth</header>

			<main>
				<Outlet />
			</main>
		</>
	)
}
