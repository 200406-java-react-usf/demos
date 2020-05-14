import { Dispatch } from "redux"
import { register } from "../remote/user-service"

export const registerActionTypes = {
    SUCCESSFUL_REGISTER: 'REVABAORDS_SUCCESSFUL_REGISTER',
    BAD_REQUEST: 'REVABOARDS_BAD_REQUEST',
    CONFLICT_ERROR: 'REVABOARDS_CONFLICT_ERROR',
    INTERNAL_SERVER_ERROR: 'REVABOARDS_INTERNAL_SERVER_ERROR'
}

export const registerAction = (username: string, password:string, firstName: string, lastName: string, email: string) => async (dispatch: Dispatch) => {

    try {
        let persistedUser = await register(username, password, firstName, lastName, email);
        dispatch({
            type: registerActionTypes.SUCCESSFUL_REGISTER,
            payload: persistedUser
        });
    } catch (e) {
        let status = e.response.status;
        if (status === 400) {
            dispatch({
                type: registerActionTypes.BAD_REQUEST,
                payload: e.response.data.reason
            });
        } else if (status === 409) {
            dispatch({
                type: registerActionTypes.CONFLICT_ERROR,
                payload: e.response.data.reason
            });
        }
        else {
            dispatch({
                type: registerActionTypes.INTERNAL_SERVER_ERROR,
                payload: e.response.data.message || 'Uh oh! We could not reach the server!'
            });
        }
    }
}