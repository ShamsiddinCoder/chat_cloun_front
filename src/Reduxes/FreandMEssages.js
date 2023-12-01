const GET_MESSAGE = 'GET_MESSAGE';

export default function FreandMessage (state = [], action){
    switch(action.type){
        case GET_MESSAGE: 
            return [...action.payload]

        default: return state
    }
}

export const messages = (message) => ({type: GET_MESSAGE, payload: message});