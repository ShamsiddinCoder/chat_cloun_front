import React, {useState, useEffect} from 'react';
import s from './Registration.module.css';
import Registrate from '../../Controller/Register';
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

export default function Registration() {
  const dispatch = useDispatch();
  const errRegister = useSelector(select => select.errLogin.register);
  const navigate = useNavigate();
  
  const [newUser, setNewUser] = useState({
    name: '',
    password: ''
  });

  const regist = () => {  
    if(newUser.name === '' || newUser.password === ''){
      alert('Please complate...')
    }else {
      dispatch(Registrate({...newUser}));
    }
  }

  useEffect(() => {
    if(errRegister){
      navigate('/login');
    }else {
      navigate('/registration');
    }
  }, [errRegister])

  return (
    <div className={s.registration} onChange={(e) => setNewUser(title => ({...title, [e.target.name]: e.target.value}))}>
        <input name='name' type="text" placeholder='Enter Name' value={newUser.name} />
        <input name='password' type="password" placeholder='Enter Password' value={newUser.password} />
        <div className={s.choosAvatar}>
            <label htmlFor="avatar">Avatar</label>
            <input id='avatar' type="file" />
        </div>
        <button onClick={() => regist()}>Registrate</button>
    </div>
  )
}
