import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

class EventForm extends Component {

    constructor() {
        super()
        this.handleSubmitEvent = this.handleSubmitEvent.bind(this)
    }

    handleSubmitEvent = (values, { setSubmitting }) => {

        const event = {
            _created: new Date().toLocaleString(),
            type: values.eventType,
            date: values.eventDate,
            mileage: values.eventMileage,
            description: values.eventDescription
        }

        this.props.startAddingEvent(this.props.vehicles.activeVehicle, event)

        setSubmitting(false)
        return
    }

    render() {
        let eventValues = {
            eventType: 'refuel',
            eventDate: new Date().toISOString().slice(0,10),
            eventMileage: this.props.vehicles.vehicles[this.props.vehicles.activeVehicle] ? this.props.vehicles.vehicles[this.props.vehicles.activeVehicle].actual_mileage : '',
            eventDescription: ''
        }

        return (

            <Formik
                initialValues={eventValues}
                validationSchema={Yup.object().shape({
                    eventDate: Yup.date().required('Date of event is required.'),
                    eventMileage: Yup.number().required('Mileage of your vehicle is required.'),
                })}
                onSubmit={this.handleSubmitEvent}
                enableReinitialize="true">

                {({ isSubmitting, touched, errors }) => (

                    <Form>
                        <div className="form__field">
                            <label htmlFor="eventType">Type of event</label>
                            <Field component="select" name="eventType" id="eventType" className={(touched.eventType && errors.eventType) && 'input--error'}>
                                <option value="refuel">Refuel</option>
                                <option value="tires-change">Tires change</option>
                                <option value="oil-refill">Oil refill</option>
                                <option value="oil-change">Oil change</option>
                                <option value="inspection-service">Inspection/service</option>
                            </Field>
                            <ErrorMessage name="eventType" render={msg => <div className="field-error">{msg}</div>} />
                        </div>
                        <div className="form__field">
                            <label htmlFor="eventDate">Date</label>
                            <Field type="date" name="eventDate" id="eventDate" className={(touched.eventDate && errors.eventDate) && 'input--error'} />
                            <ErrorMessage name="eventDate" render={msg => <div className="field-error">{msg}</div>} />
                        </div>
                        <div className="form__field">
                            <label htmlFor="eventMileage">Current mileage</label>
                            <Field type="number" name="eventMileage" id="eventMileage" className={(touched.eventMileage && errors.eventMileage) && 'input--error'} />
                            <ErrorMessage name="eventMileage" render={msg => <div className="field-error">{msg}</div>} />
                        </div>
                        <div className="form__field">
                            <label htmlFor="eventDescription">Description</label>
                            <Field component="textarea" name="eventDescription" id="eventDescription" className={(touched.eventDescription && errors.eventDescription) && 'input--error'} />
                            <ErrorMessage name="eventDescription" render={msg => <div className="field-error">{msg}</div>} />
                        </div>
                        <div className="form__field field--submit">
                            <button type="submit" disabled={isSubmitting} className="button--yellow">Save event</button>
                        </div>
                    </Form>

                )}
            </Formik>
        )
    }
}

export default EventForm
