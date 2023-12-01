import { getDates } from "../Reduxes/UserRedeucer";
import {messages} from '../Reduxes/FreandMEssages';

export default function getFreands(id, name){
    return async dispatch => {
        try {
            // console.log('ok' + ' ' + name);
            const freands = await fetch(`http://localhost:5000/api/freand/${+id}`, {
                method: 'GET',
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            }).then(frend => {
                return frend.json();
            });

            if(name === 'subFrands'){
                dispatch(getDates(freands));
            }

            // console.log(typeof id);
            if(name === 'freandMessage') {
                dispatch(messages(freands.messages));
            }

        } catch (error) {
            console.log(error);
        }
    }
};