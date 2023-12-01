import {getDates} from '../Reduxes/UserRedeucer';

export default function removeAvatar(id, u_id, avatars){
    return async dispatch => {
        try {
            const body = {id, u_id: u_id ? u_id : null, avatars: avatars ? avatars : null};
            const deleteAvatar = await fetch(`http://localhost:5000/api/avatar/`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            }).then(itm => {
                return itm.json();
            });

            dispatch(getDates(deleteAvatar));

        } catch (error) {
            console.log(error);
        }
    }
};