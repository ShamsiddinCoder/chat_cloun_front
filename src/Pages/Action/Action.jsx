import React, {useState, useRef} from 'react';
import s from './Action.module.css';
import {useSelector, useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import updateUsers from '../../Controller/UpdateUser';
import { uploadAvatar } from '../../Controller/Avatar';
import removeAvatar from '../../Controller/RemoveAvatar';
import SizeImages from '../../Actions/SizeImage';
import GetDateToday from '../../Actions/GetdateToday';

export default function Action() {
    const dates = useSelector(select => select.users.dates);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const newPasRef = useRef();
    const conPasRef = useRef();
   
    const [updatePass, setUpdatePass] = useState({
        click: false,
        old: true,
        new: false
    });

    const [updateTitle, setUpdateTitle] = useState({
        name: '',
        newPas: '',
        conPass: '',
        avatar: ''
    });

    const updateHandler = (e) => {
        if(updatePass.click){
            if(e.target.name === 'password'){   
                if(e.target.value === dates.password){
                    console.log('ok');
                    setUpdatePass({...updatePass, old: false}); 
                }else {
                    setUpdatePass({...updatePass, old: true});
                }
            } 
        }
    }

    const sendNewUserInform = () => {
        if(!updatePass.old){
            if(updateTitle.newPas === updateTitle.conPass){
                newPasRef.current.style.border = 'solid 1px crimson';
                conPasRef.current.style.border = 'solid 1px crimson';
            }
        }

        if(updateTitle.name === dates.name || updateTitle.name === '' && updateTitle.conPass === ''){
            alert('You are not updated!');
        }else {
            updateUsers({...updateTitle});
        }
    }

    const upAvatar = async (event) => {
        const file = event.target.files[0];
        const sizeImage = await SizeImages(file);
        const dateNow = await GetDateToday();
        
        dispatch(uploadAvatar(file, sizeImage, dateNow));
    }

  return (
    <div className={s.action}>
        <section>
            <div className={s.actionInner} onChange={(e) => setUpdateTitle(data => ({...data, [e.target.name]: e.target.value}))}>
                <input type="text" name='name' />
                <input type="password" placeholder='Old Password' name='password' 
                    onClick={(e) => {
                        setUpdatePass({...updatePass, click: !updatePass.click});
                        updateHandler(e);
                    }} 
                    onChange={(e) => updateHandler(e)}
                />
                <input type="password" placeholder='New Password' name='newPas' disabled={updatePass.old}
                    style={{opacity: updatePass.old ? '.5' : '1'}}
                    ref={newPasRef}
                />
                <input type="password" placeholder='Confirm New Password' name='conPass' disabled={updatePass.old} 
                    style={{opacity: updatePass.old ? '.5' : '1'}}
                    ref={conPasRef}
                />
                <div className={s.actionAvatar}>
                    <label className={s.actionAvatars} htmlFor="changeAvatar">Select Avatar</label>
                    <input  accept='image/*' type="file" id='changeAvatar' onChange={(event) => upAvatar(event)}  />
                    <button className={s.actionAvatars} onClick={() => dispatch(removeAvatar(dates.id))} >Delete avatar</button>
                </div>
                <div className={s.actionButtons}>
                    <button onClick={() => navigate('/users')}>Cencel</button>
                    <button onClick={() => sendNewUserInform()}>Update</button>
                    <button>Delete</button>
                </div>
            </div>
        </section>
    </div>
  )
}
