/* --- Global Dependencies --- */
import React from 'react'
import { connect } from 'react-redux';
import { withFormik } from 'formik';
import { Form, Field, FieldArray, ErrorMessage } from 'formik';

/* --- Local Dependencies --- */
import data from 'storeRedux/departments/data/actions'
import { fromData } from 'storeRedux/departments/selectors'
import { Button, Flex, HorizontalRule, Paragraph, Span } from 'atoms'
import { Input } from 'fields'

/* --- React Component --- */
class FormClass extends React.Component {
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

        <label>Name <ErrorMessage name="name" component="span" className="input-error" /></label>
        <Input type="text" name="name" />
      

        <Button type="submit" gradient='blue' disabled={this.props.isSubmitting} mt={15} width={1}>
          Create Template
        </Button>
    </Form>
    )
  }
}

/* -- Global State -- */
const mapStateToProps = (state, props) => ({
  mutation: fromData.get(state,  ''),
});


const mapDispatchToProps = (dispatch, props) => ({
  mutateRequest: (mutation) =>dispatch(data.mutateRequest('REQUEST')(
    mutation,
    {
      delta: '',
    }
  ))
});

/* --- GraphQL --- */
const MutationGenerate = ({ claims, description, name, type }) =>`
mutation {
  add
  (
    name:"${name}",
  ) 
  {
    name
  }
}
`

/* --- Form Configuration --- */
const FormTemplate = withFormik({
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
    const Mutation = MutationGenerate(values)
    props.mutateRequest(Mutation)
  }
})(FormClass)

export default connect(mapStateToProps, mapDispatchToProps)(FormTemplate)