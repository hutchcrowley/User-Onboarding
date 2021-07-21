import React from 'react'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

const OnboardingForm = ({ values, touched, errors, isSubmitting }) => {
  console.log('these are some values:', values)

  return (
    <div className='onboarding-form'>
      <Form>
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
        <div className='checkbox-container'>
          <label className='terms-of-service'>
            Terms Of Service: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
            <br />
            By checking this box you agree to the terms of service:
            <Field
              className='checkbox'
              type='checkbox'
              name='termsOfService'
              checked={values.TOS}
            />
            {touched.termsOfService && errors.termsOfService && (
              <p>{errors.termsOfService}</p>
            )}
          </label>
        </div>
        <button className='submit-button' disabled={isSubmitting} type='submit'>
          Submit!
        </button>
      </Form>
    </div>
  )
}
const FormikForm = withFormik({
  mapPropsToValues ({ name, email, password, termsOfService }) {
    return {
      name: name || '',
      email: email || '',
      password: password || '',
      termsOfService: termsOfService || false
    }
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required('Please enter your name!'),
    email: Yup.string().required('Please enter your email!'),
    password: Yup.string('Must be 6 characters or longer, Dave')
      .min(5)
      .required('You MUST enter your password!'),
    termsOfService: Yup.boolean('CLICK THE CHECKBOX').required(
      'READ THE TERMS OF SERVICE'
    )
  }),

  handleSubmit (values, { resetForm, setSubmitting }) {
    axios
      .post('https://reqres.in/api/users', values)
      .then(res => {
        console.log(res.data)
        console.log(res.status)
        console.log(res.statusText)
        console.log(res.headers)
        resetForm()
        setSubmitting(false)
      })
      .catch(err => {
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)
        console.log(err.toJSON())
        setSubmitting(false)
      })
  }
})(OnboardingForm)

export default FormikForm
