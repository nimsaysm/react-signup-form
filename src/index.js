import React from "react"
import ReactDOM from "react-dom"
import { Formik, useFormik } from "formik"
import * as Yup from 'yup';
import "./styles.css"

const SignupForm = () => {
    return (
        <Formik
            initialValues = {{ email: "", firstName: "", lastName: "" }}
            validationSchema = {Yup.object({
                email: Yup.string().email('Invalid email address').required('Required'),
                firstName: Yup.string()
                    .max(15, "Must be 15 characters or less")
                    .required("Required"),
                lastName: Yup.string()
                    .max(20, "Must be 20 characters or less")
                    .required("Required"),
            })}
            onSubmit = {(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2))
                    setSubmitting(false)
                }, 400)  
            }}
        >
            {formik => (
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="email">Email Address</label>
                    <input
                        id="email"
                        type="email"
                        {...formik.getFieldProps('email')}
                    />
                    {/* will show the errors just if the field was touched */}
                    {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div> 
                        ) : null}

                    <label htmlFor="firstName">First Name</label>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        {...formik.getFieldProps('firstName')}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                        <div>{formik.errors.firstName}</div>
                    ) : null}


                    <label htmlFor="lastName">Last Name</label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        {...formik.getFieldProps('lastName')}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                        <div>{formik.errors.lastName}</div>
                    ) : null}

                    <button type="submit">Submit</button>
                </form>
            )}
        </Formik>
    )
}

function App() {
    return <SignupForm />
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
