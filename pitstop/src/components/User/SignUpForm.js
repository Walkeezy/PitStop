import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

class SignUpForm extends Component {

    constructor() {
        super()
        this.handleSignUp = this.handleSignUp.bind(this)
    }

    handleSignUp = (values, { setSubmitting }) => {
        const user = {
            firstname: values.userFirstName,
            lastname: values.userLastName,
            email: values.userMail,
            password: values.userPassword
        }
        if (user.email && user.password) {
            this.props.startCreatingUser(user)
        }
        setSubmitting(false)
        return
    }

    render() {

        return (

            <Formik
                initialValues={{
                    userFirstName: '',
                    userLastName: '',
                    userMail: '',
                    userPassword: '',
                    userPasswordRepeat: ''
                }}
                validationSchema={Yup.object().shape({
                    userFirstName: Yup.string().required('Your first name is required.'),
                    userLastName: Yup.string().required('Your last name is required.'),
                    userMail: Yup.string().email('The email-address you entered does not seem to be valid.').required('Your email-address is required.'),
                    userPassword: Yup.string().min(6, 'Password must be 6 characters or longer.').required('Password is required.'),
                    userPasswordRepeat: Yup.string().oneOf([Yup.ref('userPassword'), null], 'Passwords need to match.').required('Password is required.')
                })}
                onSubmit={this.handleSignUp}>

                {({ isSubmitting }) => (

                    <Form>
                        <div className="form__field field--half">
                            <label htmlFor="userFirstName">Your first name</label>
                            <Field type="text" name="userFirstName" id="userFirstName" />
                            <ErrorMessage name="userFirstName" component="div" />
                        </div>
                        <div className="form__field field--half">
                            <label htmlFor="userLastName">Your last name</label>
                            <Field type="text" name="userLastName" id="userLastName" />
                            <ErrorMessage name="userLastName" component="div" />
                        </div>
                        <div className="form__field">
                            <label htmlFor="userMail">Your email-address</label>
                            <Field type="mail" name="userMail" id="userMail" />
                            <ErrorMessage name="userMail" component="div" />
                        </div>
                        <div className="form__field field--half">
                            <label htmlFor="userPassword">Password</label>
                            <Field type="password" name="userPassword" id="userPassword" />
                            <ErrorMessage name="userPassword" component="div" />
                        </div>
                        <div className="form__field field--half">
                            <label htmlFor="userPasswordRepeat">Repeat Password</label>
                            <Field type="password" name="userPasswordRepeat" id="userPasswordRepeat" />
                            <ErrorMessage name="userPasswordRepeat" component="div" />
                        </div>
                        <div className="form__field field--submit">
                            <button type="submit" disabled={isSubmitting} className="button--yellow">Sign up</button>
                        </div>
                    </Form>

                )}
            </Formik>
        )
    }
}

export default SignUpForm
