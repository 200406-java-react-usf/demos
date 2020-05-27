import { IRegisterState } from ".";
import { User } from "../models/user";
import { AnyAction, combineReducers } from "redux";
import { registerActionTypes } from "../actions/register-action";

const initialState: IRegisterState = {
    // @ts-ignore
    newUser: (null as User),
    errorMessage: ''
}

export const registerReducer = (state: IRegisterState = initialState, action: AnyAction) => {

    switch (action.type) {

        case registerActionTypes.SUCCESSFUL_REGISTER:
            return {
                ...state,
                newUser: action.payload
            }

        case registerActionTypes.BAD_REQUEST:
        case registerActionTypes.RESOURCE_PERSISTENCE_ERROR:
        case registerActionTypes.INTERNAL_SERVER_ERROR:
            return {
                ...state,
                errorMessage: action.payload
            }

        default: 
            return state;

    }
    
}