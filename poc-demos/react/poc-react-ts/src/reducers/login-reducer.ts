import { ILoginState } from ".";
import { User } from "../models/user";
import { AnyAction, combineReducers } from "redux";
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
        case loginActionTypes.INVALID_CREDENTIALS:
        case loginActionTypes.INTERNAL_SERVER_ERROR:
            return {
                ...state,
                errorMessage: action.payload
            }

        default: 
            return state;

    }
    
}

