import React, {useState} from 'react';
import s from './Registration.module.css';
import {useSelector, useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginUser from '../../Controller/Login';
import { Link } from 'react-router-dom';

export default function Login() {
    const dispatch = useDispatch();
    const b = useSelector(select => select.errLogin.auth);
    const navigate = useNavigate();
    
    const [login, setLogin] = useState({
        name: '',
        password: ''
    })
    
    const loginHandlar = () => {
        if(login.name === '' || login.password === ''){

        }else {
            dispatch(LoginUser({...login}));
        }
    }

    if(b){
        navigate('/users');
    }

    return (
        <div className={s.registration} onChange={(e) => setLogin(title => ({...title, [e.target.name]: e.target.value}))}>
            <input name='name' type="text" placeholder='Enter Name' />
            <input name='password' type="password" placeholder='Enter Password' />
            <button onClick={() => loginHandlar()}>Login</button>
            <Link style={{display: b === false ? 'flex' : 'none'}} to='/registration'>Registration...</Link>
        </div>
      )
}
