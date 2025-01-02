import { createBrowserRouter } from 'react-router'
import NotFound from './components/pages/NotFound'
import Layout from './components/Layout'
import { RouterProvider } from 'react-router'
import { routes } from './config/routes.config'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      ...routes.map(({ path, Component }) => ({
        path: path.slice(1),
        element: <Component />
      })),
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])

const App = () => <RouterProvider router={router} />

export default App
