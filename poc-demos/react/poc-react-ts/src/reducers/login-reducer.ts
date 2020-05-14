import { ILoginState } from ".";
import { User } from "../models/user";
import { AnyAction } from "redux";
import { loginActionTypes } from "../actions/login-action";

const initialState: ILoginState = {
    // @ts-ignore
    authUser: (null as User),
    errorMessage: ''
}

export const loginReducer = (state: ILoginState = initialState, action: AnyAction) => {
    switch (action.type) {
        case loginActionTypes.SUCCESSFUL_LOGIN:
            return {
                ...state,
                authUser: action.payload
            }

        case loginActionTypes.BAD_REQUEST:
        case loginActionTypes.INTERNAL_SERVER_ERROR:
        case loginActionTypes.INVALID_CREDENTIALS:
            return {
                ...state,
                errorMessage: action.payload                
            }
        default:
            return state;
    }
    
}