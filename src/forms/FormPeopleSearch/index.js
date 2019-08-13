/* --- Global Dependencies --- */
import React from 'react'
import { withFormik } from 'formik';
import { Form, Field, ErrorMessage } from 'formik';

/* --- Local Dependencies --- */
import { Box, Button, Flex, Heading, Span } from 'atoms'

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
      filterIsOpen: false
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
      <Box {...this.props.styled}>
        <Form onSubmit={this.props.handleSubmit} style={{width: '100%'}} >
          <Flex>
            <SearchField type="text" name="name" placeholder='Decentralized Identifier...' />
            
  
            <Button type="submit" disabled={this.props.isSubmitting} color='white' gradient='blue' borderRadius='0 10px 10px 0' mx={0} width={150}>
              Search
            </Button>
          </Flex>
        </Form>
        <Heading onClick={this.toggleFilter} color='grayDark' cursor='pointer' fontSize={2} fontWeight={300} textAlign='center' >Filters</Heading>
        {
          this.state.filterIsOpen &&
          <Flex>
            <Box mr={15}>
              <Label>Issuer <ErrorMessage name="issuer" component="span" /></Label>
              <IssuerSearchField type="text" name="issuer" placeholder='Issuer' />
            </Box>
            <Box mr={15}>
              <Label>Type <ErrorMessage name="type" component="span" /></Label>
              <IssuerSearchField type="text" name="type" placeholder='EducationCredential...' />
            </Box>
            <Box mr={15}>
              <Label>Issue Date After <ErrorMessage name="name" component="span" /></Label>
              <IssuerSearchField type="date" name="dateIssueAfter" />
            </Box>
            <Box>
              <Label>Issue Date Before <ErrorMessage name="name" component="span" /></Label>
              <IssuerSearchField type="date" name="dateIssueBefore" />
            </Box>
          </Flex>
        }
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

    console.log(values, 'submit action')
  }
})(Formik)