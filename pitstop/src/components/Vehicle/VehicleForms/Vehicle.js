import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

class AddVehicleForm extends Component {

    constructor() {
        super()
        this.state = {
            confirmRemoveVehicle: false
        }
        this.handleSubmitVehicle = this.handleSubmitVehicle.bind(this)
        this.handleConfirmRemoveVehicle = this.handleConfirmRemoveVehicle.bind(this)
        this.handleRemoveVehicle = this.handleRemoveVehicle.bind(this)
    }

    handleSubmitVehicle = (values, { setSubmitting }) => {
        const vehicle = {
            name: values.vehicleName,
            make_model: values.vehicleMakeModel,
            registration: values.vehicleFirstRegistration,
            initial_mileage: values.vehicleMileage,
            actual_mileage: values.vehicleMileage,
            tyres: values.vehicleTyres
        }

        this.props.editVehicleId
            ? this.props.startEditingVehicle(this.props.editVehicleId, vehicle)
            : this.props.startAddingVehicle(vehicle)

        setSubmitting(false)
        return
    }

    handleConfirmRemoveVehicle(event) {
        event.preventDefault();
        this.setState({
            confirmRemoveVehicle: true
        })
    }

    handleRemoveVehicle(vehicleId) {
        if(vehicleId){
            this.props.startRemovingVehicle(vehicleId)

            // Check if there are other vehicles and set another one as active
            const vehicles = this.props.vehicles.vehicles
            if (Object.keys(vehicles).length >= 1){
                // Find possible new active vehicles
                const possibleActiveVehicles = Object.keys(vehicles).filter(key => key !== vehicleId)
                // Set new active vehicle if there is a possibility
                if (possibleActiveVehicles.length >= 1){
                    this.props.saveVehicleAsActive(possibleActiveVehicles[0])
                }
            }
        }
    }

    render() {
        const editVehicleId = this.props.editVehicleId
        const vehicles = this.props.vehicles.vehicles

        let vehicleValues = {
            vehicleName: '',
            vehicleMakeModel: '',
            vehicleFirstRegistration: '',
            vehicleMileage: '',
            vehicleTyres: ''
        }

        // If there is a vehicle to be edited, get its values as default values
        if (editVehicleId && Object.getOwnPropertyNames(vehicles).length > 0) {
            const vehicleToEdit = vehicles[editVehicleId]
            vehicleValues = {
                vehicleName: vehicleToEdit.name,
                vehicleMakeModel: vehicleToEdit.make_model,
                vehicleFirstRegistration: vehicleToEdit.registration,
                vehicleMileage: vehicleToEdit.initial_mileage,
                vehicleTyres: vehicleToEdit.tyres
            }
        }

        return (

            <Formik
                initialValues={vehicleValues}
                validationSchema={Yup.object().shape({
                    vehicleName: Yup.string().required('Name of your vehicle is required.'),
                    vehicleMakeModel: Yup.string().required('Make & model of your vehicle is required.'),
                    vehicleFirstRegistration: Yup.date().required('Date of first registration is required.'),
                    vehicleMileage: Yup.number().required('Mileage of your vehicle is required.'),
                    vehicleTyres: Yup.string().required('Tyres of your vehicle is required.'),
                })}
                onSubmit={this.handleSubmitVehicle}
                enableReinitialize="true">

                {({ isSubmitting, touched, errors }) => (

                    <Form>
                        <div className="form__field field--half">
                            <label htmlFor="vehicleName">Vehicle name<span className="required">*</span></label>
                            <Field type="text" name="vehicleName" id="vehicleName" className={(touched.vehicleName && errors.vehicleName) && 'input--error'} />
                            <ErrorMessage name="vehicleName"
                                          render={msg => <div className="field-error">{msg}</div>} />
                        </div>
                        <div className="form__field field--half">
                            <label htmlFor="vehicleMakeModel">Make &amp; model<span className="required">*</span></label>
                            <Field type="text" name="vehicleMakeModel" id="vehicleMakeModel" className={(touched.vehicleMakeModel && errors.vehicleMakeModel) && 'input--error'} />
                            <ErrorMessage name="vehicleMakeModel"
                                          render={msg => <div className="field-error">{msg}</div>} />
                        </div>
                        <div className="form__field field--half">
                            <label htmlFor="vehicleFirstRegistration">Date of first registration<span className="required">*</span></label>
                            <Field type="date" name="vehicleFirstRegistration" id="vehicleFirstRegistration" className={(touched.vehicleFirstRegistration && errors.vehicleFirstRegistration) && 'input--error'} />
                            <ErrorMessage name="vehicleFirstRegistration"
                                          render={msg => <div className="field-error">{msg}</div>} />
                        </div>
                        <div className="form__field field--half">
                            <label htmlFor="vehicleMileage">Current mileage<span className="required">*</span></label>
                            <Field type="number" name="vehicleMileage" id="vehicleMileage" className={(touched.vehicleMileage && errors.vehicleMileage) && 'input--error'} />
                            <ErrorMessage name="vehicleMileage"
                                          render={msg => <div className="field-error">{msg}</div>} />
                        </div>
                        <div className="form__field field--half">
                            <label htmlFor="vehicleTyres">Tyres<span className="required">*</span></label>
                            <Field type="text" name="vehicleTyres" id="vehicleTyres" className={(touched.vehicleTyres && errors.vehicleTyres) && 'input--error'} />
                            <ErrorMessage name="vehicleTyres"
                                          render={msg => <div className="field-error">{msg}</div>} />
                        </div>
                        <div className="form__field field--submit">
                            <button type="submit" disabled={isSubmitting} className="button--yellow">Save vehicle</button>
                            {editVehicleId && <button type="button" onClick={this.handleConfirmRemoveVehicle}>Delete vehicle</button>}
                        </div>
                        <div className="required-hint">Fields marked with * are required.</div>
                        {this.state.confirmRemoveVehicle &&
                            <div className="notification notification--inside-form notification--warning">
                                <p><strong>Are you sure to delete this vehicle?</strong><br/>All events associated with this vehicle will be deleted too.</p>
                                <p><button type="button" onClick={() => this.handleRemoveVehicle(this.props.editVehicleId)}>Yes, delete vehicle</button></p>
                            </div>
                        }
                    </Form>

                )}
            </Formik>
        )
    }
}

export default AddVehicleForm
