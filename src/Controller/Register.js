import { loginHide, loginShow } from "../Reduxes/ErrorReducers";


export default function Registrate({name, password}){
    return async dispatch => {
        try {
            const body = {name, password};
            const newUser = await fetch(`http://localhost:5000/api/register`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            });

            if(newUser.status === 400){
                dispatch(loginHide());
                alert('Like this user already have')
            }else {
                dispatch(loginShow());
            }
            
        } catch (error) {
            console.log(error);
        }
    }
}