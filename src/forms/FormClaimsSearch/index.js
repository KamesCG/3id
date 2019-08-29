/* --- Global Dependencies --- */
import idx from 'idx'
import React from 'react'
import { connect } from 'react-redux';
import { withFormik } from 'formik';
import { Form, Field, ErrorMessage } from 'formik';

/* --- Local Dependencies --- */
import data from 'storeRedux/departments/data/actions'
import { fromData } from 'storeRedux/departments/selectors'
import { Box, Button, ButtonFlat, Flex, Heading, Span } from 'atoms'

/* --- Styled Components --- */
import styled from 'styled-components'
const SearchField = styled(Field)`
  height: 50px;
  width: 100%;
`

const IssuerSearchField = styled(Field)`
  height: 30px;
`

const Label = styled.label`
  font-size: 10px;
`

/* --- React Component --- */
class Formik extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      filterIsOpen: true
    }

    this.openFilter = this.openFilter.bind(this);
    this.closeFilter = this.closeFilter.bind(this);
    this.toggleFilter = this.toggleFilter.bind(this);
  }

  openFilter() {
    this.setState({filterIsOpen: true});
  }

  closeFilter() {
    this.setState({filterIsOpen: false});
  }

  toggleFilter() {
    this.setState({filterIsOpen: !this.state.filterIsOpen});
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
      <Box color='white' {...this.props.styled}>
        <Form onSubmit={this.props.handleSubmit} style={{width: '100%'}} >
            <Label>Subject <ErrorMessage name="issuer" component="span" /></Label>
            <IssuerSearchField type="text" name="subject" placeholder='Subject' />
            <Label>Issuer <ErrorMessage name="issuer" component="span" /></Label>
            <IssuerSearchField type="text" name="issuer" placeholder='e.x. "did:eth"0xK8C2...' />
            <Label>Type <ErrorMessage name="type" component="span" /></Label>
            <IssuerSearchField type="text" name="type" placeholder='e.x: EducationCredential...' />

          <ButtonFlat type="submit" disabled={this.props.isSubmitting} color='white' gradient='blue' mx={0} width={1}>
            Search
          </ButtonFlat>
        </Form>
      </Box>
    )
  }
}

/* -- Global State -- */
const mapStateToProps = (state, props) => ({
  request: fromData.get(state,  `query|verifiableCredentialTemplates`),
});


const mapDispatchToProps = (dispatch, props) => ({
  queryRequest: (query) =>dispatch(data.queryRequest('REQUEST')(
    query,
    {
      delta: 'search|verifiable-credential',
    }
  )),
  mutateRequest: (mutation) =>dispatch(data.mutateRequest('REQUEST')(
    mutation,
    {
      delta: 'mutate|credential',
    }
  ))
});

const MutationGenerate = ({ issuer, subject, type}) =>
`
{
  getVerifiableCredential
  ${ issuer || subject || type ? `(
    ${issuer ? `iss: "${issuer}"` : '' }
    ${subject ? `sub: "${subject}"` : '' }
    ${type ? `type: "${type}"` : '' }
  )`
  : ''
  }
  {
    iss
    sub
    type
    claims {
      key
      value
    }
  }
}
`

/* --- Form Configuration --- */
const FormVerifiableCredentialSearch = withFormik({
  /* Map Props to Field Values */
  mapPropsToValues: props => ({
    name: '',
  }),

  /* Form Validation */
  validate: values => {
    let errors = {};
    return errors;
  },

  /* Handle Form Submission */
  handleSubmit: (values, { props, ...form }) => {

    console.log(values, 'submit action')
    let m = MutationGenerate(values)
    console.log(m)
    props.queryRequest(MutationGenerate(values))
    form.resetForm()
  }
})(Formik)

export default connect(mapStateToProps, mapDispatchToProps)(FormVerifiableCredentialSearch)