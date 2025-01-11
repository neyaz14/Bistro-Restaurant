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
import AllUsers from '../pages/Dashboard/Allusers'
import AdminRoute from './AdminRoute';
import AddItem from '../pages/Dashboard/AddItem'
import ManageItems from '../pages/Dashboard/ManageItems'
import AdminHome from '../pages/Dashboard/AdminHome'
import UpdateItem from '../pages/Dashboard/UpdateItem'
import Payment from '../pages/Dashboard/Payment/Payment'
import CheckoutForm from '../pages/Dashboard/Payment/CheckoutForm'


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

  }, {
    path: '/dashboard',
    element: <PrivateRoute> <Dashboard></Dashboard></PrivateRoute>,
    children: [
      // user routes
      {
        path: '/dashboard/cart',
        element: <Cart></Cart>
      }, {
        path: '/dashboard/payment',
        element: <Payment></Payment>
      },
      {
        path: '/dashboard/checkoutForm',
        element: <CheckoutForm></CheckoutForm>
      },
      // Admin Route start from here ...
      {
        path: '/dashboard/allusers',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      }, {
        path: '/dashboard/addItems',
        element: <AdminRoute><AddItem></AddItem></AdminRoute>
      }
      , {
        path: '/dashboard/manageItems',
        element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
      }
      , {
        path: '/dashboard/adminHome',
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      }
      , {
        path: '/dashboard/updateItem/:id',
        element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`)
      }
    ]
  }
])

export default router;
