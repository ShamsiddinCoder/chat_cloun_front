import { getDates } from "../Reduxes/UserRedeucer";
import Auth from "./Auth";

export function uploadAvatar(file, inform = null, dateNow = null){
    return async dispatch => {
        try {
            const formDate = new FormData();
            formDate.append('avatar', file);
            formDate.append('inform', JSON.stringify(inform));
            formDate.append('dateNow', JSON.stringify(dateNow));
            const newAvatar = await fetch(`http://localhost:5000/api/avatar`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    // 'Content-Type': 'application/json'
                },
                body: formDate
            }).then(itm => {
                return itm.json();
            });
             
            dispatch(getDates(newAvatar));
            dispatch(Auth());

        } catch (error) {
            console.log(error);
        }
    }
}