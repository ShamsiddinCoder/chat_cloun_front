import { loginHide, authHide } from "../Reduxes/ErrorReducers";

export default function LogOut(){
    return async dispatch => {
        try {
            await fetch(`http://localhost:5000/api/logout`, {
                method: 'POST',
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            });
    
            localStorage.removeItem('token');
            dispatch(loginHide());
            dispatch(authHide());
            
        } catch (error) {
            console.log(error);
        }
    }
}