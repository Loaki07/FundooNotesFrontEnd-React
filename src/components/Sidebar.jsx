import React from 'react'
import "../styles/sidebar.scss"

const Sidebar = () =>{
  return (
    <>
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
    </>
  )
}

export default Sidebar