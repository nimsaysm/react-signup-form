import React from "react"
import ReactDOM from "react-dom"
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from 'yup'
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
            <Form>
                <label htmlFor="email">Email Address</label>
                <Field name="email" type="email" />
                <ErrorMessage name="email" />

                <label htmlFor="firstName">First Name</label>
                <Field name="firstName" type="text" />
                <ErrorMessage name="firstName" />

                <label htmlFor="lastName">Last Name</label>
                <Field name="lastName" type="text" />
                <ErrorMessage name="lastName" />
                
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}

function App() {
    return <SignupForm />
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
