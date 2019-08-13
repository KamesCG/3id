/* --- Global Dependencies --- */
import React from 'react';
import { Form, Field, ErrorMessage } from 'formik';

/* --- Local Dependencies --- */
import { Button } from 'atoms'

/* ------ Component ------ */
export default ({ values, handleSubmit, isSubmitting, ...props }) =>
<Form onSubmit={handleSubmit} style={{width: '100%'}} >

  <label>Name <ErrorMessage name="name" component="div" /></label>
  <Field type="text" name="name" value={values.name} />
  
  <Button pill type="submit" disabled={isSubmitting} mt={15} width={1}>
    Submit
  </Button>
</Form>