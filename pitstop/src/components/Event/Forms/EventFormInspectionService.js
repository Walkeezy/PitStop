import React, {Component} from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

class EventFormInspectionService extends Component {

    constructor() {
        super()
        this.handleSubmitEvent = this.handleSubmitEvent.bind(this)
    }

    handleSubmitEvent = (values, {setSubmitting}) => {

        const event = {
            type       : values.eventType,
            date       : values.eventDate,
            mileage    : values.eventMileage,
            company    : values.eventCompany,
            price      : values.eventInspectionPrice,
            description: values.eventDescription
        }

        this.props.startAddingEvent(this.props.vehicles.activeVehicle, event)
        this.props.saveActualMileage(this.props.vehicles.activeVehicle, event.mileage)

        setSubmitting(false)
        return
    }

    render() {
        let eventValues = {
            eventType           : this.props.match.params.type,
            eventDate           : new Date().toISOString().slice(0, 10),
            eventMileage        : this.props.vehicles.vehicles[this.props.vehicles.activeVehicle] ? this.props.vehicles.vehicles[this.props.vehicles.activeVehicle].actual_mileage : '',
            eventDescription    : '',
            eventInspectionPrice: 0,
            eventCompany        : ''
        }

        return (
            <Formik
                initialValues={eventValues}
                validationSchema={Yup.object().shape({
                    eventDate           : Yup.date().required('Date of event is required.'),
                    eventMileage        : Yup.number().required('Mileage of your vehicle is required.'),
                    eventInspectionPrice: Yup.number().required('Price of the inspection is required.')
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
                            <label htmlFor="eventCompany">Company</label>
                            <Field type="text"
                                   name="eventCompany"
                                   id="eventCompany"
                                   className={(touched.eventCompany && errors.eventCompany) && 'input--error'}/>
                            <ErrorMessage name="eventCompany"
                                          render={msg => <div className="field-error">{msg}</div>}/>
                        </div>
                        <div className="form__field field--half">
                            <label htmlFor="eventInspectionPrice">Price in CHF *</label>
                            <Field type="number"
                                   name="eventInspectionPrice"
                                   id="eventInspectionPrice"
                                   className={(touched.eventInspectionPrice && errors.eventInspectionPrice) && 'input--error'}/>
                            <ErrorMessage name="eventInspectionPrice"
                                          render={msg => <div className="field-error">{msg}</div>}/>
                        </div>
                        <div className="form__field">
                            <label htmlFor="eventDescription">Description</label>
                            <Field component="textarea"
                                   name="eventDescription"
                                   id="eventDescription"
                                   className={(touched.eventDescription && errors.eventDescription) && 'input--error'}/>
                            <ErrorMessage name="eventDescription"
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

export default EventFormInspectionService
