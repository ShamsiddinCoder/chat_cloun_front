import React, {useState} from 'react';
import s from './UserFreands.module.css';
import avatarLogo from '../../../asets/user.png';
import {API_URL} from '../../../config';
import { useDispatch } from 'react-redux';
import getFreands from '../../../Controller/GetFreands';

export default function UserFreands({setSendMessage, styleFreands, freandsRef, index, id, name, avatar}) {
  const avatars = avatar ? `${API_URL + id + '/' + avatar}` : avatarLogo;
  const [act, setAct] = useState(false);
  const dispatch = useDispatch();

  const freansMessagesHandlet = (e) => {
    if(e.target.id === 'freandMessage'){
      setSendMessage(userId => ({...userId, id: id}));
      dispatch(getFreands(id, e.target.id));
      setAct(!act);
      styleFreands(index);
    }
  }

  return (
    <div className={s.freands} id='freandMessage' onClick={(e) => freansMessagesHandlet(e)}
      ref={ref => freandsRef.current[index] = ref}
    >
        <div className={s.freandAvatar}>
            <img src={avatars} alt="" />
        </div>
        <h4>{name}</h4>
        <h4>Messages 0</h4>
    </div>
  )
}
