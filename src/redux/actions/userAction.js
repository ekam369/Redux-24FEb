import {USER_FETCH} from './types';
import Helper from '../../Helper/Helper';

export const userAction = () => {
    return({
        type: USER_FETCH,
        payload: Helper()
    })
}