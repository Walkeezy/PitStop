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
            type: values.eventType,
            date: values.eventDate,
            mileage: values.eventMileage,
            refuelPrice: values.eventRefuelPrice,
            description: values.eventDescription
        }

        this.props.startAddingEvent(this.props.vehicles.activeVehicle, event)
        this.props.saveActualMileage(this.props.vehicles.activeVehicle, event.mileage)

        setSubmitting(false)
        return
    }

    render() {
        let eventValues = {
                eventType: this.props.match.params.type,
                eventDate: new Date().toISOString().slice(0,10),
                eventMileage: this.props.vehicles.vehicles[this.props.vehicles.activeVehicle] ? this.props.vehicles.vehicles[this.props.vehicles.activeVehicle].actual_mileage : '',
                eventDescription: '',
                eventRefuelPrice: 0,
                eventTires: '',
                eventTiresPrice: 0
            },
            formtype = this.props.match.params.type,
            handleSubmitEvent = this.handleSubmitEvent

        return (
            <div>
                {(function() {
                    switch(formtype) {
                        case 'refuel':
                            return <Formik
                                initialValues={eventValues}
                                validationSchema={Yup.object().shape({
                                    eventDate: Yup.date().required('Date of event is required.'),
                                    eventMileage: Yup.number().required('Mileage of your vehicle is required.'),
                                    eventRefuelPrice: Yup.number().required('Price of your refuel is required.')
                                })}
                                onSubmit={handleSubmitEvent}
                                enableReinitialize="true">

                                {({ isSubmitting, touched, errors }) => (

                                    <Form>
                                        <input type="hidden" id="eventType" name="eventType" value={eventValues.eventType} />
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
                                            <label htmlFor="eventRefuelPrice">Price</label>
                                            <Field type="number" name="eventRefuelPrice" id="eventRefuelPrice" className={(touched.eventRefuelPrice && errors.eventRefuelPrice) && 'input--error'} />
                                            <ErrorMessage name="eventRefuelPrice" render={msg => <div className="field-error">{msg}</div>} />
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
                        case 'tires-change':
                            return <Formik
                                initialValues={eventValues}
                                validationSchema={Yup.object().shape({
                                    eventDate: Yup.date().required('Date of event is required.'),
                                    eventMileage: Yup.number().required('Mileage of your vehicle is required.'),
                                    eventTires: Yup.string().required('Field for new tires is required.'),
                                    eventTiresPrice: Yup.number().required('Price of your new tires is required.')
                                })}
                                onSubmit={handleSubmitEvent}
                                enableReinitialize="true">

                                {({ isSubmitting, touched, errors }) => (

                                    <Form>
                                        <input type="hidden" id="eventType" name="eventType" value={eventValues.eventType} />
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
                                            <label htmlFor="eventTires">Tires</label>
                                            <Field type="text" name="eventTires" id="eventTires" className={(touched.eventTires && errors.eventTires) && 'input--error'} />
                                            <ErrorMessage name="eventTires" render={msg => <div className="field-error">{msg}</div>} />
                                        </div>
                                        <div className="form__field">
                                            <label htmlFor="eventTiresPrice">Price</label>
                                            <Field type="number" name="eventTiresPrice" id="eventTiresPrice" className={(touched.eventTiresPrice && errors.eventTiresPrice) && 'input--error'} />
                                            <ErrorMessage name="eventTiresPrice" render={msg => <div className="field-error">{msg}</div>} />
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
                        case 'oil-refill':
                            return 'form oil-refill';
                        case 'oil-change':
                            return 'form oil-change';
                        case 'inspection-service':
                            return 'form inspection-service';
                        default:
                            return null;
                    }
                })()}
            </div>

        )
    }
}

export default EventForm
