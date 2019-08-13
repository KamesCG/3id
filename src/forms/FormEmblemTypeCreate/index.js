/* --- Global Dependencies --- */
import React from 'react'
import { withFormik } from 'formik';
import { Form, Field, ErrorMessage } from 'formik';

/* --- Local Dependencies --- */
import { Button } from 'atoms'

/* --- React Component --- */
class FormEmblemTypeCreate extends React.Component {
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
        <label>Name </label>
        <Field type="text" name="name" />
        <ErrorMessage name="name" component="div" />
        <br></br>
        <label>Description</label>
        <Field type="text" name="description" />
        <ErrorMessage name="description" component="div" />
        <label>Delegates </label>
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
  mapPropsToValues: (props) => ({ name: props.name }),

  /* Form Validation */
  validate: values => {
    const errors = {};
    if (!values.name) errors.name = 'Name Required';
    if (!values.description) errors.name = 'Description Required';
    return errors;
  },
  
  /* Handle Form Submission */
  handleSubmit: (values, actions) => {

    // Generate IPFS Hash
    // @todo Add IPFS functionality to repo.
    const IPFS_HASH = ''
    const ETHEREUM_ADDRESS = ['0x696365B6A5445F647065454DA0544f1AAC73ad1f']

    // Call Smart Contract Function
    actions.props.web3.contracts.Emblems.contract
    .createEmblemType(IPFS_HASH, ETHEREUM_ADDRESS)
    .then( res => console.log(res))

    // Reset Form State
    actions.setSubmitting(false);
  },

  displayName: 'BasicForm',
})(FormEmblemTypeCreate)