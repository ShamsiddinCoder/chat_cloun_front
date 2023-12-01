import React, {useState, useRef} from 'react';
import s from './UserList.module.css';
import UserFreands from './UserFreands/UserFreands';
import Messages from './Messages/Messages';
import {useDispatch, useSelector} from 'react-redux';
import SendFMessages from '../../Controller/SendMEssage';
import getFreands from '../../Controller/GetFreands';
import BackMessage from '../../asets/next_btn.png';

export default function UserList() {
    const dates = useSelector(select => select.users.dates);
    const fMessage = useSelector(select => select.messages);
    const [actMessage, setActMessage] = useState(false);
    const dispatch = useDispatch();
    const freandsRef = useRef([]);
    const [sendMessage, setSendMessage] = useState({
        id: 0,
        messag: ''
    })
    
    const sendMessageHandler = (e) => {
        if(sendMessage.messag === '' && sendMessage.id === 0){
            alert('Please complate Message!')
        }else {
            SendFMessages(sendMessage);
            dispatch(getFreands(sendMessage.id, 'freandMessage'));
        }
        setSendMessage({...sendMessage, messag: ''});
    }
    
    const styleFreands = (index) => {
        freandsRef.current?.map((items, i) => {
            if(index === i){
                items.style.background = '#ccc';

            }else {
                items.style.background = '#fff';
            }
        });
        setActMessage(act => act = true);
    }

  return (
    <section>
        {
            dates.message || !localStorage.getItem('token') ? <h4>{dates.message ? dates.message : 'You are not log in!'}</h4> 
            :
            <div className={s.userList}>
                <div className={s.userFreands}>
                    {
                        dates.freands?.length > 0 ? dates.freands?.map((item, index) => <UserFreands setSendMessage={setSendMessage}
                                                                                    styleFreands={styleFreands}
                                                                                    freandsRef={freandsRef}
                                                                                    index={index}
                                                                                    key={item.id} userId={dates.id} {...item} />) 
                                                                                    : <h4>{dates.freands?.message}</h4>
                    }
                </div>
                <div className={s.userMessages}
                    style={{
                        left: actMessage ? '0' : '-106%'
                    }}
                >
                    <div className={s.messages} >
                        <img src={BackMessage} alt="" className={s.backMessages} onClick={() => setActMessage(act => act = false)} />
                        {
                           fMessage?.length === 0 ? <h4>Not message...</h4> : fMessage?.map(messag => <Messages 
                                                                                                    key={messag.id} 
                                                                                                    userId={dates.id} {...messag} />)
                        }
                        
                    </div>
                    <div className={s.newMessages}>
                        <input type="text" placeholder='New Message...' 
                            onChange={(e) => setSendMessage(message => ({...message, messag: e.target.value}))} 
                            value={sendMessage.messag}/>
                        <button onClick={(e) => sendMessageHandler(e)}>Send</button>
                    </div>
                </div>
            </div>
        }
        
    </section>
  )
}
