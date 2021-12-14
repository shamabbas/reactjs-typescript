import {Reducer} from 'redux';
import {AuthState} from '../../interfaces/redux/reducers/auth';
import {
  AuthActionTypes,
  LOGIN,
  LOGOUT,
} from '../../interfaces/redux/actions/auth';

const initialState: AuthState = {
  token: null,
  user_id: null,
  isLoggedIn: false,
};

const reducer: Reducer<AuthState, AuthActionTypes> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case LOGIN: {
      const {token, user_id} = action.payload;
      return {
        ...state,
        token,
        user_id,
        isLoggedIn: true,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        token: null,
        user_id: null,
        isLoggedIn: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
