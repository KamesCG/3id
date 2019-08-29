/* --- Global Dependencies --- */
import idx from 'idx'
import React from 'react'
import { connect } from 'react-redux';
import { withFormik } from 'formik';
import { Form, FieldArray, ErrorMessage } from 'formik';

/* --- Local Dependencies --- */
import data from 'storeRedux/departments/data/actions'
import { fromData } from 'storeRedux/departments/selectors'
import { Box, Button, ButtonFlat, Flex, Heading, Paragraph, Span } from 'atoms'
import { Input, Select } from 'fields'


const Query =`
{
  getTemplates {
    type
    name
    description
    claim_fields {
      name
      description
    }
  }
}
`
/* --- React Component --- */
class FormVerifiableCredentialTemplate extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading: true,
      isTemplateSelected: false,
      template: undefined,
      templates: undefined
    }
  }

  // Mounted
  componentDidMount()
  {
    this.props.queryRequest(Query)
  }

  // Updated
  componentDidUpdate(prevProps)
  {
    console.log(this.props,  this.state)
    if(idx(this.props, _=>_.request.status) && this.state.isLoading) {
      this.setState({
        templates: this.props.request.output,
        options: templateOptionsTransform(this.props.request.output),
        isLoading: false
      })
    }

    if(idx(this.props, _=>_.values.template.value) != idx(prevProps, _=>_.values.template.value)) {

      const template = this.state.templates.filter(template => template.name === this.props.values.template.value)[0]
      template.claim_fields.forEach( (claim, index) => this.props.setFieldValue(`claims[${index}].key`, claim.name))
      this.setState({
        isTemplateSelected: true,
        template: template
      })
    }
    
  }

  // Catched Error
  componentDidCatch()
  {

  }

  /* Render */
  render(){
    const { options, template, isLoading, isTemplateSelected } = this.state
    const { isValid, isSubmitting, setFieldValue, setFieldTouched, values } = this.props
    console.log(values, 'values')
    return(
      isLoading
      ? null
      : isSubmitting
        ? <FormSubmitting/>
        : <Form onSubmit={this.props.handleSubmit} style={{width: '100%', padding: '30px'}} >

            <Select name="template" options={options} setFieldValue={setFieldValue} setFieldTouched={setFieldTouched} />
            {
              isTemplateSelected
              && <>
                  <Flex column mt={30}>
                  <Heading color='blue' fontSize={[3,3,4]}>
                    {template.name}
                  </Heading>
                  <Heading level={5}fontSize={[2]} mb={15}>
                    <strong>Type:</strong> {template.type}
                  </Heading>
                  <Paragraph fontSize={[1]}>
                    <Span fontSize={[2]}>{template.description}</Span>
                  </Paragraph>
                </Flex>

                <Input hidden name='type' value={template.type} />
                <label>Subject <ErrorMessage name="subject" component="span" className="input-error" /></label>
                <Input type="text" name="subject" />

                <label>Issuer <ErrorMessage name="issuer" component="span" className="input-error" /></label>
                <Input component="select" name="issuer">
                    <option value="">--Select--</option>
                    <option value="meshhub">MeshHub</option>
                    <option value="consensys">ConsenSys</option>
                    <option value="rapid">Rapid</option>
                </Input>


                <Heading fontSize={[3]} mt={20}>
                  Claims
                </Heading>

                <FieldArray
                  name="claims"
                  render={arrayHelpers => (
                    <div>
                      {template.claim_fields.map((claim, index) => (
                        <div key={index}>
                          <Input type="text" name={`claims[${index}]key`} value={claim.name} />
                          <label>{claim.description} <ErrorMessage name={`claims[${index}]value`} component="span" className="input-error" /></label>
                          <Input type="text" name={`claims[${index}]value`} />
                        </div>
                      ))}
                    </div>
                  )}
                />
              
                <ButtonFlat type="submit" uppercase palette='green' disabled={this.props.isSubmitting} fontSize={2} mt={15} width={1}>
                  Issue Verifiable Credential
                </ButtonFlat>
              </>
            }
          </Form>
    )
  }
}

const templateOptionsTransform = templates => templates.map( template => ({label: template.name, value: template.name }))

/* -- Global State -- */
const mapStateToProps = (state, props) => ({
  request: fromData.get(state,  `query|verifiableCredentialTemplates`),
});


const mapDispatchToProps = (dispatch, props) => ({
  queryRequest: (query) =>dispatch(data.queryRequest('REQUEST')(
    query,
    {
      delta: 'query|verifiableCredentialTemplates',
    }
  )),
  mutateRequest: (mutation) =>dispatch(data.mutateRequest('REQUEST')(
    mutation,
    {
      delta: 'mutate|credential',
    }
  ))
});

/* --- GraphQL --- */
const MutationGenerate = ({ claims, issuer, subject, type }) =>`
mutation {
  addCredential(
    type: "Mesh"
    iss: "${issuer}"
    sub: "${subject}"
    claims:${JSON.stringify(claims).replace(/\"([^(\")"]+)\":/g,"$1:")}
  ) 
  {
    type
  }
}
`

/* --- Form Configuration --- */
const FormTemplate = withFormik({
  /* Map Props to Field Values */
  mapPropsToValues: props => ({
    claims: [],
    template: {},
    type: '',
  }),

  /* Form Validation */
  validate: values => {
    let errors = {};
    // if (!values.name) errors.name = '*Required';
    return errors;
  },

  /* Handle Form Submission */
  handleSubmit: (values, { props, ...form }) => {
    console.log(values)
    const Mutation = MutationGenerate(values)
    console.log(Mutation, 'Mutation')
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