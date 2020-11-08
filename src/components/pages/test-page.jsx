import React from 'react'

const TestPage = () =>{
  return (
    <div className="wrapper">
      <nav id="sidebar>">
        <div className="sidebar-header">
          <h3>
            FundooNotes Sidebar
          </h3>
        </div>

        <ul className="list-unstyled components">
          <p>fundoo-side</p>
          <li>
            <a 
              href="/" 
              >
                <i class="fas fa-lightbulb">
                  <span>Notes</span>
                </i></a>
          </li>
          <li>
            <a 
              href="/" 
              >
                <i class="fas fa-bell">
                  <span>Reminders</span>
                </i></a>
          </li>
          <li>
            <a 
              href="/" 
              >
                <i class="fas fa-pencil-alt">
                  <span>Edit Labels</span>
                </i></a>
          </li>
          <li>
            <a 
              href="/" 
              >
                <i class="fas fa-archive">
                  <span>Archive</span>
                </i></a>
          </li>
          <li>
            <a 
              href="/" 
              >
                <i class="fas fa-trash">
                  <span>Bin</span>
                </i></a>
          </li>
          
        </ul>
      </nav>
    </div>
  )
}

export default TestPage