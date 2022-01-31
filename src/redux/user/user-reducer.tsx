import { UserActionTypes, UserAction } from './user-types';
import type { Reducer } from 'redux';
import type { CurrentUser } from '../../interfaces';

export interface UserState {
  readonly currentUser: CurrentUser;
}

const INITAL_STATE: UserState = {
  currentUser: null,
};

const userReducer: Reducer<UserState, UserAction> = (
  state = INITAL_STATE,
  action
) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
