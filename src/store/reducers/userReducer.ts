import { UserAction, UserActionTypes, UserState } from "src/type/user";

const localStorageTokenPair = localStorage.getItem("localStorageTokenPair");
const isAuth = localStorageTokenPair
  ? !!JSON.parse(localStorageTokenPair)
  : false;

const initialState: UserState = {
  users: [],
  isAuth,
  error: null,
};

export const userReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return {
        isAuth,
        error: null,
        users: [],
      };
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return {
        isAuth: action.payload.accessToken ? true : false,
        error: null,
        users: action.payload.user,
      };
    case UserActionTypes.FETCH_USERS_ERROR:
      return {
        isAuth: false,
        error: action.payload,
        users: [],
      };
    case UserActionTypes.CHECK_IS_AUTH_USER_SUCCESS:
      return {
        isAuth: true,
        error: null,
        users: action.payload,
      };
    case UserActionTypes.CHECK_IS_AUTH_USER_ERROR:
      return {
        isAuth: false,
        error: null,
        users: [],
      };
    case UserActionTypes.REGISTRATION_USERS:
      return {
        isAuth,
        error: null,
        users: [],
      };
    case UserActionTypes.REGISTRATION_USERS_SUCCESS:
      return {
        isAuth: false,
        error: null,
        users: action.payload.user,
      };
    case UserActionTypes.REGISTRATION_USERS_ERROR:
      return {
        isAuth: false,
        error: action.payload,
        users: [],
      };
    default:
      return state;
  }
};
