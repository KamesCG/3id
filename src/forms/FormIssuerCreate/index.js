/* --- Global Dependencies --- */
import React from 'react'
import { connect } from 'react-redux';
import { withFormik } from 'formik';
import { Form, ErrorMessage } from 'formik';

/* --- Local Dependencies --- */
import data from 'store/departments/data/actions'
import { fromData } from 'store/departments/selectors'
import { ButtonFlat, Flex, Heading, HorizontalRule, Paragraph, Span } from 'atoms'
import { Input } from 'fields'

/* --- React Component --- */
class FormClass extends React.Component {
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

  // Catched Error
  componentDidCatch()
  {

  }
  
  /* Render */
  render(){
    const { isSubmitting } = this.props
    return(
      isSubmitting
      ? <FormSubmitting/>
      : <>
        <Heading color='green' fontSize={[4,4,5]}>
          Create Issuer
        </Heading>
        <Paragraph fontSize={[1]}>
          Issuers are capable of issuing verifiable credentials to decentralized idetnifiers.
        </Paragraph> 
        <HorizontalRule my={15}/>

        <Form onSubmit={this.props.handleSubmit} style={{width: '100%'}} >

          <label>Name <ErrorMessage name="name" component="span" className="input-error" /></label>
          <Input type="text" name="name" />
          
          <label>Address <ErrorMessage name="address" component="span" className="input-error" /></label>
          <Input type="text" name="address" />
          
          <label>Decentralized Identifier <ErrorMessage name="did" component="span" className="input-error" /></label>
          <Input type="text" name="did" />
          
          <label>Description <ErrorMessage name="description" component="span" className="input-error" /></label>
          <Input type="text" name="description" />
          
          <label>Site <ErrorMessage name="site" component="span" className="input-error" /></label>
          <Input type="text" name="site" />
          

          <ButtonFlat type="submit" palette='blue' disabled={this.props.isSubmitting} mt={15} width={1}>
            Create Issuer
          </ButtonFlat>
      </Form>
      </>
    )
  }
}

/* -- Global State -- */
const mapStateToProps = (state, props) => ({
  mutation: fromData.get(state, 'issuer|create'),
});


const mapDispatchToProps = (dispatch, props) => ({
  mutateRequest: (mutation) =>dispatch(data.mutateRequest('REQUEST')(
    mutation,
    {
      delta: 'issuer|create',
    }
  ))
});

/* --- GraphQL --- */
const MutationGenerate = ({ address, did, name, site, description }) =>`
mutation {
  addIssuer(
    address: "${address}"
    did: "${did}"
    name: "${name}",
    site: "${site}",
    description: "${description}"
    ) {
      id
      address
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

const FormSubmitting = props =>
<Flex column center>
  <Heading color='blue' fontSize={[3]}>
    Creating Issuer
  </Heading>
</Flex>