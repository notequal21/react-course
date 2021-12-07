import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET-USER-DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET-CAPTCHA-URL-SUCCESS';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaURL: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userID, email, login, isAuth) =>
    ({type: SET_USER_DATA, payload: {userID, email, login, isAuth}});

export const getCaptchaURLSuccess = (captchaURL ) =>
    ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaURL}});

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me();

    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaURL());
        }

        let messages = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'
        dispatch(stopSubmit('login', {_error: messages}));
    }
}

export const getCaptchaURL = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaURL();
    const captchaURL = response.data.url;

    dispatch(getCaptchaURLSuccess(captchaURL));
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer;