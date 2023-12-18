import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import { router } from '@/app/router'
import { store } from '@/app/store'

function App() {
	return (
		<Provider store={store}>
			<RouterProvider router={router}></RouterProvider>
		</Provider>
	)
}

export default App
