/* --- Global Dependencies --- */
import React from 'react'
import { connect } from 'react-redux';
import { withFormik } from 'formik';
import { Form, FieldArray, ErrorMessage } from 'formik';

/* --- Local Dependencies --- */
import data from 'storeRedux/departments/data/actions'
import { fromData } from 'storeRedux/departments/selectors'
import { Box, Button, ButtonFlat, Flex, Heading, Paragraph, Span } from 'atoms'
import { Input } from 'fields'

/* --- React Component --- */
class FormVerifiableCredentialTemplate extends React.Component {
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
      : <Form onSubmit={this.props.handleSubmit} style={{width: '100%', padding: '30px'}} >

        <label>Name <ErrorMessage name="name" component="span" className="input-error" /></label>
        <Input type="text" name="name" />
        
        <label>Description <ErrorMessage name="description" component="span" className="input-error" /></label>
        <Input type="text" name="description" />
        
        <label>Type <ErrorMessage name="type" component="span" className="input-error" /></label>
        <Input type="text" name="type" />

        <Flex column gradient='gray' gradientDir='90' borderColor='#e0e0e0' borderRadius={5} my={15} p={35}>

        <FieldArray
            name="claims"
            render={arrayHelpers => (
              <div>
                {this.props.values.claims.map((claim, index) => (
                  <div key={index}>
                    <Flex align='center' between py={15}>
                      <Box width={[1,1, 0.40]}>
                        <label style={{ fontSize:'12px'}} >Key <ErrorMessage name={`claims.${index}.name`} component="span" className="input-error" /></label>
                        <Input type="text" name={`claims.${index}.name`} />
                        <Span fontSize={[0]}>	ex. nameFull, addressStreet, questId, etc....</Span>
                      </Box>
  
                      <Box width={[1,1, 0.40]} ml={15}>
                        <label style={{ fontSize:'12px' }}>Description <ErrorMessage name={`claims.${index}.description`} component="span" className="input-error" /></label>
                        <Input type="text" name={`claims.${index}.description`} />
                        <Span fontSize={[0]}>A short description of the claim data.</Span>
                      </Box>

                      <Box>
                        <ButtonFlat ml='auto' type="button" onClick={() => arrayHelpers.remove(index)}> Delete </ButtonFlat>
                      </Box>
                    </Flex>

                  </div>
                ))}
                <ButtonFlat type='button' uppercase palette='blue' onClick={() => arrayHelpers.push({ name: '', description: '' })} mt={20} width={1}>
                  Add Claim Field
                </ButtonFlat>
              </div>
            )}
          />

        </Flex>

        <ButtonFlat type="submit" uppercase palette='green' disabled={this.props.isSubmitting} fontSize={2} mt={15} width={1}>
          Create Template
        </ButtonFlat>
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
    if (!values.description) errors.description = '*Required';
    if (!values.type) errors.type = '*Required';
    return errors;
  },

  /* Handle Form Submission */
  handleSubmit: (values, { props, ...form }) => {
    const Mutation = MutationGenerate(values)
    props.mutateRequest(Mutation)
  }
})(FormVerifiableCredentialTemplate)

export default connect(mapStateToProps, mapDispatchToProps)(FormTemplate)


const FormSubmitting = props =>
<Flex column center>
  <Heading color='blue' fontSize={[3]}>
    Saving Template
  </Heading>
</Flex>