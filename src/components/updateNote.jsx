import React, { Component } from 'react'
import NoteApis from "../services/NoteApis"
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
toast.configure()

const { updateNote } = new NoteApis();

class UpdateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteId: "",
      title: "",
      description: "",
    }
  }

  // static getDerivedStateFromProps(nextProps, prevState){
  //   if(nextProps !== prevState){
  //     return { 
  //       noteId: nextProps.noteId,
  //       title: nextProps.title,
  //       description: nextProps.description,
  //     };
  //     console.log(this.state);
  //  }
  //  else return null;
  // }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.setState({ 
        noteId: nextProps.noteId,
        title: nextProps.title,
        description: nextProps.description,
      })
    }
  }

  handleChangeEvent = (event) => {
    this.setState({ [event.target.name]: event.target.value})
  }

  handleUpdatedNote = (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token')
    const updateNoteObject = {
      title: this.state.title,
      description: this.state.description,
    }
    updateNote(updateNoteObject, token, this.state.noteId).then(result => {
      console.log(result)
      if (result.status === 500) {
        toast.success('Note Updated !', {position: toast.POSITION.TOP_CENTER});
        // this.props.history.push('/dashboard')
        // window.location.reload();
      }
    })
  }

  render() {
    return (
      <div
       className="modal fade"
       id="update-note"
       tabIndex="-1"
       role="dialog"
       aria-labelledby="exampleModalCenterTitle"
       aria-hidden="true"
      >
        <div
         className="modal-dialog modal-dialog-centered"
         role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <textarea 
                className="modal-title" 
                id="exampleModalLongTitle"
                name="title"
                value={this.state.title}
                onChange={this.handleChangeEvent}
              ></textarea>
              <button
               type="button"
               className="close"
               data-dismiss="modal"
               aria-label="Close"
              >
                <span 
                  aria-hidden="true"
                >&times;</span>
              </button>
            </div>
            <textarea 
              className="modal-body"
              name="description"
              value={this.state.description}
              onChange={this.handleChangeEvent}
            >
            </textarea>
            <div 
              className="modal-footer"
            >
              <button
               type="button"
               className="btn btn-secondary"
               data-dismiss="modal"
              >Close</button>
              <button
               type="button"
               className="btn btn-primary"
               onClick={this.handleUpdatedNote}
              >Save changes</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UpdateNote
