import React, { useState } from 'react'
import NoteApis from "../../services/NoteApis"
import Header from '../Header.jsx'
import Sidebar from '../Sidebar.jsx'
import DisplayNote from '../DisplayNote.jsx'
import CreateNoteForm from '../CreateNoteForm.jsx'
import "../../styles/dashboard.scss"

const { getNotes } = new NoteApis();

const Dashboard = () =>{
  const [ state, setState ] = useState({
    noteData: [
      {
        title: "Note Title",
        description: "Note Description",
      }
    ],
    isDataReceived: false,
    displayNotes: null,
  })
  
  const getNotesFromDb = (event) => { 
    event.preventDefault();
    const token = localStorage.getItem('token')
    getNotes(token).then(result => {
      setState({ ...state, isDataReceived: true, noteData: result.data.data})
    });
  }

  return (
    <div className="dashboard-grid-container">
      <Header />
      <div className="dashboard-body-container">
        <Sidebar displayNotes={getNotesFromDb} />
        <div className="dashboard-notes-container">
          <div className="create-note-form box1">
            <CreateNoteForm />
          </div>
          <div 
            className="db-disp-notes-cont box2" 
          >
          { state.isDataReceived &&
            state.noteData.reverse().map((note, index) => {
               return (<DisplayNote 
                  key={index} 
                  title={note.title} 
                  description={note.description} 
                />)
            })
          }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard