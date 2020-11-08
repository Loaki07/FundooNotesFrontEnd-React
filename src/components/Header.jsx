import React from 'react'
import '../styles/header.scss'

const Header = () =>{
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div>
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
              <form className="navbar-form" role="search">
                <div className="input-group">
                    <div className="input-group-btn">
                        <button className="btn btn-default" type="submit"><i className="fas fa-search"></i></button>
                    </div>
                    <input type="text" className="form-control" placeHolder="Search" 
                    name="srch-term" 
                    id="srch-term"/>
                    <div className="input-group-btn">
                        <button className="btn btn-default" type="submit"><i class="fas fa-times"></i></button>
                    </div>
                </div>
              </form>
            </li>
            {/* <li className="nav-item">
              <form>
                <div className="form-group d-flex justify-content-between">
                  <i className="fas fa-search"></i>
                  <input 
                    type="text" 
                    placeholder="search"
                    className="form-control"
                  />
                  <i className="">&times;</i>
                </div>
              </form>
            </li> */}
          </ul>
          <ul className="navbar-nav">
            <li><i className="fas fa-redo fa-1x nav-item nav-link header-right-icons"></i></li>
            <li><i className="fas fa-list-alt fa-1x nav-item nav-link header-right-icons"></i></li>
            <li><i className="fas fa-cog fa-1x nav-item nav-link header-right-icons"></i></li>
            <li><i className="fas fa-th fa-1x nav-item nav-link header-right-icons"></i></li>
            <li><i className="fas fa-user-circle fa-1x nav-item nav-link header-right-icons"></i></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header