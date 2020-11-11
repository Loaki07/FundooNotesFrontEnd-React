import React, { useEffect } from 'react'
import Header from '../Header.jsx'
import Sidebar from '../Sidebar.jsx'
import "../../styles/dashboard.scss"

const Dashboard = () =>{
  return (
    <div className="dashboard-grid-container">
      <Header />
      <Sidebar />
    </div>
  )
}

export default Dashboard