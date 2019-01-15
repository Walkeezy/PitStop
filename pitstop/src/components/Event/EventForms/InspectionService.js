import React, {Component} from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

class EventForm extends Component {

    constructor() {
        super()
        this.handleSubmitEvent = this.handleSubmitEvent.bind(this)
        this.handleRemoveEvent = this.handleRemoveEvent.bind(this)
    }

    handleSubmitEvent = (values, {setSubmitting}) => {
        const vehicle = this.props.vehicles.activeVehicle
        const event = {
            type        : values.eventType,
            date        : new Date(values.eventDate),
            mileage     : values.eventMileage,
            description : values.eventDescription,
            company     : values.eventCompany,
            price       : values.eventInspectionPrice
        }

        this.props.editEventId
            ? this.props.startEditingEvent(vehicle, this.props.editEventId, event)
            : this.props.startAddingEvent(vehicle, event)

        // Update actual mileage only if its higher than current actual mileage
        values.eventMileage > this.props.vehicles.vehicles[vehicle].actual_mileage && this.props.saveActualMileage(vehicle, event.mileage)

        setSubmitting(false)
        return
    }

    handleRemoveEvent = (eventId) => {
        eventId && this.props.startRemovingEvent(this.props.vehicles.activeVehicle, eventId)
    }

    render() {
        const editEventId = this.props.editEventId
        const events = this.props.events.events

        let eventValues = {
            eventType           : this.props.match.params.type,
            eventDate           : new Date().toISOString().slice(0, 10),
            eventMileage        : this.props.vehicles.vehicles[this.props.vehicles.activeVehicle] ? this.props.vehicles.vehicles[this.props.vehicles.activeVehicle].actual_mileage : '',
            eventDescription    : '',
            eventCompany        : '',
            eventInspectionPrice: 0,
        }

        // If there is a event to be edited, get its values as default values
        if (editEventId && events.length > 0) {
            const eventToEdit = events.filter(event => event.id === editEventId)[0]
            eventValues = {
                eventType: eventToEdit.type,
                eventDate: new Date(eventToEdit.date.seconds * 1000).toISOString().slice(0, 10),
                eventMileage: eventToEdit.mileage,
                eventDescription: eventToEdit.description,
                eventInspectionPrice: parseFloat(eventToEdit.price).toFixed(2),
                eventCompany: eventToEdit.company
            }
        }

        return (
            <Formik
                initialValues={eventValues}
                validationSchema={Yup.object().shape({
                    eventDate           : Yup.date().required('Date of event is required.'),
                    eventMileage        : Yup.number().required('Mileage of your vehicle is required.'),
                    eventInspectionPrice: Yup.number().required('Price is required.')
                })}
                onSubmit={this.handleSubmitEvent}
                enableReinitialize="true">

                {({isSubmitting, touched, errors}) => (

                    <Form>
                        <input type="hidden" id="eventType" name="eventType" value={eventValues.eventType}/>
                        <div className="form__field field--half">
                            <label htmlFor="eventDate">Date<span className="required">*</span></label>
                            <Field type="date"
                                   name="eventDate"
                                   id="eventDate"
                                   className={(touched.eventDate && errors.eventDate) && 'input--error'}/>
                            <ErrorMessage name="eventDate"
                                          render={msg => <div className="field-error">{msg}</div>}/>
                        </div>
                        <div className="form__field field--half">
                            <label htmlFor="eventMileage">Current mileage<span className="required">*</span></label>
                            <Field type="number"
                                   name="eventMileage"
                                   id="eventMileage"
                                   className={(touched.eventMileage && errors.eventMileage) && 'input--error'}/>
                            <ErrorMessage name="eventMileage"
                                          render={msg => <div className="field-error">{msg}</div>}/>
                        </div>
                        <div className="form__field">
                            <label htmlFor="eventDescription">Description of service or repair</label>
                            <Field component="textarea"
                                name="eventDescription"
                                id="eventDescription"
                                className={(touched.eventDescription && errors.eventDescription) && 'input--error'} />
                            <ErrorMessage name="eventDescription"
                                render={msg => <div className="field-error">{msg}</div>} />
                        </div>
                        <div className="form__field field--half">
                            <label htmlFor="eventCompany">Garage</label>
                            <Field type="text"
                                   name="eventCompany"
                                   id="eventCompany"
                                   className={(touched.eventCompany && errors.eventCompany) && 'input--error'}/>
                            <ErrorMessage name="eventCompany"
                                          render={msg => <div className="field-error">{msg}</div>}/>
                        </div>
                        <div className="form__field field--half">
                            <label htmlFor="eventInspectionPrice">Price in CHF<span className="required">*</span></label>
                            <Field type="number"
                                   name="eventInspectionPrice"
                                   id="eventInspectionPrice"
                                   className={(touched.eventInspectionPrice && errors.eventInspectionPrice) && 'input--error'}/>
                            <ErrorMessage name="eventInspectionPrice"
                                          render={msg => <div className="field-error">{msg}</div>}/>
                        </div>
                        <div className="form__field field--submit">
                            <button type="submit" disabled={isSubmitting} className="button--yellow">Save event</button>
                            {editEventId && <button type="button" onClick={() => this.handleRemoveEvent(this.props.editEventId)}>Delete event</button>}
                        </div>
                        <div className="required-hint">Fields marked with * are required.</div>
                    </Form>

                )}
            </Formik>
        )
    }
}

export default EventForm
