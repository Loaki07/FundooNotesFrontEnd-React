import React, { useState } from 'react'
import NoteApis from "../../services/NoteApis"
import Header from '../Header.jsx'
import Sidebar from '../Sidebar.jsx'
import DisplayNote from '../DisplayNote.jsx'
import CreateNoteForm from '../CreateNoteForm.jsx'
import UpdateNote from "../updateNote.jsx"
import "../../styles/dashboard.scss"

const { getNotes } = new NoteApis();

const Dashboard = () =>{
  const [ showUpdateNote, setShowUpdateNote] = useState(false);
  const [ state, setState ] = useState({
    noteData: [
      {
        noteId: "",
        title: "Note Title",
        description: "Note Description",
      }
    ],
    isDataReceived: false,
    updateNote: false,
  })
  
  const getNotesFromDb = (event) => { 
    event.preventDefault();
    const token = localStorage.getItem('token')
    getNotes(token).then(result => {
      console.log(result);  
      setState({ ...state, 
            isDataReceived: true,
            noteData: result.data.data})
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
            state.noteData.map((note, index) => {
              
               return (
                 <div>
                  <DisplayNote 
                      variant="primary"
                      key={index}
                      noteObject={note}
                      noteId={note._id} 
                      title={note.title} 
                      description={note.description} 
                      handleClick={() => {
                        console.log("modal should pop up");
                        setShowUpdateNote(true)
                      }}
                      // handleShow={showUpdateNote}
                      // handleOnHide={() => {
                      //   setShowUpdateNote(false)
                      // }}
                    />
                     <UpdateNote 
                        // key={index + 1}
                        // toggleNote={this.toggleUpdateNote}
                        // noteState={this.note.isNoteOpen}
                        // noteDetails={this.note.noteObject}
                        show={showUpdateNote}
                        onHide={() => {
                          setShowUpdateNote(false)
                        }}
                        noteId={note._id}
                        title={note.title}
                        description={note.description}
                      />
                 </div>
              )
            })
          }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard