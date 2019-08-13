/* --- Global Dependencies --- */
import React from 'react'
import { withFormik } from 'formik';
import { Form, Field, ErrorMessage } from 'formik';

/* --- Local Dependencies --- */
import { Button } from 'atoms'


/* --- React Component --- */
class Formik extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  
  componentDidMount()
  {

  }

  /* Will Update */
  componentWillUpdate()
  {

  }

  /* Did Update */
  componentDidUpdate()
  {

  }

  /* Will Mount */
  componentWillUnmount()
  {
    
  }
  
  /* Render */
  render(){
    return(
      <Form onSubmit={this.props.handleSubmit} style={{width: '100%'}} >
        <label>Name <ErrorMessage name="name" component="div" /></label>
        <Field type="text" name="name" />

        <Button pill type="submit" disabled={this.props.isSubmitting} mt={15} width={1}>
          Submit
        </Button>
    </Form>
    )
  }
}

/* --- Form Configuration --- */
export default withFormik({
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

    console.log(values, 'submit action')
  }
})(Formik)