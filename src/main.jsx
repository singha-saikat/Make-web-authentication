import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Layout from './components/Layout';
import Login from './components/Login';
import Register from './components/Register';
import Orders from './components/Orders';
import AuthProvider from './components/Provider/AuthProvider';
import PrivateRoutes from './Router/PrivateRoutes';
import Profile from './components/Profile';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element: <Register/>
      },
      {
        path: '/orders',
        element: <PrivateRoutes><Orders></Orders></PrivateRoutes>
      },{
        path:"/profile",
        element:<PrivateRoutes><Profile/></PrivateRoutes>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
    <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
