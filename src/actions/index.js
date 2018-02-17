import types from './types';
import axios from 'axios';

const BASE_URL = 'http://api.reactprototypes.com';

export function signUp(cred){
    return dispatch => {
        axios.post(`${BASE_URL}/signup`, cred).then(resp => {
            console.log('Sign Up Resp:', resp);
        }).catch(err => {
            console.log('Sign Up Error:', err.message);
        });
    }
}

export function signIn(cred){
    return async dispatch => {

        try {
            const resp = await axios.post(`${BASE_URL}/signin`, cred);

            console.log('Sign In Resp:', resp);
        } catch(err){
            console.log('Sign In Error:', err.message);
        }
    }
}
