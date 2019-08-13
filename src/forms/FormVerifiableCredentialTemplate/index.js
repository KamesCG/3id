/* --- Global Dependencies --- */
import React from 'react'
import { connect } from 'react-redux';
import { withFormik } from 'formik';
import { Form, Field, FieldArray, ErrorMessage } from 'formik';

/* --- Local Dependencies --- */
import data from 'store/departments/data/actions'
import { fromData } from 'store/departments/selectors'
import { Button, Flex, HorizontalRule, Paragraph, Span } from 'atoms'
import { Input } from 'fields'

/* --- React Component --- */
class FormVerifiableCredentialTemplate extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      count: 1
    }

    this.addField = this.addField.bind(this);
    this.removeField = this.removeField.bind(this);
  }

  addField() {
    this.setState({
      count: this.state.count + 1
    });
  }
  
  removeField() {
    this.setState({
      count: this.state.count - 1
    });
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
        
        <label>Description <ErrorMessage name="description" component="span" className="input-error" /></label>
        <Input type="text" name="description" />
        
        <label>Type <ErrorMessage name="type" component="span" className="input-error" /></label>
        <Input type="text" name="type" />

        <Flex column borderColor='#e0e0e0' borderBottom='1px solid' borderTop='1px solid' my={15} py={15}>
          {/* <Flex evenly>
            <Span onClick={this.addField} color='grayDark' display='block' mx='auto' my={15} cursor='pointer' fontSize={2} fontWeight={300} textAlign='center'>Add Claim Field</Span>
            <Span onClick={this.removeField} color='grayDark' display='block' mx='auto' my={15} cursor='pointer' fontSize={2} fontWeight={300} textAlign='center'>Remove Claim Field</Span>
          </Flex> */}
          <Paragraph fontSize={[1]} textAlign='center'>
            Contained within Verifiable Credentials is a collection of <strong>claims</strong>/<em>attestations</em>.<br/>
            Add claim fields to a template to easily issue custom verifiable credentials.
          </Paragraph>
        </Flex>

        <FieldArray
            name="claims"
            render={arrayHelpers => (
              <div>
                {this.props.values.claims.map((claim, index) => (
                  <div key={index}>
                    <label style={{ fontSize:'12px', marginTop: 0}} >Claim Name <ErrorMessage name={`claims.${index}.name`} component="span" className="input-error" /></label>
                    <Input type="text" name={`claims.${index}.name`} />

                    <label style={{ fontSize:'12px' }}>Claim Description <ErrorMessage name={`claims.${index}.description`} component="span" className="input-error" /></label>
                    <Input type="text" name={`claims.${index}.description`} />

                    <button type="button" onClick={() => arrayHelpers.remove(index)}> Remove Claim </button>
                    <HorizontalRule my={10}/>
                  </div>
                ))}
                <button type="button" onClick={() => arrayHelpers.push({ name: '', description: '' })}>
                  Add Claim Field
                </button>
              </div>
            )}
          />

        <Button type="submit" gradient='blue' disabled={this.props.isSubmitting} mt={15} width={1}>
          Create Template
        </Button>
    </Form>
    )
  }
}

/* -- Global State -- */
const mapStateToProps = (state, props) => ({
  mutation: fromData.get(state,  'template|verifiableCredential'),
});


const mapDispatchToProps = (dispatch, props) => ({
  mutateRequest: (mutation) =>dispatch(data.mutateRequest('REQUEST')(
    mutation,
    {
      delta: 'template|verifiableCredential',
    }
  ))
});

/* --- GraphQL --- */
const MutationGenerate = ({ claims, description, name, type }) =>`
mutation {
  addTemplate
  (
    description: "${description}"
    name:"${name}",
    type: "${type}",
    claim_fields: ${JSON.stringify(claims).replace(/\"([^(\")"]+)\":/g,"$1:")}
  ) 
  {
    name
  }
}
`

const MutateTest = `
mutation {
  addTemplate(type: "kamesType" ,name:"kames template", description: "testing the kames template",
  claim_fields:[
    {
    "name":"claimfield Name",
    "description":"claimField desc"
    }
  ]) 
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
    claims: []
  }),

  /* Form Validation */
  validate: values => {
    let errors = {};
    if (!values.name) errors.name = '*Required';
    return errors;
  },

  /* Handle Form Submission */
  handleSubmit: (values, { props, ...form }) => {

    console.log(values, props, 'submit action')
    const Mutation = MutationGenerate(values)
    console.log(Mutation)
    props.mutateRequest(Mutation)

  }
})(FormVerifiableCredentialTemplate)

export default connect(mapStateToProps, mapDispatchToProps)(FormTemplate)