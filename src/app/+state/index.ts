import { IAuthState } from "../shared/interfaces/auth-state-interface";
import { INotifyState } from "../shared/interfaces/notify-state-interface";

import { Store, Action, ActionReducer, combineReducers } from '@ngrx/store';
import { select, compose } from '@ngrx/core';
import { Page } from "./page";
import { authReducer } from './authReducers'
import { notifyReducer } from './notifyReducer'

export interface IAppState {
    readonly auth: IAuthState,
    readonly notify: INotifyState
}

// export const reducers: ActionReducerMap<IAppState> = {
//     auth: authReducer,
//     notify: notifyReducer
// }

export const reducers = {
    authReducer,
    notifyReducer
};

export const rootReducer = compose(combineReducers)(reducers)
export function reducer(state: any, action: any) {
    return rootReducer(state, action);
}