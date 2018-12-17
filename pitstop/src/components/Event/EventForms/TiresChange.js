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
            tires      : values.eventTires,
            company    : values.eventCompany,
            price      : values.eventTiresPrice
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
            eventTires      : '',
            eventTiresPrice : 0,
            eventCompany    : ''
        }

        return (
            <Formik
                initialValues={eventValues}
                validationSchema={Yup.object().shape({
                    eventDate      : Yup.date().required('Date of event is required.'),
                    eventMileage   : Yup.number().required('Mileage of your vehicle is required.'),
                    eventTires     : Yup.string().required('Field for new tires is required.'),
                    eventTiresPrice: Yup.number().required('Price of your new tires is required.')
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
                        <div className="form__field">
                            <label htmlFor="eventTires">Tires *</label>
                            <Field type="text"
                                   name="eventTires"
                                   id="eventTires"
                                   className={(touched.eventTires && errors.eventTires) && 'input--error'}/>
                            <ErrorMessage name="eventTires"
                                          render={msg => <div className="field-error">{msg}</div>}/>
                        </div>
                        <div className="form__field field--half">
                            <label htmlFor="eventCompany">Company</label>
                            <Field type="text"
                                   name="eventCompany"
                                   id="eventCompany"
                                   className={(touched.eventCompany && errors.eventCompany) && 'input--error'}/>
                            <ErrorMessage name="eventCompany"
                                          render={msg => <div className="field-error">{msg}</div>}/>
                        </div>
                        <div className="form__field field--half">
                            <label htmlFor="eventTiresPrice">Price in CHF *</label>
                            <Field type="number"
                                   name="eventTiresPrice"
                                   id="eventTiresPrice"
                                   className={(touched.eventTiresPrice && errors.eventTiresPrice) && 'input--error'}/>
                            <ErrorMessage name="eventTiresPrice"
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
