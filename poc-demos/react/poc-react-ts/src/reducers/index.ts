import { User } from "../models/user";
import { combineReducers } from "redux";
import { loginReducer } from "./login-reducer";

export interface ILoginState {
    authUser: User;
    errorMessage: string;
}

//here you would add more interfaces, and wrap them into IState

export interface IState {
    login: ILoginState;
}

export const state = combineReducers<IState>({
    login: loginReducer
});