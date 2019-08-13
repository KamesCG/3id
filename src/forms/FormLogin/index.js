/* --- Global Dependencies --- */
import React from 'react'
import { Link } from '@reach/router'
import styled from 'styled-components'
import { withFormik } from 'formik';
import { Field, Form, ErrorMessage } from 'formik';

/* --- Local Dependencies --- */
import { Button, ButtonFlat, Flex, Span } from 'atoms'
import HorizontalRule from '../../atomic/atoms/HorizontalRule';
// import { Input } from 'fields'


const Input = styled(Field)`
  border: none;
  height: 50px;
  margin-top: 1.25rem;
  background-color: rgba(247,247,249,.7);
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  outline: none;
  transition: background-color .3s ease;

  &:focus,
  &:active,
   {
    background-color: rgba(247,247,249,1);
  }
`

const LoginButton = styled.button`
  background-color: #5867dd;
  border-color: #5867dd;
  box-shadow: 0 4px 16px 0 rgba(88,103,221, 0.15);
  color: #fff;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  outline: 0!important;
  vertical-align: middle;
  border: 1px solid transparent;
  padding: .65rem 1rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  height: 50px;
  padding-left: 2.5rem;
  padding-right: 2.5rem;

  &:hover {
    background-color: #384ad7;
    border-color: #2e40d4;
  }
  `

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
      <Flex column width={1}>
      <Form onSubmit={this.props.handleSubmit} style={{width: '100%'}} >
        
        <ErrorMessage name="name" component="span" className="input-error" />
        <Input type="text" name="email" placeholder='Email' />
        <Input type="password" name="password" placeholder='Password' />

        <Flex align='center' between mt={20}>
          <Link to='/account/recover'>
            <Span>Forgot Password?</Span>
          </Link>
          <LoginButton pill type="submit" disabled={this.props.isSubmitting} mt={15} width={1}>
            Login
          </LoginButton>
        </Flex>
      </Form>
      <HorizontalRule or my={15}/>
      <Flex between mt={20}>
        <ButtonFlat palette='google'>Google</ButtonFlat>
        <ButtonFlat palette='twitter'>Twitter</ButtonFlat>
        <ButtonFlat palette='facebook'>Facebook</ButtonFlat>
      </Flex>
      </Flex>
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