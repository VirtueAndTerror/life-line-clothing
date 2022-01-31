// @ts-nocheck
import { takeLatest, call, put } from 'redux-saga/effects';
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

export function* fetchCollectionsAsync(): Generator {
  yield console.log('I am fired');
  try {
    const collectionRef = collection(db, 'collections');

    const snapshot = getDocs(collectionRef);

    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (err: any) {
    yield put(fetchCollectionsFailure(err));
  }
}
export function* fetchCollectionsStart(): Generator {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
