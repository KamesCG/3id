/* --- Global Dependencies --- */
import React from 'react'
import { connect } from 'react-redux';
import { withFormik } from 'formik';
import { FieldArray, Form, ErrorMessage } from 'formik';

/* --- Local Dependencies --- */
import data from 'store/departments/data/actions'
import { fromData } from 'store/departments/selectors'
import { ButtonFlat, Heading, HorizontalRule, Flex, Paragraph, Span } from 'atoms'
import { Input } from 'fields'

/* --- React Component --- */
class FormVerifiableCredentialGenerate extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      error: {
        status: false,
        description: 'Template incorrectly formatted. Please delete and rebuild template.'
      }
    }
  }
  
  /* Did Mount */
  componentDidMount()
  {
    console.log(this.props, 'FormVerifiableCredentialGenerate')
  }
  
  /* Did Update */
  componentDidUpdate()
  {

  }

  /* Catch Error */
  componentDidCatch(err) {
    this.setState({
      error: {
        ...this.state.error,
        status: true
      }
    })
  }

  /* Render */
  render(){
    const { isSubmitting } = this.props
    const { error } = this.state

    return(
      error.status
      ? <Span fontSize={[2]}>{error.description}</Span>
      : isSubmitting
        ? <FormSubmitting/>
        : <Form onSubmit={this.props.handleSubmit} style={{width: '100%'}} >        
            <Flex column>
              <Heading color='blue' fontSize={[3,3,4]}>
                {this.props.name}
              </Heading>
              <Heading level={5}fontSize={[2]} mb={15}>
                <strong>Type:</strong> {this.props.type}
              </Heading>
              <Paragraph fontSize={[1]}>
                <Span fontSize={[2]}>{this.props.description}</Span>
              </Paragraph>
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

          <FieldArray
            name="claims"
            render={arrayHelpers => (
              <div>
                {this.props.claims.map((claim, index) => (
                  <div key={index}>
                    <Input type="text" hidden name={`claims[${index}]key`} />
                    <label>{claim.description} <ErrorMessage name={`claims[${index}]value`} component="span" className="input-error" /></label>
                    <Input type="text" name={`claims[${index}]value`} />
                  </div>
                ))}
              </div>
            )}
          />


            <ButtonFlat pill type="submit" disabled={this.props.isSubmitting} palette='green' mt={15} width={1}>
              Issue Credential
            </ButtonFlat>
        </Form>
    )
  }
}


/* -- Global State -- */
const mapStateToProps = (state, props) => ({
  mutation: fromData.get(state,  'mutate|credential'),
});


const mapDispatchToProps = (dispatch, props) => ({
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
    type: "${type}"
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
    claims: props.claims.map(claim => ({ key: claim.name})),
    type: props.type
  }),

  /* Form Validation */
  validate: values => {
    let errors = {};
    if (!values.subject) errors.subject = '*Required';
    if (!values.issuer) errors.issuer = '*Required';
    return errors;
  },

  /* Handle Form Submission */
  handleSubmit: (values, { props, ...form }) => {

    console.log(values, props)
    const Mutation = MutationGenerate(values)
    console.log(Mutation)
    props.mutateRequest(Mutation)
  }
})(FormVerifiableCredentialGenerate)

export default connect(mapStateToProps, mapDispatchToProps)(FormTemplate)

const FormSubmitting = props =>
<Flex column center>
  <Heading color='blue' fontSize={[3]}>
    Generating Credential
  </Heading>
  <Paragraph fontSize={[1]}>
    You will be notified when credential has been generated.
  </Paragraph>
</Flex>