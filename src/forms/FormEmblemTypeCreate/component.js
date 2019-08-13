/* --- Global Dependencies --- */
import React from 'react';
import { Form, Field, ErrorMessage } from 'formik';

/* --- Local Dependencies --- */
import { Button, Flex } from 'atoms'

/* ------ Component ------ */
export default ({ values, handleSubmit, isSubmitting, setFieldValue, setFieldTouched, setUploadFiles, uploadFilesComplete, ...props }) =>
<Form onSubmit={handleSubmit} style={{width: '100%'}} >
  <label>Name </label>
  <Field type="text" name="name" />
  <ErrorMessage name="name" component="div" />
  <br></br>
  <label>Description</label>
  <Field type="text" name="description" />
  <ErrorMessage name="description" component="div" />
  <label>Delegates </label>
  <Button pill type="submit" disabled={isSubmitting} mt={15} width={1}>
    Submit
  </Button>
</Form>