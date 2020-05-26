import { Dispatch } from "redux"
import { authorize } from "../remote/auth-service"

export const registerActionTypes = {
    SUCCESSFUL_REGISTER: 'REVABOARDS_SUCCESSFUL_REGISTER',
    BAD_REQUEST: 'REVABOARDS_BAD_REQUEST',
    RESOURCE_PERSISTENCE_ERROR: 'REVABOARDS_RESOURCE_PERSISTENCE_ERROR',
    INTERNAL_SERVER_ERROR: 'REVABOARDS_INTERNAL_SERVER_ERROR'
}

export const registerAction = (username: string, password: string, firstName: string, lastName: string, email: string) => async (dispatch: Dispatch) => {

    try {
        let newUser = await authorize(username, password, firstName, lastName, email);
        dispatch({
            type: registerActionTypes.SUCCESSFUL_REGISTER,
            payload: newUser
        });

    } catch (e) {
        let status = e.response.status;
        if (status === 400) {
            dispatch({
                type: registerActionTypes.BAD_REQUEST,
                payload: e.response.data.message
            });
        } else if (status === 409) {
            dispatch({
                type: registerActionTypes.RESOURCE_PERSISTENCE_ERROR,
                payload: e.response.data.message
            });
        } else {
            dispatch({
                type: registerActionTypes.INTERNAL_SERVER_ERROR,
                payload: e.response.data.message || 'Uh oh! We could not reach the server!'
            });
        }
    }
}
