import React, { useEffect } from 'react'
import NoteApis from "../../services/NoteApis"
import Header from '../Header.jsx'
import Sidebar from '../Sidebar.jsx'
import DisplayNote from '../DisplayNote.jsx'
import CreateNoteForm from '../CreateNoteForm.jsx'
import "../../styles/dashboard.scss"

const { getNotes } = new NoteApis();

const Dashboard = () =>{
  
  const notesArray = [];

  useEffect(() => {
    const token = localStorage.getItem('token')
    console.log(token);
    getNotes(token).then(res => {
      res.data.data.forEach(note => {
        notesArray.push(note)
      })
      console.log(res.data.data)
      console.log(notesArray.length);
    })
  })

  const displayNotes = () => {
    const someArray = [];
    for (let i = 0; i <30; i++ ) {
      someArray.push(
        <DisplayNote key={i}  />
      )
    }
    return (someArray)
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