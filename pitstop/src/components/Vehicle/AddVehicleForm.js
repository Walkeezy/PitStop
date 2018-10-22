import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

class AddVehicleForm extends Component {

    constructor() {
        super()
        this.handleAddVehicle = this.handleAddVehicle.bind(this)
    }

    handleAddVehicle = (values, { setSubmitting }) => {
        const vehicle = {
            name: values.vehicleName,
            make_model: values.vehicleMakeModel,
            registration: values.vehicleFirstRegistration,
            initial_mileage: values.vehicleMileage,
            tyres: values.vehicleTyres
        }
        this.props.startAddingVehicle(vehicle)
        setSubmitting(false)
        return
    }

    render() {

        let vehicleValues = {
            vehicleName: '',
            vehicleMakeModel: '',
            vehicleFirstRegistration: '',
            vehicleMileage: '',
            vehicleTyres: ''
        }

        // If there is a vehicle saved to the state to be edited, find it and set as default values
        if (this.props.vehicles.toEdit) {
            const vehicleToEdit = this.props.vehicles.vehicles.find((vehicle) => {
                return vehicle.id === this.props.vehicles.toEdit;
            })
            vehicleValues = {
                vehicleName: vehicleToEdit.name,
                vehicleMakeModel: vehicleToEdit.make_model,
                vehicleFirstRegistration: vehicleToEdit.registration,
                vehicleMileage: vehicleToEdit.initial_mileage,
                vehicleTyres: vehicleToEdit.tyres
            }
            //this.props.resetVehicleToEdit()
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
                onSubmit={this.handleAddVehicle}>

                {({ isSubmitting, touched, errors }) => (

                    <Form>
                        <div className="form__field">
                            <label htmlFor="vehicleName">Vehicle name</label>
                            <Field type="text" name="vehicleName" id="vehicleName" className={(touched.vehicleName && errors.vehicleName) && 'input--error'} />
                            <ErrorMessage name="vehicleName" render={msg => <div className="field-error">{msg}</div>} />
                        </div>
                        <div className="form__field">
                            <label htmlFor="vehicleMakeModel">Make &amp; model</label>
                            <Field type="text" name="vehicleMakeModel" id="vehicleMakeModel" className={(touched.vehicleMakeModel && errors.vehicleMakeModel) && 'input--error'} />
                            <ErrorMessage name="vehicleMakeModel" render={msg => <div className="field-error">{msg}</div>} />
                        </div>
                        <div className="form__field field--half">
                            <label htmlFor="vehicleFirstRegistration">Date of first registration</label>
                            <Field type="date" name="vehicleFirstRegistration" id="vehicleFirstRegistration" className={(touched.vehicleFirstRegistration && errors.vehicleFirstRegistration) && 'input--error'} />
                            <ErrorMessage name="vehicleFirstRegistration" render={msg => <div className="field-error">{msg}</div>} />
                        </div>
                        <div className="form__field field--half">
                            <label htmlFor="vehicleMileage">Current mileage</label>
                            <Field type="number" name="vehicleMileage" id="vehicleMileage" className={(touched.vehicleMileage && errors.vehicleMileage) && 'input--error'} />
                            <ErrorMessage name="vehicleMileage" render={msg => <div className="field-error">{msg}</div>} />
                        </div>
                        <div className="form__field field--half">
                            <label htmlFor="vehicleTyres">Tyres</label>
                            <Field type="text" name="vehicleTyres" id="vehicleTyres" className={(touched.vehicleTyres && errors.vehicleTyres) && 'input--error'} />
                            <ErrorMessage name="vehicleTyres" render={msg => <div className="field-error">{msg}</div>} />
                        </div>
                        <div className="form__field field--submit">
                            <button type="submit" disabled={isSubmitting} className="button--yellow">Save vehicle</button>
                        </div>
                    </Form>

                )}
            </Formik>
        )
    }
}

export default AddVehicleForm
