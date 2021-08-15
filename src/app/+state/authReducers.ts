import { IAuthState } from '../shared/interfaces/auth-state-interface';
import { login, logout } from './authActions';

import { Store, Action, ActionReducer, combineReducers } from '@ngrx/store';
import { Page } from "./page";


export const initialState: IAuthState = {
    _id: '',
    username: '',
    picture: '',
    token: '',
}
export function authReducer(state: Page[], action: Action): Page[] {
    switch (action.type) {
        case "login":
            return login.payload;
        case "logout":
            return logout.payload;
        default:
            return state;
    }
}