import React, {useState} from 'react'
import NoteApis from "../services/NoteApis"
import errorMessages from './errorMessages.jsx'
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import '../styles/createNote.scss'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
toast.configure()

const { createNote } = new NoteApis();

const initialValues =  {
  noteTitle: "",
  noteBody: "",
}

const validationSchema = Yup.object().shape({
  noteTitle: Yup.string()
                .min(3, 'Minimum 3 characters required!')
                .required(),
  noteBody: Yup.string(),
})

function CreateNoteForm(props) {
  const [ state, setState ] = useState({
    noteTitle: "",
    noteBody: "", 
    isFormOpen: false,
  })

  const handleFormChange = (event) =>{
    setState({ ...state, [event.target.name]: event.target.value})
  }

  const toggleForm = (event) =>{
    setState({ ...state, isFormOpen: true })
  }

  const handleFormSubmit = async (values) => {
    try {
      const createNoteObject = {
        title: state.noteTitle,
        description: state.noteBody
      }
      const token = localStorage.getItem('token')
      const result = await createNote(createNoteObject, token);
      console.log(result);
      if (result.status === 200) {
        toast.success('Note Created Successfully !', {position: toast.POSITION.TOP_CENTER});
        values.noteTitle = "";
        values.noteBody = "";
        setState({ ...state, noteTitle: "",
                             noteBody: "", 
                             isFormOpen: false })
      } 
    } catch (error) {
      toast.error(error.message, {position: toast.POSITION.TOP_CENTER});
    }
  }

  return (
    <Formik
      initialValues= {initialValues} 
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
    >
      {({ handleSubmit, handleChange, values })=> (
        <div className="create-note-form-wrapper d-flex align-items-center justify-content-center">
          <Form 
            autoComplete="off"
            className="create-note-form-control"
          >
            { state.isFormOpen && 
              <div className="create-note-rows row">
                <div className="form-group col-10">
                    <Field 
                      type="text"
                      className="form-control"
                      name="noteTitle"
                      value={values.noteTitle}
                      onInput={handleChange}
                      onChange={handleFormChange} 
                      placeholder="Title"
                    ></Field>
                    <ErrorMessage 
                      name="noteTitle" 
                      component={errorMessages} 
                    ></ErrorMessage>
                </div>
                <div className="form-group col-2">
                  <i className=" btn btn-circle btn-sm fas fa-thumbtack "></i>
                </div>
                <div className="clearfix"></div>
              </div>
            }
            <div className="row">
              <div className="from-group create-note-rows col">
                <Field 
                    type="text"
                    className="form-control col-10"
                    name="noteBody"
                    value={values.noteBody}
                    onInput={handleChange}
                    onChange={handleFormChange} 
                    onClick={toggleForm}
                    placeholder="take a note..."
                  ></Field>
              </div> 
              { !state.isFormOpen &&
                <>
                  <div className="form-group col-4">
                  <i className="fas fa-tasks btn btn-circle btn-sm form-fields"></i>
                  <i className="fas fa-paint-brush btn btn-circle btn-sm form-fields"></i>
                  <i className="fas fa-image btn btn-circle btn-sm form-fields"></i>
                  </div>
                  <div className="clearfix"></div>
                </>
              } 
              </div>
              
            
            { state.isFormOpen && 
              <div className="create-note-rows">
                <div className="form-group float-left">
                  
                    <i className="far fa-bell btn btn-circle btn-sm"></i>
                
                  
                    <i className="fas fa-user-plus btn btn-circle btn-sm"></i>
                
                  
                    <i className="fas fa-palette btn btn-circle btn-sm"></i>
                
                  
                    <i className="far fa-image btn btn-circle btn-sm"></i>
                
                  
                    <i className="fas fa-archive btn btn-circle btn-sm"></i>
                
                  
                    <i className="fas fa-ellipsis-v btn btn-circle btn-sm"></i>
                
                  
                    <i className="fas fa-undo btn btn-circle btn-sm"></i>
                
                  
                    <i className="fas fa-redo btn btn-circle btn-sm"></i>
                
                </div>
                <div className="form-group float-right">
                  <button
                    type="submit"
                    onClick={handleSubmit} 
                    className="btn btn-secondary "
                  >Close
                  </button>
                </div>
              </div>
            }
            </Form>
            
        </div>
      )}
    </Formik>

  )
}

export default CreateNoteForm
