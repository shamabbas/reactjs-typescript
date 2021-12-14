import {
  AuthActionTypes,
  LOGIN,
  LOGOUT,
} from "../../interfaces/redux/actions/auth";

export const login = (token: string, user_id: string): AuthActionTypes => {
  return {
    type: LOGIN,
    payload: {
      token,
      user_id,
    },
  };
};

export const logout = (): AuthActionTypes => {
  return {
    type: LOGOUT,
    payload: {
      token: null,
      user_id: null,
      isLoggedIn: false,
    },
  };
};
