import React from 'react';
import s from './RemoveMessage.module.css';

export default function RemoveMessage({top, left, show, removed, updateAvatarLogo}) {
  return (
    <div className={s.removeMessage}
        style={{
            top: top,
            left: left,
            opacity: show ? '1' : '0',
            visibility: show ? 'visible' : 'hidden'
        }}
    >
        <button onClick={() => updateAvatarLogo()}>Select</button>
        <button onClick={(e) => removed(e)} id='mesages' >Delete</button>
    </div>
  )
}
