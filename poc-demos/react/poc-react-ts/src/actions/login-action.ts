import { Dispatch } from "redux"
import { authenticate } from "../remote/auth-service"

export const loginActionTypes = {
    SUCCESSFUL_LOGIN: 'REVABOARDS_SUCCESSFUL_LOGIN',
    BAD_REQUEST: 'REVABOARDS_BAD_REQUEST',
    INVALID_CREDENTIALS: 'REVABOARDS_INVALID_CREDENTIALS',
    INTERNAL_SERVER_ERROR: 'REVABOARDS_INTERNAL_SERVER_ERROR'
}

export const loginAction = (username: string, password: string) => async (dispatch: Dispatch) => {

    try {
        let authUser = await authenticate(username, password);
        dispatch({
            type: loginActionTypes.SUCCESSFUL_LOGIN,
            payload: authUser
        });

    } catch (e) {
        let status = e.response.status;
        if (status === 400) {
            dispatch({
                type: loginActionTypes.BAD_REQUEST,
                payload: e.response.data.message
            });
        } else if (status === 401)
            dispatch({
                type: loginActionTypes.INVALID_CREDENTIALS,
                payload: e.response.data.message
            });
        } else 
            dispatch ({
                type: loginActionTypes.INTERNAL_SERVER_ERROR,
                payload: e.resonse.data.message
            })
        }
    
