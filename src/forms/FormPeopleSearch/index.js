/* --- Global Dependencies --- */
import React from 'react'
import { withFormik } from 'formik';
import { Form, Field, ErrorMessage } from 'formik';

/* --- Local Dependencies --- */
import { Box, Button, ButtonFlat, Flex, Heading, Span } from 'atoms'
import { Switch } from 'fields'
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
    const { isValid, setFieldValue, setFieldTouched } = this.props
    return(
      <Box {...this.props.styled}>
        <Form onSubmit={this.props.handleSubmit} style={{width: '100%'}} >
          <Flex column color='white'>
            <Label>Address <ErrorMessage name="issuer" component="span" /></Label>
            <IssuerSearchField type="text" name="address" placeholder='0xK19...F56V' />
          </Flex>
          <Flex column color='white'>
            <Label>Name <ErrorMessage name="issuer" component="span" /></Label>
            <IssuerSearchField type="text" name="address" placeholder='0xK19...F56V' />
          </Flex>
        </Form>
        {
          this.state.filterIsOpen &&
          <Flex column color='white'>
            <Switch
            type="text" name="verifiedTwitter" label='Twitter Verified'
            height={20} width={50}
            setFieldValue={setFieldValue} setFieldTouched={setFieldTouched}/>
            <Switch
            type="text" name="verifiedFacebook" label='Facebook Verified'
            height={20} width={50}
            setFieldValue={setFieldValue} setFieldTouched={setFieldTouched}/>
            <Switch
            type="text" name="verifiedGithub" label='Github Verified'
            height={20} width={50}
            setFieldValue={setFieldValue} setFieldTouched={setFieldTouched}/>
          </Flex>
        }
        {/* <Heading onClick={this.toggleFilter} color='white' underlineHover cursor='pointer' fontSize={2} fontWeight={300} textAlign='center' >Filters</Heading> */}
        <ButtonFlat type="submit" disabled={this.props.isSubmitting} color='white' palette='green' mx={0} mt={20} width={1}>
          Search
        </ButtonFlat>
      </Box>
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


  }
})(Formik)