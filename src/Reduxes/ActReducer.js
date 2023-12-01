const OPEN = 'OPEN';
const CLOSE = 'CLOSE';

const defaultAct = {
    slider: false
}

export default function SliderActives (state = defaultAct, action) {
    switch(action.type){
        case OPEN: return {...state, slider: true}
        case CLOSE: return {...state, slider: false}

        default: return state
    }
};

export const openSLider = () => ({type: OPEN});
export const closeSLider = () => ({type: CLOSE});