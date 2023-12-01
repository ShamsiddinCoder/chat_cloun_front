import React, {useState} from 'react';
import s from './AvatarBox.module.css';
import { API_URL } from '../../../config';
import RemoveMessage from '../../UserList/RemoveMessage/RemoveMessage';
import removeAvatar from '../../../Controller/RemoveAvatar';
import { useDispatch } from 'react-redux';
import { deleteAvatar } from '../../../Reduxes/UserRedeucer';
import { updateAvatar } from '../../../Reduxes/UserRedeucer';
import { openSLider } from '../../../Reduxes/ActReducer';
import updateUsers from '../../../Controller/UpdateUser';

export default function AvatarBox({id, u_id, avatars, userAvatar}) {
    const avatarFoto = `${API_URL + u_id + '/' + avatars}`;
    const [remove, setRemove] = useState({top: 0, left: 0, show: false});
    const dispatch = useDispatch();

    const avatarName = avatars.split('.')[0].length > 10 ? <h4>{avatars.split('.')[0].slice(0, 10) + '...'}</h4> : <h4>{avatars.split('.')[0]}</h4>;
   
    const removeMessage = (e) => {
      e.preventDefault();
      setRemove({
        ...remove,
        top: e.nativeEvent.offsetY,
        left: e.nativeEvent.offsetX,
        show: true
      });
    };

    const removed = (e) => {
      if(e.target.id === 'box'){
        setRemove({...remove, show: false})
      }else if(e.target.id === 'mesages'){
        setRemove({...remove, show: false});

        if(avatars === userAvatar){
          alert('This avatar can not delete !');
        }else {
          dispatch(removeAvatar(id, u_id, avatars));
          dispatch(deleteAvatar({id, userAvatar}));
        }
        
      }
    }

    const updateAvatarLogo = () => {
      let avatar = avatars;
      updateUsers({avatar});
      dispatch(updateAvatar({avatar}));
      setRemove({...remove, show: false});
    }

  return (
    <div className={s.avatarBox}
      onContextMenu={(e) => removeMessage(e)} 
      onMouseLeave={() => setRemove({...remove, show: false})}
      onClick={(e) => removed(e)}
      onDoubleClick={() => dispatch(openSLider())}
    >
        <RemoveMessage {...remove} removed={removed} updateAvatarLogo={updateAvatarLogo} />
        <div className={s.avatarBoxImg}>
            <img src={avatarFoto} id='box' alt="Avatar" /> 
        </div>
        <div className={s.avatarBoxTitle}>
            {avatarName}
        </div>
    </div>
  )
}
