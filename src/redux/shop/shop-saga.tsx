// @ts-nocheck
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { collection, getDocs } from 'firebase/firestore';
import {
  convertCollectionsSnapshotToMap,
  db,
} from '../../firebase/firebase.utils';

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from './shop-actions';

import ShopActionTypes from './shop-types';

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = yield collection(db, 'collections');

    const snapshot = yield getDocs(collectionRef);

    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (err: any) {
    yield put(fetchCollectionsFailure(err));
  }
}
export function* onFetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(onFetchCollectionsStart)]);
}
