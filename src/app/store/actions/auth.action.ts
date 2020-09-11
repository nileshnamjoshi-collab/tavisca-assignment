import { Action } from '@ngrx/store';
import { Sport } from '../model/user';

export enum AuthActionTypes {
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_FAILURE = '[Auth] Login Failure',
  SIGNUP = '[Auth] Sighup',
  SIGNUP_SUCCESS = '[Auth] Sighup Success',
  SIGNUP_FAILURE = '[Auth] Sighup Failure',
  LOGOUT = '[Auth] Logout'
}

export const LIST_SPORTS = '[Sports] Fetch sport';
export const ADD_SPORTS = '[Sports] Add sport';
export const UPDATE_SPORTS = '[Sports] Update sport';
export const DELETE_SPORTS = '[Sports] Delete sport';
export const LIST_DATA_SUCCESS = '[Sports] List Success';
export const ADD_SPORTS_SUCCESS = '[Sports] Add sport success';
export const DELETE_SPORTS_SUCCESS = '[Sports] Delete sport success';
export const UPDATE_SPORTS_SUCCESS = '[Sports] Update sport success';

export class LogIn implements Action {
    readonly type = AuthActionTypes.LOGIN;
    constructor(public payload: any) {}
}

export class LogInSuccess implements Action {
    readonly type = AuthActionTypes.LOGIN_SUCCESS;
    constructor(public payload: any) {}
}

export class LogInFailure implements Action {
    readonly type = AuthActionTypes.LOGIN_FAILURE;
    constructor(public payload: any) {}
}

export class SignUp implements Action {
  readonly type = AuthActionTypes.SIGNUP;
  constructor(public payload: any) {}
}

export class SignUpSuccess implements Action {
  readonly type = AuthActionTypes.SIGNUP_SUCCESS;
  constructor(public payload: any) {}
}

export class SignUpFailure implements Action {
  readonly type = AuthActionTypes.SIGNUP_FAILURE;
  constructor(public payload: any) {}
}

export class LogOut implements Action {
  readonly type = AuthActionTypes.LOGOUT;
}

export class ListSports implements Action {
  readonly type = LIST_SPORTS;
}

export class ListDataSuccess implements Action {
  readonly type = LIST_DATA_SUCCESS;
  constructor(public payload: Sport[]) {}
}

export class AddSports implements Action {
  readonly type = ADD_SPORTS;
  constructor(public payload: Sport) {}
}

export class AddSportsSuccess implements Action {
  readonly type = ADD_SPORTS_SUCCESS;
  constructor(public payload: Sport) {}
}

export class UpdateSports implements Action {
  readonly type = UPDATE_SPORTS;
  constructor(public payload: Sport) {}
}

export class UpdateSportsSuccess implements Action {
  readonly type = UPDATE_SPORTS_SUCCESS;
  constructor(public payload: Sport) {}
}

export class DeleteSports implements Action {
  readonly type = DELETE_SPORTS;
  constructor(public payload: string) {}
}

export class DeleteSportSuccess implements Action {
  readonly type = DELETE_SPORTS_SUCCESS;
}

export type All =
    | LogIn
    | LogInSuccess
    | LogInFailure
    | SignUp
    | SignUpSuccess
    | SignUpFailure
    | LogOut
    | ListSports
    | ListDataSuccess
    | AddSports
    | AddSportsSuccess
    | UpdateSports
    | UpdateSportsSuccess
    | DeleteSports
    | DeleteSportSuccess;

