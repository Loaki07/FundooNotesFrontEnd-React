import React from 'react'
import Header from '../Header.jsx'
import Sidebar from '../Sidebar.jsx'
import CreateNoteForm from '../CreateNoteForm.jsx'
import "../../styles/dashboard.scss"

const Dashboard = () =>{
  return (
    <div className="dashboard-grid-container">
      <Header />
      <div className="dashboard-body-container">
        <Sidebar />
        <div className="dashboard-notes-container">
          <div className="create-note-form box1">
            <CreateNoteForm />
          </div>
          <div className="db-disp-notes-cont box2">
            <div className="note-boxes">
              Notes, Notes body and Content
            </div>
            <div className="note-boxes">
              Notes, Notes body and Content
            </div>
            <div className="note-boxes">
              Notes, Notes body and Content
            </div>
            <div className="note-boxes">
              Notes, Notes body and Content
            </div>
            <div className="note-boxes">
              Notes, Notes body and Content
            </div>
            <div className="note-boxes">
              Notes, Notes body and Content
            </div>
            <div className="note-boxes">
              Notes, Notes body and Content
            </div>
            <div className="note-boxes">
              Notes, Notes body and Content
            </div>
            <div className="note-boxes">
              Notes, Notes body and Content
            </div>
            <div className="note-boxes">
              Notes, Notes body and Content
            </div>
            <div className="note-boxes">
              Notes, Notes body and Content
            </div>
            <div className="note-boxes">
              Notes, Notes body and Content
            </div>
            <div className="note-boxes">
              Notes, Notes body and Content
            </div>
            <div className="note-boxes">
              Notes, Notes body and Content
            </div>
            <div className="note-boxes">
              Notes, Notes body and Content
            </div>
            <div className="note-boxes">
              Notes, Notes body and Content
            </div>
            <div className="note-boxes">
              Notes, Notes body and Content
            </div>
            <div className="note-boxes">
              Notes, Notes body and Content
            </div>
            <div className="note-boxes">
              Notes, Notes body and Content
            </div>
            <div className="note-boxes">
              Notes, Notes body and Content
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard