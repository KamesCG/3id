/* --- Global Dependencies --- */
import React from 'react';
import { Form, Field, ErrorMessage } from 'formik';

/* --- Local Dependencies --- */
import { Button, Heading, HorizontalRule, Flex } from 'atoms'

/* ------ Component ------ */
export default ({ values, handleSubmit, isSubmitting, ...props }) =>
<Form onSubmit={handleSubmit} style={{width: '100%'}} >

  <Heading fontSize={3} mt={40}>Contact Information</Heading>
  <HorizontalRule my={10} />
  <label>Phone <ErrorMessage name="phone" component="span" styled={{color: 'red'}} /></label>
  <Field type="tel" name="phone" value={values.phone} />
  
  <label>Email <ErrorMessage name="email" component="span" styled={{color: 'red'}} /></label>
  <Field type="text" name="email" value={values.email} />


  <Heading fontSize={3} mt={40}>Shipping Address</Heading>
  <HorizontalRule my={10} />

  <label>Name <ErrorMessage name="name" component="span" styled={{color: 'red'}} /></label>
  <Field type="text" name="name" value={values.name} />
  
  <label>Address <ErrorMessage name="address" component="span" styled={{color: 'red'}} /></label>
  <Field type="text" name="address" value={values.address} />

  <label>Apartment, Suite, etc... <ErrorMessage name="number" component="span" styled={{color: 'red'}} /></label>
  <Field type="text" name="number" value={values.number} />

  <label>City <ErrorMessage name="city" component="span" styled={{color: 'red'}} /></label>
  <Field type="text" name="city" value={values.city} />

  <label>Country/Region <ErrorMessage name="name" component="span" styled={{color: 'red'}} /></label>
  <Field component='select' type="text" name="name" value={values.name}>
    <option value="us">United States</option>
  </Field>
  
  <label>State <ErrorMessage name="state" component="span" styled={{color: 'red'}} /></label>
  <Field component='select' type="text" name="state" value={values.state}>
    {
      StateArray.map(state=><option value={state.value}>{state.label}</option>)
    }
  </Field>
  
  <Button pill type="submit" disabled={isSubmitting} mt={15} width={1}>
    Continue to Shipping
  </Button>
</Form>


const StateArray = [
  {
    value: 'al',
    label: 'Alabama'
  },
  {
    value: 'al',
    label: 'Alaska'
  },
  {
    value: 'ca',
    label: 'California'
  }
]