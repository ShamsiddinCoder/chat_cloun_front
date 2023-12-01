import {authShow, authErr } from "../Reduxes/ErrorReducers";

export default function Login({name, password}) {
    return async dispatch => {
        try {
            const body = {name, password};
            const loginUser = await fetch(`http://localhost:5000/api/login`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            }).then(item => {return item.json()});

            if(loginUser.message){
                dispatch(authErr());
                alert(loginUser.message);
            }else {
                dispatch(authShow());
                localStorage.setItem('token', loginUser.token);
            }
            
            console.log(loginUser);
        } catch (error) {
            console.log(error);
        }
    }
}