import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AboutUs from './Components/AboutUs/AboutUs';
import AuthProviders from './Components/Providers/AuthProviders';
import CardDetails from './Components/CardDetails/CardDetails';
import Details from './Components/Details/Details';
import MonthlyCare from './Components/MonthlyCare/MonthlyCare';
import PrivateRoutes from './Components/PrivateRoutes/PrivateRoutes';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/service/:id",
        element:<CardDetails></CardDetails>,
        loader :()=> fetch('/cards.json')
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/about",
        element:<AboutUs></AboutUs>
      },
      {
        path:"/details",
        element:<PrivateRoutes><Details></Details></PrivateRoutes>
      },
      {
        path:"/care",
        element:<PrivateRoutes><MonthlyCare></MonthlyCare></PrivateRoutes>
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProviders>
   <RouterProvider router={router} />
   </AuthProviders>
  </React.StrictMode>,
)
