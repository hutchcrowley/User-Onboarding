import React, { useState } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const OnboardingForm = ({ values, touched, errors }) => {
  console.log(values);

  return (
    <div className='App'>
      <Form className='onboarding-form'>
        <div className='text-inputs'>
          <label>
            Username:
            <Field type='text' name='username' value={values.username} />
          </label>
          {touched.username && errors.username && <p>{errors.username}</p>}
          <label>
            Password:
            <Field type='text' name='password' value={values.password} />
          </label>
          {touched.password && errors.password && <p>{errors.password}</p>}
          <label>
            Email:
            <Field type='text' name='email' value={values.email} />
          </label>
          {touched.email && errors.email && <p>{errors.email}</p>}
        </div>
        <label className='terms-of-service'>
          Terms Of Service: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </label>
        <div className='checkbox-container'>
          <label>By checking this box you agree to the terms of service:</label>
          <Field className='checkmark' type='checkbox' name='TOS' value={values.TOS} />
        </div>
        <Field type='submit' className='submit-button'>
          Submit!
        </Field>
      </Form>
    </div>
  );
};
const FormikForm = withFormik({
  mapPropsToValues({ name, email, password, TOS }) {
    return {
      name: name || '',
      email: email || '',
      password: password || '',
      TOS: TOS || ''
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required('Please enter your name!'),
    email: Yup.string().required('Please enter your email!'),
    password: Yup.string().required('You MUST enter your password!'),
    TOS: Yup.boolean()
  }),

  handleSubmit(values) {
    axios
      .post('https://reqres.in/api/users', values)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
        // setSubmitting(false);
      });
  }
})(OnboardingForm);

export default FormikForm;
