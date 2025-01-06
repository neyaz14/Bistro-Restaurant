import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home'
import Login from '../pages/Authentication/Login'
import Register from '../pages/Authentication/Register'
import ErrorPage from '../pages/ErrorPage'
import Menu from '../pages/Menu'
import OrderFood from '../pages/OrderFood'
import Dashboard from '../layouts/Dashboard'
import Cart from '../pages/Dashboard/Cart'
import PrivateRoute from './PrivateRoute'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/registration',
        element: <Register />,
      },
      {
        path: '/menu',
        element: <Menu />,
      },
      {
        path: '/orderFood?/:category',
        element: <OrderFood />,
      },
    ],

  },{
    path: '/dashboard',
    element:<PrivateRoute> <Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: '/dashboard/cart',
        element: <Cart></Cart>
      }
    ]
  }
])

export default router
