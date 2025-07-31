import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      DashBoard page
      <Outlet/>
    </div>
  )
}

export default Dashboard
