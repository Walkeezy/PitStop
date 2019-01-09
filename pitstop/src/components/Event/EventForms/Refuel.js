import React, {Component} from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

class EventForm extends Component {

    constructor() {
        super()
        this.handleSubmitEvent = this.handleSubmitEvent.bind(this)
    }

    handleSubmitEvent = (values, {setSubmitting}) => {

        const event = {
            type       : values.eventType,
            date       : new Date(values.eventDate),
            mileage    : values.eventMileage,
            amount     : values.eventRefuelAmount,
            price      : values.eventRefuelPrice
        }

        this.props.startAddingEvent(this.props.vehicles.activeVehicle, event)
        this.props.saveActualMileage(this.props.vehicles.activeVehicle, event.mileage)

        setSubmitting(false)
        return
    }

    render() {
        const minimumMileage = this.props.vehicles.vehicles[this.props.vehicles.activeVehicle].actual_mileage

        let eventValues       = {
                eventType        : this.props.match.params.type,
                eventDate        : new Date().toISOString().slice(0, 10),
                eventMileage     : minimumMileage,
                eventRefuelAmount: 0,
                eventRefuelPrice : 0,
                eventTires       : '',
                eventTiresPrice  : 0
            }

        return (
            <Formik
                initialValues={eventValues}
                validationSchema={Yup.object().shape({
                    eventDate        : Yup.date().required('Date of event is required.'),
                    eventMileage     : Yup.number().required('Mileage of your vehicle is required.'),
                    eventRefuelAmount: Yup.number().min(1, 'Amount of your refuel is too low.').required('Amount of your refuel is required.'),
                    eventRefuelPrice : Yup.number().min(1, 'Price of your refuel is too low.').required('Price of your refuel is required.')
                })}
                onSubmit={this.handleSubmitEvent}
                enableReinitialize="true">

                {({isSubmitting, touched, errors}) => (

                    <Form>
                        <input type="hidden" id="eventType" name="eventType" value={eventValues.eventType}/>
                        <div className="form__field field--half">
                            <label htmlFor="eventDate">Date *</label>
                            <Field type="date"
                                   name="eventDate"
                                   id="eventDate"
                                   className={(touched.eventDate && errors.eventDate) && 'input--error'}/>
                            <ErrorMessage name="eventDate"
                                          render={msg => <div className="field-error">{msg}</div>}/>
                        </div>
                        <div className="form__field field--half">
                            <label htmlFor="eventMileage">Current mileage *</label>
                            <Field type="number"
                                   name="eventMileage"
                                   id="eventMileage"
                                   className={(touched.eventMileage && errors.eventMileage) && 'input--error'}/>
                            <ErrorMessage name="eventMileage"
                                          render={msg => <div className="field-error">{msg}</div>}/>
                        </div>
                        <div className="form__field field--half">
                            <label htmlFor="eventRefuelAmount">Liters refilled *</label>
                            <Field type="number"
                                   name="eventRefuelAmount"
                                   id="eventRefuelAmount"
                                   className={(touched.eventRefuelAmount && errors.eventRefuelAmount) && 'input--error'}/>
                            <ErrorMessage name="eventRefuelAmount"
                                          render={msg => <div className="field-error">{msg}</div>}/>
                        </div>
                        <div className="form__field field--half">
                            <label htmlFor="eventRefuelPrice">Price in CHF *</label>
                            <Field type="number"
                                   name="eventRefuelPrice"
                                   id="eventRefuelPrice"
                                   className={(touched.eventRefuelPrice && errors.eventRefuelPrice) && 'input--error'}/>
                            <ErrorMessage name="eventRefuelPrice"
                                          render={msg => <div className="field-error">{msg}</div>}/>
                        </div>
                        <div className="form__field">
                            <p>*Fields are required</p>
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
