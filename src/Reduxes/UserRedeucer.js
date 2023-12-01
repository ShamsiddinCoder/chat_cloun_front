const GET_DATE = 'GET_DATE';
const DELETE_AVATAR = 'DELETE_AVATAR';
const UPDATE_AVATAR = 'UPDATE_AVATAR';

const defaultDate = {
    dates: {}
}

export default function UserReducer(state = defaultDate, action) {
    switch(action.type){
        case GET_DATE: return {...state, dates: action.payload}
        case DELETE_AVATAR:
            return {
                ...state,
                dates: {
                    ...state.dates,
                    allAvatars: [
                        ...state.dates.allAvatars.filter(item => item.id !== action.payload.id)
                    ]
                }
            }
        case UPDATE_AVATAR: 
            return {
                ...state,
                dates: {
                    ...state.dates, avatar: action.payload.avatar
                }
            }

        default: return state
    }
}

export const getDates = (dates) => ({type: GET_DATE, payload: dates});
export const deleteAvatar = (date) => ({type: DELETE_AVATAR, payload: date});
export const updateAvatar = (avatarName) => ({type: UPDATE_AVATAR, payload: avatarName});