import { UserActionTypes, UserAction } from './user-types';
import type { CurrentUser } from '../../App';
import type { Reducer } from 'redux';

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
