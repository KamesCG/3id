/* --- Global Dependencies --- */
import React from 'react'
import { withFormik } from 'formik';
import { Form, ErrorMessage } from 'formik';

/* --- Local Dependencies --- */
import { Button, Heading, HorizontalRule, Flex, Span } from 'atoms'
import { Input } from 'fields'

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
        
        <Flex column>
          <Heading color='blue' fontSize={[4,4,5]}>
            {this.props.name}
          </Heading>
          <Span fontSize={[2]}><strong>Type:</strong> {this.props.type}</Span>
          <Span fontSize={[2]}><strong>Description:</strong> {this.props.description}</Span>
        </Flex>


        <label>Subject <ErrorMessage name="subject" component="span" className="input-error" /></label>
        <Input type="text" name="subject" />

        <label>Issuer <ErrorMessage name="issuer" component="span" className="input-error" /></label>
        <Input component="select" name="issuer">
            <option value="">--Select--</option>
            <option value="meshhub">MeshHub</option>
            <option value="consensys">ConsenSys</option>
            <option value="rapid">Rapid</option>
        </Input>

        <HorizontalRule my={20}/>
        <Heading fontSize={[3]}>
          Claims
        </Heading>
        {
          this.props.claims && 
          this.props.claims.map( claim => 
          <>
            <label>{claim.name} <ErrorMessage name={claim.name} component="span" className="input-error" /></label>
            <Input type="text" name={claim.name} placeholder={claim.description} />
          </> )
        }

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