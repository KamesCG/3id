/* --- Global Dependencies --- */
import React from 'react'
import { connect } from 'react-redux';
import { withFormik } from 'formik';
import { Form, ErrorMessage } from 'formik';

/* --- Local Dependencies --- */
import { fromDatabase } from 'store/departments/selectors'
import { databaseWriteRequest, databaseReadRequest } from 'store/departments/actions'
import { Button, ButtonFlat } from 'atoms'
import { Input } from 'fields'

/* --- React Component --- */
class Formik extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  
  // Mounted
  componentDidMount()
  {

  }
  // Updated
  componentDidUpdate()
  {

  }

  // Error Catched
  componentDidCatch() {
    
  }
  
  /* Render */
  render(){
    const { isValid, setFieldValue, setFieldTouched } = this.props
    
    return(
      <Form onSubmit={this.props.handleSubmit} style={{width: '100%'}} >
        
        <label>Name <ErrorMessage name="name" component="span" className="input-error" /></label>
        <Input type="text" name="name" />

        <ButtonFlat lg palette='green' type="submit" disabled={this.props.isSubmitting} mt={15} width={1}>
          Submit
        </ButtonFlat>
    </Form>
    )
  }
}

/* ------------------ */
/*    GLOBAL STATE    */
/* ------------------ */
const mapStateToProps = (state, props) => ({
  write: fromDatabase.get(state,  ''),
});


const mapDispatchToProps = (dispatch, props) => ({
  save: (entity)=>dispatch(databaseWriteRequest({
    payload: entity,
    metadata: {
      branch: [''],
      delta: '',
      writeType: 'create',
    } 
  })),
});

/* ------------------ */
/* Form Configuration */
/* ------------------ */
const FormikStateful = withFormik({
  /* Map Props to Field Values */
  mapPropsToValues: props => ({
    name: '',
  }),

  /* Form Validation */
  validate: values => {
    let errors = {};
    if (!values.name) errors.name = '*Required';
    return errors;
  },

  /* Handle Form Submission */
  handleSubmit: (values, { props, ...form }) => {


  }
})(Formik)

export default connect(mapStateToProps, mapDispatchToProps)(FormikStateful)