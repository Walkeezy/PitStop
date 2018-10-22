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

                {({ isSubmitting, touched, errors }) => (

                    <Form>
                        <div className="form__field field--half">
                            <label htmlFor="userFirstName">Your first name</label>
                            <Field type="text" name="userFirstName" id="userFirstName" className={(touched.userFirstName && errors.userFirstName) && 'input--error'} />
                            <ErrorMessage name="userFirstName" render={msg => <div className="field-error">{msg}</div>} />
                        </div>
                        <div className="form__field field--half">
                            <label htmlFor="userLastName">Your last name</label>
                            <Field type="text" name="userLastName" id="userLastName" className={(touched.userLastName && errors.userLastName) && 'input--error'} />
                            <ErrorMessage name="userLastName" render={msg => <div className="field-error">{msg}</div>} />
                        </div>
                        <div className="form__field">
                            <label htmlFor="userMail">Your email-address</label>
                            <Field type="mail" name="userMail" id="userMail" className={(touched.userMail && errors.userMail) && 'input--error'} />
                            <ErrorMessage name="userMail" render={msg => <div className="field-error">{msg}</div>} />
                        </div>
                        <div className="form__field field--half">
                            <label htmlFor="userPassword">Password</label>
                            <Field type="password" name="userPassword" id="userPassword" className={(touched.userPassword && errors.userPassword) && 'input--error'} />
                            <ErrorMessage name="userPassword" render={msg => <div className="field-error">{msg}</div>} />
                        </div>
                        <div className="form__field field--half">
                            <label htmlFor="userPasswordRepeat">Repeat Password</label>
                            <Field type="password" name="userPasswordRepeat" id="userPasswordRepeat" className={(touched.userPasswordRepeat && errors.userPasswordRepeat) && 'input--error'} />
                            <ErrorMessage name="userPasswordRepeat" render={msg => <div className="field-error">{msg}</div>} />
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
