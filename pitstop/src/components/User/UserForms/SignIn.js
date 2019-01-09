import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import * as routes from '../../../constants/routes'

class SignInForm extends Component {

    constructor() {
        super()
        this.handleSignIn = this.handleSignIn.bind(this)
    }

    handleSignIn = (values, { setSubmitting }) => {
        const user = {
            email: values.userMail,
            password: values.userPassword
        }
        if (user.email && user.password) {
            this.props.startLoginUser(user)
        }
        setSubmitting(false)
        return
    }

    render() {

        return (

            <Formik
                initialValues={{
                    userMail: '',
                    userPassword: ''
                }}
                validationSchema={Yup.object().shape({
                    userMail: Yup.string().email('The email-address you entered does not seem to be valid.').required('Your email-address is required.'),
                    userPassword: Yup.string().required('Password is required.'),
                })}
                onSubmit={this.handleSignIn}>

                {({ isSubmitting, touched, errors }) => (

                    <Form>
                        <div className="form__field">
                            <label htmlFor="userMail">Your email-address</label>
                            <Field type="mail" name="userMail" id="userMail" className={(touched.userMail && errors.userMail) && 'input--error'} />
                            <ErrorMessage name="userMail" render={msg => <div className="field-error">{msg}</div>} />
                        </div>
                        <div className="form__field">
                            <label htmlFor="userPassword">Your password</label>
                            <Field type="password" name="userPassword" id="userPassword" className={(touched.userPassword && errors.userPassword) && 'input--error'} />
                            <ErrorMessage name="userPassword" render={msg => <div className="field-error">{msg}</div>} />
                        </div>
                        <div className="form__field field--submit">
                            <button type="submit" disabled={isSubmitting} className="button--yellow">Sign in</button>
                            <div className="lost-password">Lost your password? <Link to={routes.PASSWORD_FORGET}>Reset it here.</Link></div>
                        </div>
                    </Form>

                )}
            </Formik>
        )
    }
}

export default SignInForm
