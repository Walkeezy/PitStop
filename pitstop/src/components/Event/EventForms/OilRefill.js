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
            oil        : values.eventOil,
            amount     : values.eventOilAmount,
            price      : values.eventOilPrice
        }

        this.props.startAddingEvent(this.props.vehicles.activeVehicle, event)
        this.props.saveActualMileage(this.props.vehicles.activeVehicle, event.mileage)

        setSubmitting(false)
        return
    }

    render() {
        let eventValues = {
            eventType       : this.props.match.params.type,
            eventDate       : new Date().toISOString().slice(0, 10),
            eventMileage    : this.props.vehicles.vehicles[this.props.vehicles.activeVehicle] ? this.props.vehicles.vehicles[this.props.vehicles.activeVehicle].actual_mileage : '',
            eventOil        : '',
            eventOilAmount  : 0,
            eventOilPrice   : 0
        }

        return (
            <Formik
                initialValues={eventValues}
                validationSchema={Yup.object().shape({
                    eventDate     : Yup.date().required('Date of event is required.'),
                    eventMileage  : Yup.number().required('Mileage of your vehicle is required.'),
                    eventOil      : Yup.string().required('Field for the Oil name is required.'),
                    eventOilAmount: Yup.string().required('Field for the Oil name is required.'),
                    eventOilPrice : Yup.number().required('Price of the Oil is required.')
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
                        <div className="form__field field--third">
                            <label htmlFor="eventOil">Oil Brand *</label>
                            <Field type="text"
                                   name="eventOil"
                                   id="eventOil"
                                   className={(touched.eventOil && errors.eventOil) && 'input--error'}/>
                            <ErrorMessage name="eventOil"
                                          render={msg => <div className="field-error">{msg}</div>}/>
                        </div>
                        <div className="form__field field--third">
                            <label htmlFor="eventOilAmount">Deciliters refilled *</label>
                            <Field type="number"
                                   name="eventOilAmount"
                                   id="eventOilAmount"
                                   className={(touched.eventOilAmount && errors.eventOilAmount) && 'input--error'}/>
                            <ErrorMessage name="eventOilAmount"
                                          render={msg => <div className="field-error">{msg}</div>}/>
                        </div>
                        <div className="form__field field--third">
                            <label htmlFor="eventOilPrice">Price in CHF *</label>
                            <Field type="number"
                                   name="eventOilPrice"
                                   id="eventOilPrice"
                                   className={(touched.eventOilPrice && errors.eventOilPrice) && 'input--error'}/>
                            <ErrorMessage name="eventOilPrice"
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
