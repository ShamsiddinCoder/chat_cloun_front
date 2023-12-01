import React, {useState} from 'react';
import s from './Messages.module.css';
import RemoveFMessages from '../../../Controller/RemoveMessage';
import RemoveMessage from '../RemoveMessage/RemoveMessage';
import { useDispatch } from 'react-redux';
import getFreands from '../../../Controller/GetFreands';
import {API_URL} from '../../../config';

export default function Messages({userId, id, from, to, message}) {
  const [remove, setRemove] = useState({top: 0, left: 0, show: false});
  const dispatch = useDispatch();

  const removeMessage = (e) => {
    e.preventDefault();
    setRemove({
      ...remove,
      top: e.nativeEvent.offsetY,
      left: e.nativeEvent.offsetX,
      show: true
    });
  };

  const name = from.userName.split('')[0];
  const avatar = from.avatar ? `${API_URL + userId.id + '/' + from.avatar}` : name;

  const removed = (e) => {
    if(e.target.id === 'mesageList'){
      setRemove({...remove, show: false})
    }else if(e.target.id === 'mesages'){
      RemoveFMessages(id);
      setRemove({...remove, show: false});
      dispatch(getFreands(to.to_id, 'freandMessage'));
    }
  }

  return (
    <div className={s.messages} id='mesageList'
        onContextMenu={(e) => removeMessage(e)} 
        onMouseLeave={() => setRemove({...remove, show: false})}
        onClick={(e) => removed(e)}
    >
      <RemoveMessage {...remove} removed={removed} />
      <div className={s.messageAvatar}>
        {avatar}
      </div>
      <div className={s.messageTitle}>
        <p>{message}</p>
      </div>
    </div>
  )
}
