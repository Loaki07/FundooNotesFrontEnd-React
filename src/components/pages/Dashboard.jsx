import React, { useEffect } from 'react'
import Header from '../Header.jsx'
import Sidebar from '../Sidebar.jsx'
import "../../styles/dashboard.scss"

const Dashboard = () =>{

  useEffect(() => {
    const sidebarToggle = document.querySelector("#sidebarCollapse")
    sidebarToggle.onclick = () => {
      document.querySelector("#sidebar").classList.toggle('active')
    } 
  },[]);

  return (
    <div className="dashboard-wrapper">
      <Sidebar />
      <Header />
    </div>
  )
}

export default Dashboard