import { INotifyState } from '../shared/interfaces/notify-state-interface';
import { error, success } from './notifyActions';

export const initialState: INotifyState = {
    type: '',
    messages: [{message: ''}],
}

export function notifyReducer(state: Page[], action: Action): Page[] {
    switch (action.type) {
        case "error":
            return error.payload;
        case "success":
            return success.payload;
        default:
            return state;
    }
}