import { Dispatch } from "redux";
import {
  checkTokenUserService,
  loginService,
  registrationService,
} from "src/services/users-service";
import { textErrorWhenLoading } from "src/helpers/constants";
import { localStorageTokenPair } from "src/helpers/localStorage";
import { FormValues } from "src/models/models";
import { UserAction, UserActionTypes } from "src/type/user";

export const loginUser = (data: FormValues | undefined) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const response = await loginService(data);

      if (response.message) {
        return response.message;
      }

      localStorageTokenPair.setItem({
        aToken: response.accessToken,
        rToken: response.refreshToken,
      });

      dispatch({
        type: UserActionTypes.FETCH_USERS_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: `${textErrorWhenLoading} пользователей`,
      });
      return "Что-то пошло не так";
    }
  };
};

export const checkTokenUser = (token: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const response = await checkTokenUserService(token);

      if (response.message) {
        localStorageTokenPair.clear();
        dispatch({
          type: UserActionTypes.CHECK_IS_AUTH_USER_ERROR,
        });
        return;
      }

      dispatch({
        type: UserActionTypes.CHECK_IS_AUTH_USER_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      return "Что-то пошло не так";
    }
  };
};

export const registrationUser = (data: FormValues | undefined) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.REGISTRATION_USERS });
      const response = await registrationService(data);

      dispatch({
        type: UserActionTypes.REGISTRATION_USERS_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: UserActionTypes.REGISTRATION_USERS_ERROR,
        payload: "Произошла ошибка при регистрации",
      });
      return "Что-то пошло не так";
    }
  };
};
