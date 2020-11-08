import React from 'react'
import Header from '../Header.jsx'
import Sidebar from '../Sidebar.jsx'
import "../../styles/dashboard.scss"

const Dashboard = () =>{
  return (
    <div className="dashboard-wrapper">
      <Sidebar />
      <Header />
    </div>
  )
}

export default Dashboard