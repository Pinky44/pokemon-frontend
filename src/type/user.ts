export type UserAction =
  | FetchUsersAction
  | FetchUsersSuccessAction
  | FetchUsersErrorAction
  | CheckIsAuthUserSuccessAction
  | CheckIsAuthUserErrorAction
  | RegistrationUsersAction
  | RegistrationUsersSuccessAction
  | RegistrationUsersErrorAction;

export interface UserState {
  users: User[];
  isAuth: boolean;
  error: null | string;
}

export interface User {
  login: string;
  id: string;
}

export enum UserActionTypes {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
  CHECK_IS_AUTH_USER_SUCCESS = "CHECK_IS_AUTH_USER_SUCCESS",
  CHECK_IS_AUTH_USER_ERROR = "CHECK_IS_AUTH_USER_ERROR",

  REGISTRATION_USERS = "REGISTRATION_USERS",
  REGISTRATION_USERS_SUCCESS = "REGISTRATION_USERS_SUCCESS",
  REGISTRATION_USERS_ERROR = "REGISTRATION_USERS_ERROR",
}

interface FetchUsersAction {
  type: UserActionTypes.FETCH_USERS;
}

interface FetchUsersSuccessAction {
  type: UserActionTypes.FETCH_USERS_SUCCESS;
  payload: {
    accessToken: string;
    user: User[];
  };
}

interface FetchUsersErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

interface CheckIsAuthUserSuccessAction {
  type: UserActionTypes.CHECK_IS_AUTH_USER_SUCCESS;
  payload: User[];
}

interface CheckIsAuthUserErrorAction {
  type: UserActionTypes.CHECK_IS_AUTH_USER_ERROR;
}

interface RegistrationUsersAction {
  type: UserActionTypes.REGISTRATION_USERS;
}

interface RegistrationUsersSuccessAction {
  type: UserActionTypes.REGISTRATION_USERS_SUCCESS;
  payload: {
    accessToken: string;
    user: User[];
  };
}

interface RegistrationUsersErrorAction {
  type: UserActionTypes.REGISTRATION_USERS_ERROR;
  payload: string;
}
