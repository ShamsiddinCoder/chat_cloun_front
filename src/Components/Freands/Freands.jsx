import React from 'react';
import s from './Freands.module.css';
import {API_URL} from '../../config';
import avatarLogo from '../../asets/user.png';
import freandLink from '../../Controller/FreandLink';
import getFreands from '../../Controller/GetFreands';
import { useDispatch } from 'react-redux';

export default function Freands({id, name, avatar}) {
    const avatars = avatar ? `${API_URL + id + '/' + avatar}` : avatarLogo;
    const dispatch = useDispatch();

    const getFreandsHandler = (e) => {
        if(e.target.id === 'subFrands'){
            dispatch(getFreands(id, e.target.id));
        }
    }

  return (
    <div className={s.freands}>
        <div className={s.freandsAvatar} id='subFrands' onClick={(e) => getFreandsHandler(e)} >
            <img src={avatars} alt="" />
        </div>
        <div className={s.freandsTitle}>
            <h4>{name}</h4>
            <div className={s.freandsActions}>
                <button onClick={() => freandLink(id)}>Subscribs</button>
                <button>Cencel</button>
            </div>
        </div>
    </div>
  )
}
