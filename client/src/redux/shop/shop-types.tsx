import {
  FetchCollectionsStartAction,
  FetchCollectionsFailureAction,
  FetchCollectionsSuccessAction,
} from './shop-actions';

enum ShopActionTypes {
  FETCH_COLLECTIONS_START = 'FETCH_COLLECTIONS_START',
  FETCH_COLLECTIONS_FAILURE = 'FETCH_COLLECTIONS_FAILURE',
  FETCH_COLLECTIONS_SUCCESS = 'FETCH_COLLECTIONS_SUCCESS',
}

export type ShopAction =
  | FetchCollectionsStartAction
  | FetchCollectionsFailureAction
  | FetchCollectionsSuccessAction;
export default ShopActionTypes;
