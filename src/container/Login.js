import React, { Component } from 'react'
import { Formik } from 'formik';

export default class Login extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 mx-auto my-5'>
                        <Formik
                            initialValues={{ email: '', password: '' }}
                            validate={values => {
                                const errors = {};
                                if (!values.email) {
                                    errors.email = 'Required';
                                } else if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                ) {
                                    errors.email = 'Invalid email address';
                                }
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    setSubmitting(false);
                                }, 400);
                            }}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                                /* and other goodies */
                            }) => (
                                <form onSubmit={handleSubmit}>
                                    {/* Email input */}
                                    <div className="form-outline mb-4">
                                        <input type="email" id="form2Example1" className="form-control" />
                                        <label className="form-label" htmlFor="form2Example1">Email address</label>
                                    </div>
                                    {/* Password input */}
                                    <div className="form-outline mb-4">
                                        <input type="password" id="form2Example2" className="form-control" />
                                        <label className="form-label" htmlFor="form2Example2">Password</label>
                                    </div>
                                    {/* 2 column grid layout for inline styling */}
                                    <div className="row mb-4">
                                        <div className="col d-flex justify-content-center">
                                            {/* Checkbox */}
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue id="form2Example31" defaultChecked />
                                                <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            {/* Simple link */}
                                            <a href="#!">Forgot password?</a>
                                        </div>
                                    </div>
                                    {/* Submit button */}
                                    <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>
                                    {/* Register buttons */}
                                    <div className="text-center">
                                        <p>Not a member? <a href="#!">Register</a></p>
                                        <p>or sign up with:</p>
                                        <button type="button" className="btn btn-link btn-floating mx-1">
                                            <i className="fab fa-facebook-f" />
                                        </button>
                                        <button type="button" className="btn btn-link btn-floating mx-1">
                                            <i className="fab fa-google" />
                                        </button>
                                        <button type="button" className="btn btn-link btn-floating mx-1">
                                            <i className="fab fa-twitter" />
                                        </button>
                                        <button type="button" className="btn btn-link btn-floating mx-1">
                                            <i className="fab fa-github" />
                                        </button>
                                    </div>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        )
    }
}
