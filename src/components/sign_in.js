import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { renderInput } from '../helpers';

class SignIn extends Component {
    handleSignIn(values) {
        console.log('Sign In Form Submitted:', values);
    }

    render() {

        const { handleSubmit } = this.props;

        return (
            <div>
                <h1 className="center-align">Sign In</h1>
                <div className="row">
                    <div className="col s6 offset-s3">
                        <div className="card grey lighten-3">
                            <div className="card-content">
                                <form onSubmit={handleSubmit(this.handleSignIn)}>
                                    <Field component={renderInput} name="email" placeholder="Enter your email" />
                                    <Field component={renderInput} name="password" placeholder="Enter your password" type="password" />
                                    <div className="right-align">
                                        <button className="btn blue-grey darken-1">Sign In</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

SignIn = reduxForm({
    form: 'sign-in-form'
})(SignIn);

export default SignIn;
