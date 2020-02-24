import {USER_FETCH} from '../actions/types';

const initialState = {
    users: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case USER_FETCH:
            return{
                ...state,
                users: action.payload
            }

        default: 
            return state
    }
}