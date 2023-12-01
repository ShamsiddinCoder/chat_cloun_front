import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import user from './UserRedeucer';
import loginErr from './ErrorReducers';
import FreandMessage from './FreandMEssages';
import SliderActives from './ActReducer';

const rooter = combineReducers({
    users: user,
    errLogin: loginErr,
    messages: FreandMessage,
    act: SliderActives
});

export const stores = createStore(rooter, applyMiddleware(thunk));