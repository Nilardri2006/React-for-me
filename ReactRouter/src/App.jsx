import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import ParamComp from './components/ParamComp';
import Courses from './components/Courses';
import MockTest from './components/Mocktest';
import Reports from './Reports';
import Notfound from './Notfound';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <div>
        <Navbar />
        <Home />
      </div>
    },
    {
      path: "/about",
      element: <div>
        <Navbar />
        <About />
      </div>
    },
    {
      path: "/dashboard",
      element: <div>
        <Navbar />
        <Dashboard />
      </div>,
      children:[
        {
          path:'courses',
          element:<Courses/>,
        },
        {
          path:'mock-test',
          element:<MockTest/>,
        },
        {
          path:'reports',
          element:<Reports/>,
        },
      ]
    },
    {
      path: "/student/:id",
      element:
      <div>
        <Navbar />
       <ParamComp/>
      </div>
    },
    {
      path:'*',
      element:<Notfound/>
    }
  ]
);
const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
