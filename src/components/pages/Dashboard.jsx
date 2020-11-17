import React, { useState, useEffect } from 'react'
import NoteApis from "../../services/NoteApis"
import Header from '../Header.jsx'
import Sidebar from '../Sidebar.jsx'
import DisplayNote from '../DisplayNote.jsx'
import CreateNoteForm from '../CreateNoteForm.jsx'
import "../../styles/dashboard.scss"

const { getNotes } = new NoteApis();

const Dashboard = () =>{
  const res = [];
  const [ state, setState ] = useState({
    noteData: [
      {
        title: "Note Title",
        description: "Note Description",
      }
    ],
    isDataReceived: true,
    displayNotes: null,
  })
  const [ visible , setVisible ] = useState(false);

  
  const getNotesFromDb = () => { 
    const token = localStorage.getItem('token')
    getNotes(token).then(result => {
      // console.log(result.data.data);
      setState({noteData: result.data.data })
    });
  }

  const displayNotes = (event) => {
    event.preventDefault();
    getNotesFromDb();
    const result = state.noteData.map((note, index) => {
      const notesArray = [];
      console.log(note, index);
      // notesArray.push(
       return (<DisplayNote 
          key={index} 
          title={note.title} 
          description={note.description} 
        />)
      // )
      // console.log(notesArray);
      // return notesArray;
    })
    
    // console.log(result);
    setState({ ...state, displayNotes: [...displayNotes, {result}] })
    // console.log(state.displayNotes);

    // Use this for showing the card div
    // const someArray = [];
    // for (let i = 0; i <30; i++ ) {
    //   someArray.push(
    //     <DisplayNote 
    //       key={i} 
    //       title="Note Title" 
    //       description="Note Description" 
    //     />
    //   )
    // }
    // return someArray
  }

  useEffect(() => {

  })

  return (
    <div className="dashboard-grid-container">
      <Header />
      <div className="dashboard-body-container">
        <Sidebar displayNotes={displayNotes} />
        <div className="dashboard-notes-container">
          <div className="create-note-form box1">
            <CreateNoteForm />
          </div>
          <div 
            className="db-disp-notes-cont box2"
            style={{ color: "red" }} 
          >
            Getting Data
          { state.displayNotes }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard