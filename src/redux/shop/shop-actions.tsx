import ShopActionTypes from './shop-types';

import {
  convertCollectionsSnapshotToMap,
  db,
} from '../../firebase/firebase.utils';
import { onSnapshot, collection } from 'firebase/firestore';
import { Dispatch } from 'redux';
import { AppThunk } from '../store';

export interface FetchCollectionsStartAction {
  type: ShopActionTypes.FETCH_COLLECTIONS_START;
}

export interface FetchCollectionsFailureAction {
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE;
  payload: string;
}

export interface FetchCollectionsSuccessAction {
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS;
  payload: any;
}

export const fetchCollectionsStart = (): FetchCollectionsStartAction => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (
  collectionsMap: any
): FetchCollectionsSuccessAction => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (
  errorMsg: string
): FetchCollectionsFailureAction => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMsg,
});

export const fetchCollectionsStartAsync = (): AppThunk => {
  return (dispatch: Dispatch) => {
    const collectionRef = collection(db, 'collections');
    dispatch(fetchCollectionsStart());

    onSnapshot(
      collectionRef,
      (snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      },
      (error) => dispatch(fetchCollectionsFailure(error.message))
    );
  };
};
