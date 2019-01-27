import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '../../environments/environment';
import { AppState, reducer } from './app.state';

export function logger(_reducer: ActionReducer<AppState>): ActionReducer<AppState> {
    return function (state: AppState, action: any): AppState {
        console.log('%cstate', `background-color: purple; color: white`, state);
        console.log('%caction', `background-color: #930393; color: white`, action);

        return _reducer(state, action);
    };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [logger] : [];

export const reducers: ActionReducerMap<AppState> = {
    state: reducer
};

