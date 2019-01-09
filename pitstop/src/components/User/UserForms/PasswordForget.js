import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

class PasswordForgetForm extends Component {

    constructor() {
        super()
        this.handlePasswordReset = this.handlePasswordReset.bind(this)
    }

    handlePasswordReset = (values, { setSubmitting }) => {
        const email = values.userMail
        if (email) {
            this.props.passwordResetUser(email)
        }
        setSubmitting(false)
        return
    }

    render() {

        return (

            <Formik
                initialValues={{
                    userMail: '',
                }}
                validationSchema={Yup.object().shape({
                    userMail: Yup.string().email('The email-address you entered does not seem to be valid.').required('Your email-address is required.'),
                })}
                onSubmit={this.handlePasswordReset}>

                {({ isSubmitting, touched, errors }) => (

                    <Form>
                        <div className="form__field">
                            <label htmlFor="userMail">Your email-address</label>
                            <Field type="mail" name="userMail" id="userMail" className={(touched.userMail && errors.userMail) && 'input--error'} />
                            <ErrorMessage name="userMail" render={msg => <div className="field-error">{msg}</div>} />
                        </div>
                        <div className="form__field field--submit">
                            <button type="submit" disabled={isSubmitting} className="button--yellow">Reset password</button>
                        </div>
                    </Form>

                )}
            </Formik>
        )
    }
}

export default PasswordForgetForm
