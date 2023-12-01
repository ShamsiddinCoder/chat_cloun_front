import React, {useState, useEffect} from 'react';
import s from './Header.module.css';
import { Link } from 'react-router-dom';
import LogOut from '../../Controller/LogOut';
import {useSelector, useDispatch} from 'react-redux';
import avatarLogo from '../../asets/user.png';
import bell from '../../asets/bell.png';
import people from '../../asets/people.png';
import findFreands from '../../Controller/FindFreands';
import Freands from '../Freands/Freands';
import {API_URL} from '../../config';
import action from '../../asets/action.png';
import camera from '../../asets/camera.png';
import { useNavigate } from 'react-router-dom';
import { openSLider } from '../../Reduxes/ActReducer';

export default function Header() {
    const a = useSelector(select => select.errLogin);
    const dates = useSelector(select => select.users.dates);
    const dispatch = useDispatch();
    const [search, setSearch] = useState(false);
    const [subFreands, setSubFreands] = useState(false);
    const [searchName, setSearchName] = useState('');
    const [findFreand, setFindFreand] = useState([]);
    const navigate = useNavigate();
    const avatar = dates.avatar ? `${API_URL + dates.id + '/' + dates.avatar}` : avatarLogo;

    const userName = localStorage.getItem('token') ? 
                    <>
                        <div className={s.headerAvatarImg} onDoubleClick={() => dispatch(openSLider())} >
                            <img src={avatar} alt="" />
                        </div>
                        <h4>{dates.name}</h4>
                    </> :
                    <h4>Chat Cloun</h4>

    const searchHandler = async () => {
        const findingFreands = await findFreands(searchName);
        setFindFreand(findingFreands);
    }
    
    const actionHandler = () => {
        navigate('/action')
    }

    const searchErr = (e) => {
        if(e.target.id.split(' ')[0] === 'err'){
            setSearch(itm => itm = false)
        }
        if(e.target.id.split(' ')[1] === 'sub'){
            setSubFreands(itm => itm = false);
        }
    }

    const searchAct = (e) => {
        if(e.target.name === 'search'){
            setSearch(itm => itm = !itm)
        }
    }
    
    useEffect(() => {
        if(!localStorage.getItem('token') || dates.message){
            dispatch(LogOut())
            console.log('ok');
        }
    }, [])
    
  return (
    <div className={s.header} id='err sub' onClick={(e) => searchErr(e)}>
        <section>
            <div className={s.headerInner}  id='err sub' onClick={(e) => searchErr(e)}>
                <div className={s.headerAvatar} id='err sub' onClick={(e) => {navigate('/users'); searchErr(e)}}>
                    {userName}
                </div>
                <div className={s.headerNavbar}>
                    
                    <div className={s.headerSearch} style={{height: search ? '34rem' : '0rem', opacity: search ? '1' : '0'}}>
                        <input type="text" placeholder='Fine Friends' onChange={(e) => setSearchName(e.target.value)}/>
                        <button onClick={() => searchHandler()}>Search</button>
                        <div className={s.headerSearchList}>
                            {
                                findFreand.length < 0 ? <h4>Not Friends</h4> : findFreand?.map(item => <Freands key={item.id} {...item} />)
                            }                            
                        </div>
                    </div>

                    <div className={s.subFreands} style={{height: subFreands ? '34rem' : '0rem', opacity: subFreands ? '1' : '0'}}>
                        {
                            dates.sub_message?.length < 0 ? <h4>Sub Freands</h4> : dates.sub_message?.map(item => <Freands key={item.id} {...item} />)
                        }  
                    </div>

                    {a.register === false && a.auth === null || a.register === true && a.auth === null ? 
                        <>
                            <Link to='/registration'>Registration</Link>
                            <Link to='/login'>Login</Link>
                        </>
                        : 
                        <>                 
                            {dates.auth ? <>
                                        <img className={s.search} src={camera} alt="" onClick={(e) => navigate('/posts')} />
                                        <img className={s.search} id='err sub' src={action} alt="" onClick={(e) => {actionHandler(); searchErr(e)}} />
                                    </> : ''}
                            <img className={s.search} id='__ sub' name='search' src={people} alt="" onClick={(e) => searchAct(e)} />
                            <div className={s.navSubMessage}>
                                <img src={bell} id='err __' onClick={(e) => {setSubFreands(elem => elem = !elem); searchErr(e)}}/>
                                <h4>{dates?.sub_message?.length}</h4>
                            </div>
                            <Link id='err sub' to='/' onClick={(e) => {dispatch(LogOut()); searchErr(e)}}>Logout</Link>
                        </>
                    }
                    {/* <Link to='/' onClick={() => dispatch(LogOut())}>Logout</Link>      */}
                </div>
            </div>
        </section>
    </div>
  )
}
