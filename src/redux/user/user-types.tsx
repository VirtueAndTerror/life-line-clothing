import { SetCurrentUserAction } from './user-actions';

export enum UserActionTypes {
  SET_CURRENT_USER = 'SET_CURRENT_USER',
}

export type UserAction = SetCurrentUserAction;
