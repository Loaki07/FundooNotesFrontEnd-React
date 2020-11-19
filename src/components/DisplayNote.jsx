import React, { Component } from 'react'
import '../styles/displayNote.scss'
import UpdateNote from "./updateNote.jsx"

class DisplayNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNoteHover: false,
      isNoteOpen: false,
      noteObject: "",
      noteId: "",
      title: "",
      description: "",
    }
  }

  componentDidMount() {
    this.setState({ 
      noteId: this.props.noteId,
      title: this.props.title,
      description: this.props.description,
    })
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.setState({ 
        noteId: nextProps.noteId,
        title: nextProps.title,
        description: nextProps.description,
      })
    }
    console.log("Updating Props in displayNote", this.state);
  }

  handleNoteHoverEnter = () => {
    this.setState({ ...this.state, isNoteHover: !this.state.isNoteHover })
  }

  handleNoteHoverLeave = () => {
    this.setState({ ...this.state, isNoteHover: !this.state.isNoteHover })
  }


  handleNoteClick = (event, object) => {
    console.log(object);
    this.setState({
      noteObject: this.props.noteObject,
      noteId: this.props.noteId,
      title: this.props.title,
      description: this.props.description,
    })
    console.log("Checking Note Click", this.state.noteObject);
  }

  toggleUpdateNote = () => {
    this.setState({ ...this.state, isNoteOpen: !this.state.isNoteOpen })
  }

  render() {

    return (
      <>
        <div 
          className="card" 
          // style={{ width: "23rem" }}
          data-toggle="modal"
          data-target="#update-note"
          onMouseEnter={this.handleNoteHoverEnter}
          onMouseLeave={this.handleNoteHoverLeave}
        >
          <div className="card-body">
            <p 
              className="card-title"
              value={this.state.title}
            >
              {this.state.title}
            </p>
            <p 
              className="card-text"
              value={this.state.description}
            >
              {this.state.description}
            </p>
              {
                (this.state.isNoteHover) && 
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
            toggleNote={this.toggleUpdateNote}
            noteState={this.state.isNoteOpen}
            noteDetails={this.state.noteObject}
            noteId={this.state.noteId}
            title={this.state.title}
            description={this.state.description}
          />
        </div>
      </>
    )
  }
}

export default DisplayNote