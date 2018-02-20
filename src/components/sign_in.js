import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { renderInput } from '../helpers';
import { signIn } from '../actions';

class SignIn extends Component {
    handleSignIn(values) {
        console.log('Sign In Form Submitted:', values);

        this.props.signIn(values);
    }

    render() {

        const { handleSubmit, authError } = this.props;

        return (
            <div>
                <h1 className="center-align">Sign In</h1>
                <div className="row">
                    <div className="col s6 offset-s3">
                        <div className="card grey lighten-3">
                            <div className="card-content">
                                <form onSubmit={handleSubmit(this.handleSignIn.bind(this))}>
                                    <Field component={renderInput} name="email" placeholder="Enter your email" />
                                    <Field component={renderInput} name="password" placeholder="Enter your password" type="password" />
                                    <div className="right-align">
                                        <button className="btn blue-grey darken-1">Sign In</button>
                                    </div>
                                    <p className="red-text center-align">{authError}</p>
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

function mapStateToProps(state){
    return {
        authError: state.user.error
    }
}

export default connect(mapStateToProps, { signIn })(SignIn);
