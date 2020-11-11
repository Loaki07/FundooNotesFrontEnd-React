import React, {useEffect} from 'react'
import Header from '../Header.jsx'
import Sidebar from '../Sidebar.jsx'
import "../../styles/test-page.scss"

const TestPage = () =>{

  return (
    <div className="dashboard-grid-container">
      <Header />
      <div className="dashboard-body-container">
        <Sidebar />
        <div className="dashboard-notes-container">
          <div className="box1">
            Create Note Form
          </div>
          <div className="db-disp-notes-cont box2">
            <div className="note-boxes">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium tempora voluptas earum iusto? Qui consequatur cum autem porro minus asperiores.
            </div>
            <div className="note-boxes">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium tempora voluptas earum iusto? Qui consequatur cum autem porro minus asperiores.
            </div>
            <div className="note-boxes">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium tempora voluptas earum iusto? Qui consequatur cum autem porro minus asperiores.
            </div>
            <div className="note-boxes">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium tempora voluptas earum iusto? Qui consequatur cum autem porro minus asperiores.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestPage