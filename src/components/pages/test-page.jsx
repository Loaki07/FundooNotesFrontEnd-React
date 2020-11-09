import React, { Fragment, useEffect } from 'react'
import "../../styles/dashboard.scss"
import "../../styles/sidebar.scss"
import '../../styles/header.scss'

const TestPage = () =>{

  useEffect(() => {
    const sidebarToggle = document.querySelector("#sidebarCollapse")
    sidebarToggle.onclick = () => {
      document.querySelector("#sidebar").classList.toggle('active')
    }
  },[]);

  // const toggleSideBar = () => {
  //   const sidebarToggle = document.querySelector("#sidebar")
  //   sidebarToggle.classList.toggle('active')
  // }

  return (
    <div className="dashboard-wrapper">
      <Fragment>
        <nav id="sidebar">
          <ul className="list-unstyled components">
            <li>
              <a 
                href="/" 
                >
                  <i className="fas fa-lightbulb">
                    <span> Notes</span>
                  </i></a>
            </li>
            <li>
              <a 
                href="/" 
                >
                  <i className="fas fa-bell">
                    <span> Reminders</span>
                  </i></a>
            </li>
            <li>
              <a 
                href="/" 
                >
                  <i className="fas fa-pencil-alt">
                    <span> Edit Labels</span>
                  </i></a>
            </li>
            <li>
              <a 
                href="/" 
                >
                  <i className="fas fa-archive">
                    <span> Archive</span>
                  </i></a>
            </li>
            <li>
              <a 
                href="/" 
                >
                  <i className="fas fa-trash">
                    <span> Bin</span>
                  </i></a>
            </li>
            
          </ul>
        </nav>
      </Fragment>
      <div className="header-wrapper">
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <button 
            className="btn btn-circle btn-sm" 
            type="button"
            id="sidebarCollapse"
            // onClick={toggleSideBar}
          >
            <i className="fas fa-bars fa-1x nav-link header-right-icons"></i>
          </button>
          <div className="logo">  
            <a 
              className="navbar-brand" 
              href="/dashboard" 
              tabIndex="0" 
              title="Fundoo Notes"
            >
              <img 
                className="app-logo" 
                src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" 
                srcSet="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png 1x, https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png 2x " 
                alt="app-logo" />
              <span 
                className="navbar-brand"
              >Fundoo Notes</span>
            </a>
          </div>
          <button className="navbar-toggler">
            <span 
              className="navbar-toggler-icon"   data-toggle="collapse"
              data-target="#navbarMenu"
            ></span>
          </button>
          <div 
            className="collapse navbar-collapse"
            id="navbarMenu"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <form 
                  className="navbar-form" 
                  role="search">
                  <div className="input-group">
                      <div className="input-group-btn">
                        <button className="btn btn-default" type="submit"><i className="fas fa-search"></i></button>
                      </div>
                      <div className="hearder-searchbar" >
                        <input type="text" 
                          className="form-control" 
                          placeholder="Search" 
                          name="srch-term" 
                          id="srch-term"/>
                      </div>
                      <div className="input-group-btn">
                        <button className="btn btn-default" type="submit"><i className="fas fa-times"></i></button>
                      </div>
                  </div>
                </form>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="/dashboard" className="btn btn-circle btn-sm" type="button">
                    <i className="fas fa-redo fa-1x nav-link header-right-icons"></i>
                </a>
              </li>
              <li className="nav-item">
                <button className="btn btn-circle btn-sm" type="button">
                  <i className="fas fa-list-alt fa-1x nav-link header-right-icons"></i>
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-circle btn-sm" type="button">
                  <i className="fas fa-cog fa-1x nav-link header-right-icons"></i>
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-circle btn-sm" type="button">
                  <i className="fas fa-th fa-1x nav-link header-right-icons"></i>
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-circle btn-sm" type="button">
                  <i className="fas fa-user-circle fa-1x nav-link header-right-icons"></i>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default TestPage