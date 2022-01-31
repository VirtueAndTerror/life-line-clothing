import type { CurrentUser } from '../../interfaces';
import { UserActionTypes } from './user-types';

export interface SetCurrentUserAction {
  type: UserActionTypes.SET_CURRENT_USER;
  payload: CurrentUser;
}

export const setCurrentUser = (user: CurrentUser): SetCurrentUserAction => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
