import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login/Login';
import Product from './Pages/Product/Product';
// import men_banner from './Components/Assets/banner_mens.png'
// import women_banner from './Components/Assets/banner_women.png';
// import kid_banner from './Components/Assets/banner_kids.png'
import ProductList from './Pages/ProductList/ProductList';
import Register from './Pages/Register/Register';
import Cart from './Pages/Cart/Cart';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './redux/userRedux';
import { clearCart } from './redux/cartRedux';
import { TOKEN_KEY } from './requestMethod';
import { Layout, Logged, ProtectedRoute } from './Layout';
import User from './Components/User/User'
import Order from './Components/Order/Order';
import Profiler from './Components/Profiler/Profiler';
import Purchase from './Components/Purchase/Purchase';
import PendingOrder from './Pages/PendingOrder/PendingOrder'
import ToShipOrder from './Pages/ToShipOrder/ToShipOrder'
import CompletedOrder from './Pages/CompletedOrder/CompletedOrder'
import CancelledOrder from './Pages/CancelledOrder/CancelledOrder'
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
import ResetPassword from './Pages/ResetPassword/ResetPassword';

function App() {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch()
  const handleLogout = () => {
    console.log('123');
    dispatch(logout());
    dispatch(clearCart());
    localStorage.removeItem(TOKEN_KEY)
  }
  const LayoutUser = () => {
    return (
      <ProtectedRoute user={user}>
        <Layout handleLogout={handleLogout}>
          <div className="bass">
            <User handleLogout={handleLogout} />
            <Outlet />
          </div>
        </Layout>
      </ProtectedRoute>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout handleLogout={handleLogout}>
        <Home />
      </Layout>
    },
    {
      path: "/login",
      element: <Logged><Login /></Logged>
    },
    {
      path:"/forgot-password",
      element: <Logged><ForgotPassword/></Logged>
    },
    {
      path:"/reset-password/:id",
      element: <Logged><ResetPassword/></Logged>
    },
    {
      path: "/register",
      element: <Logged><Register /></Logged>
    },
    {
      path: "/products/:category",
      element: <Layout handleLogout={handleLogout}>
        <ProductList />
      </Layout>
    },
    {
      path: "/cart",
      element: <ProtectedRoute user={user}>
        <Layout handleLogout={handleLogout}>
          <Cart />
        </Layout>
      </ProtectedRoute>
    },
    {
      path: "/product/:id",
      element: <Layout handleLogout={handleLogout}>
        <Product />
      </Layout>
    },
    {
      path: "/order",
      element: (
        <ProtectedRoute user={user}>
          <Layout handleLogout={handleLogout}>
            <Order />
          </Layout>
        </ProtectedRoute>
      )
    },
    {
      path: "/user",
      element: <LayoutUser />,
      children: [
        {
          path: "profile",
          element: <Profiler />,
        },
        { 
          path: "purchase",
          element: <Purchase />,
          children: [
            {
              path: "",
              element: <PendingOrder />
            },
            {
              path: "toship",
              element: <ToShipOrder />
            },
            {
              path: "complete",
              element: <CompletedOrder />
            },
            {
              path: "cancel",
              element: <CancelledOrder />
            }
          ]
        }
      ]
    },
  ])

  return (
    <div>
      {/* <Home/> */}
      {/* <ProductList /> */}
      {/* <Product /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Cart /> */}

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
