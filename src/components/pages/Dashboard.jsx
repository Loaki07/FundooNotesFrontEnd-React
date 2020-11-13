import React from 'react'
import Header from '../Header.jsx'
import Sidebar from '../Sidebar.jsx'
import CreateNoteForm from '../CreateNoteForm.jsx'
import "../../styles/dashboard.scss"

const Dashboard = () =>{
  const displayNotes = () => {
    const notesArray = []; 
    for (let i = 0; i <30; i++ ) {
      notesArray.push(
        <div key={i} className="note-boxes">
          Notes, Notes body and Content
        </div>
      )
    }
    return (notesArray)
  }
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
            {displayNotes()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard