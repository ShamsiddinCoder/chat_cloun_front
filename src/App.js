import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import {routers} from './routers/routers';
import {Routes, Route, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {authShow} from './Reduxes/ErrorReducers';
import Auth from './Controller/Auth';
import AvatarSlider from './Components/AvatarSlider/AvatarSlider';

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const a = useSelector(select => select.errLogin);

  useEffect(() => {
    if(localStorage.getItem('token')){
      navigate('/users');
      dispatch(authShow());
      dispatch(Auth());
    }
  }, [a.auth]);

  return (
    <div className="App">
      <Header /> 
      <AvatarSlider />
      <Routes>
        {
          routers?.map(({paths, elements: Components}) => (
            <Route 
              path={paths}
              element={<Components />}
            />
          )) 
        }
      </Routes>
    </div>
  );
}

export default App;
