import {ActionReducerMap, createFeatureSelector, MetaReducer} from "@ngrx/store";
import {environment} from "../../environments/environment";
import {routerReducer, RouterReducerState} from "@ngrx/router-store";
import {RouterStateUrl} from "./router/router.state";
import { debug } from './meta-reducers/debug.reducer';

import {initStateFromLocalStorage} from "./meta-reducers/init-state-from-local-storage.reducer";
import {AuthState} from "./store/auth/auth.models";
import {authReducer} from "./store/auth/auth.reducer";

export const reducers: ActionReducerMap<AppState> = {
    auth: authReducer,
  // settings: settingsReducer,
    router: routerReducer
};

export const metaReducers: MetaReducer<AppState>[] = [
   initStateFromLocalStorage
];

if (!environment.production) {
  if (!environment.test) {
     metaReducers.unshift(debug);
  }
}

export const selectAuthState = createFeatureSelector<AppState, AuthState>(
  'auth'
);

export const selectSettingsState = createFeatureSelector<
  AppState
  // SettingsState
>('settings');

export const selectRouterState = createFeatureSelector<
  AppState,
  RouterReducerState<RouterStateUrl>
>('router');

export interface AppState {
  auth: AuthState;
  // settings: SettingsState;
  router: RouterReducerState<RouterStateUrl>;
}
