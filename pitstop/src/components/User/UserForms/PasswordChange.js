import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

class PasswordForgetForm extends Component {

    constructor() {
        super()
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
    }

    handlePasswordChange = (values, { setSubmitting }) => {
        const currentPassword = values.currentPassword
        const newPassword = values.newPassword
        if (currentPassword && newPassword) {
            this.props.changePassword(currentPassword, newPassword)
        }
        setSubmitting(false)
        return
    }

    render() {

        return (

            <Formik
                initialValues={{
                    currentPassword: '',
                    newPassword: '',
                    newPasswordRepeat: ''
                }}
                validationSchema={Yup.object().shape({
                    currentPassword: Yup.string().required('Password is required.'),
                    newPassword: Yup.string().min(6, 'Password must be 6 characters or longer.').required('Password is required.'),
                    newPasswordRepeat: Yup.string().oneOf([Yup.ref('newPassword'), null], 'Passwords need to match.').required('Password is required.')
                })}
                onSubmit={this.handlePasswordChange}>

                {({ isSubmitting, touched, errors }) => (

                    <Form>
                        <div className="form__field">
                            <label htmlFor="currentPassword">Current password</label>
                            <Field type="password" name="currentPassword" id="currentPassword" className={(touched.currentPassword && errors.currentPassword) && 'input--error'} />
                            <ErrorMessage name="currentPassword" render={msg => <div className="field-error">{msg}</div>} />
                        </div>
                        <div className="form__field">
                            <label htmlFor="newPassword">New password</label>
                            <Field type="password" name="newPassword" id="newPassword" className={(touched.newPassword && errors.newPassword) && 'input--error'} />
                            <ErrorMessage name="newPassword" render={msg => <div className="field-error">{msg}</div>} />
                        </div>
                        <div className="form__field">
                            <label htmlFor="newPasswordRepeat">Repeat new password</label>
                            <Field type="password" name="newPasswordRepeat" id="newPasswordRepeat" className={(touched.newPasswordRepeat && errors.newPasswordRepeat) && 'input--error'} />
                            <ErrorMessage name="newPasswordRepeat" render={msg => <div className="field-error">{msg}</div>} />
                        </div>
                        <div className="form__field field--submit">
                            <button type="submit" disabled={isSubmitting} className="button--yellow">Change password</button>
                        </div>
                    </Form>

                )}
            </Formik>
        )
    }
}

export default PasswordForgetForm
