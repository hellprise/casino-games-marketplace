import { Outlet } from 'react-router-dom'

interface IMainLayoutProps {}

export function MainLayout({}: IMainLayoutProps) {
	return (
		<>
			<header>header</header>

			<main>
				<Outlet />
			</main>
		</>
	)
}
