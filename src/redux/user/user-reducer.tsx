import { UserActionTypes } from './user-types';
import type { Reducer } from 'redux';
import type { CurrentUser } from '../../interfaces';

export interface UserState {
  readonly currentUser: CurrentUser;
  readonly error: null;
}

const INITAL_STATE: UserState = {
  currentUser: null,
  error: null,
};

const userReducer: Reducer<UserState> = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
