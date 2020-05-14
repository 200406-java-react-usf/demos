import { IRegisterState } from "."
import { AnyAction } from "redux"
import { registerActionTypes } from "../actions/register-action"
import { User } from "../models/user"

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
        case registerActionTypes.CONFLICT_ERROR:
        case registerActionTypes.INTERNAL_SERVER_ERROR:
            return {
                ...state,
                errorMessage: action.payload
                //hey idiot learn how to spell
            }
        default:
            return state;
    }
}