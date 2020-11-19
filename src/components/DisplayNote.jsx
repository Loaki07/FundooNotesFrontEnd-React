import React, { useState } from 'react'
import '../styles/displayNote.scss'
import UpdateNote from "./updateNote.jsx"

const DisplayNote = (props) =>{
  const [ note, setNote ] = useState({
    isNoteHover: false,
    isNoteOpen: false,
    noteId: "",
    title: "",
    description: "",
  })

  const { noteId, title, description } = props;


  const handleNoteHoverEnter = () => {
    setNote({ ...note, isNoteHover: !note.isNoteHover })
  }

  const handleNoteHoverLeave = () => {
    setNote({ ...note, isNoteHover: !note.isNoteHover })
  }

  return (
    <>
      <div 
        className="card" 
        // style={{ width: "23rem" }}
        onMouseEnter={handleNoteHoverEnter}
        onMouseLeave={handleNoteHoverLeave}
      >
        <div className="card-body">
          <h5 
            className="card-title"
          >{title}</h5>
          <p className="card-text">{description}</p>
            {
              (note.isNoteHover) && 
              <div 
                className="btn-group d-flex justify-content-around" 
                role="group" 
                aria-label="Button group with nested dropdown"
              >
                <button 
                  type="button" 
                  className="btn btn-sm"
                ><i className="far fa-bell"></i></button>
                <button 
                  type="button" 
                  className="btn btn-sm"
                ><i className="fas fa-user-plus"></i></button>
                <button 
                  type="button" 
                  className="btn btn-sm"
                ><i className="fas fa-palette"></i></button>
                <button 
                  type="button" 
                  className="btn btn-sm"
                ><i className="far fa-image"></i></button>
                <button 
                  type="button" 
                  className="btn btn-sm"
                ><i className="fas fa-archive"></i></button>
                <button 
                  type="button" 
                  className="btn btn-sm"
                  // onClick={showNoteCompletely}
                  data-toggle="modal"
                  data-target="#update-note"
                  onClick={() => {
                    setNote({...note, 
                      noteId: noteId,
                      title: title,
                      description: description,
                    })
                  }}
                ><i className="far fa-edit"></i></button>

                <div 
                  className="btn-group" 
                  role="group"
                >
                  <button 
                    id="btnGroupDrop1" 
                    type="button" 
                    className="btn btn-sm dropdown-toggle" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false"
                  >
                    <i className="fas fa-ellipsis-v"></i>
                  </button>
                  <div 
                    className="dropdown-menu" 
                    aria-labelledby="btnGroupDrop1"
                  >
                    <button 
                      className="dropdown-item" 
                      href="#"
                    >Delete Note</button>
                    <button 
                      className="dropdown-item" 
                      href="#"
                    >Add Label</button>
                    <button 
                      className="dropdown-item" 
                      href="#"
                    >Add drawing</button>
                    <button
                    className="dropdown-item" 
                    href="#"
                    >Make a copy</button>
                    <button
                    className="dropdown-item"
                    href="#"
                    >Show tick boxes</button>
                    <button
                    className="dropdown-item"
                    href="#"
                    >Copy to google docs</button>
                  </div>
              </div>
            </div>
          }
        </div>
      </div>
      <div>
        <UpdateNote 
          noteId={note.noteId}
          title={note.title}
          description={note.description}
        />
      </div>
    </>
  )
}

export default DisplayNote