import { User } from "../models/user";
import { combineReducers } from "redux";
import { loginReducer } from "./login-reducer";

export interface ILoginState {
    authUser: User;
    errorMessage: string;
}

export interface IState {
    login: ILoginState;
}

export const state = combineReducers<IState>({
    login: loginReducer
});
