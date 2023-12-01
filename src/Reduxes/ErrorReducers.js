const LOGIN_SHOW = 'LOGIN_SHOW';
const LOGIN_HIDE = 'LOGIN_HIDE';
const AUTH_SHOW = 'AUTH_SHOW';
const AUTH_ERR = 'AUTH_ERR';
const AUTH_HIDE = 'AUTH_HIDE';

const defaultDates = {
    register: false,
    auth: null
};

export default function ErrorReducer(state = defaultDates, action) {
    switch(action.type){
        case LOGIN_SHOW: return {...state, register: true}
        case LOGIN_HIDE: return {...state, register: false}
        case AUTH_SHOW: return {...state, auth: true}
        case AUTH_ERR: return {...state, auth: false}
        case AUTH_HIDE: return {...state, auth: null}

        default: return state
    }
}

export const loginShow = () => ({type: LOGIN_SHOW});
export const loginHide = () => ({type: LOGIN_HIDE});
export const authShow = () => ({type: AUTH_SHOW});
export const authErr = () => ({type: AUTH_ERR});
export const authHide = () => ({type: AUTH_HIDE});