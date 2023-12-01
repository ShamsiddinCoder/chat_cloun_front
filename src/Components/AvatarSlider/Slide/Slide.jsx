import React from 'react';
import s from './Slide.module.css';
import { API_URL } from '../../../config';

export default function Slide({boxWidth, u_id, avatars, position, size, width, height, date, time}) {
  const avatarName = avatars.split('.')[0].length > 10 ? <h4>{avatars.split('.')[0].slice(0, 10) + '...'}</h4> : <h4>{avatars.split('.')[0]}</h4>;
  const sizes = ((size / 1024) / 1024).toFixed(2);
  const avatarImg = `${API_URL + u_id + '/' + avatars}`;
  
  return (
    <div style={{width: boxWidth}} className={s.slide}>
      <div className={s.slideInner}> 
        <div className={s.avatarFoto}>
          <img src={avatarImg} alt="" 
            style={{
              width: position === 'width' ? '100%' : '',
              height: position === 'height' ? '100%' : ''
            }}
          />
        </div>
        <h4>{avatarName}</h4>
        <h4>{`${sizes} Mb`}</h4>
        <h4>{`Width: ${width}`}</h4>
        <h4>{`Height: ${height}`}</h4>
        <h4>{date}</h4>
        <h4>{time}</h4>
      </div>      
    </div>
  )
}
