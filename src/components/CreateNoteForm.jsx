import React, {useState} from 'react'
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import '../styles/createNote.scss'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
toast.configure()

const initialValues =  {
  noteTitle: "",
  noteBody: "",
}

const validationSchema = Yup.object().shape({
  noteTitle: Yup.string()
                .min(3, 'Minimum 3 characters required!'),
  noteBody: Yup.string(),
})

function CreateNoteForm(props) {
  const [ state, setState ] = useState({
    noteTitle: "",
    noteBody: "", 
  })

  const handleFormChange = (event) =>{
    setState({ ...state, [event.target.name]: event.target.value})
  }

  const handleFormSubmit = async () => {
    try {
      // logic
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
            className="create-note-form"
          >
            <div className="create-note-rows">
              <div className="form-group float-left">
                  <Field 
                    type="text"
                    className="form-control"
                    name="note-title"
                    value={values.noteTitle}
                    onInput={handleChange}
                    onChange={handleFormChange} 
                    placeholder="Title"
                  ></Field>
              </div>
              <div className="form-group float-right">
                <i class="fas fa-thumbtack"></i>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="from-group create-note-rows">
              <Field 
                  type="text"
                  className="form-control"
                  name="note-title"
                  value={values.noteBody}
                  onInput={handleChange}
                  onChange={handleFormChange} 
                  placeholder="take a note..."
                ></Field>
            </div>  
            
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
            
          </Form>
        </div>
      )}
    </Formik>

  )
}

export default CreateNoteForm
