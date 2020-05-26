import { User } from "../models/user";
import { combineReducers } from "redux";
import { loginReducer } from "./login-reducer";
import { registerReducer } from "./register-reducer";

export interface ILoginState {
    authUser: User;
    errorMessage: string;
}

export interface IRegisterState {
    newUser: User;
    errorMessage: string;
}

export interface IState {
    login: ILoginState;
    register: IRegisterState;
}

export const state = combineReducers<IState>({
    login: loginReducer,
    register: registerReducer
});