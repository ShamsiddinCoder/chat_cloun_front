import {getDates} from '../Reduxes/UserRedeucer';

export default function Auth(){
    return async dispatch => {
        try {
            const dates = await fetch(`http://localhost:5000/api/auth`, {
                method: 'GET',
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            }).then(items => {
                return items.json()
            });

            dispatch(getDates(dates));
            
        } catch (error) {
            console.log(error);
        }
    }
}