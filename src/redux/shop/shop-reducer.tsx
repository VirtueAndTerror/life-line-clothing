import SHOP_DATA from './shop-data';
import ShopActionTypes, { ShopAction } from './shop-types';
import type { Reducer } from 'redux';

export interface ShopState {
  readonly collections: typeof SHOP_DATA;
  readonly isFetching: boolean;
  readonly errorMsg: string;
}

const INITIAL_STATE = {
  collections: SHOP_DATA,
  isFetching: false,
  errorMsg: '',
};

const shopReducer: Reducer<ShopState, ShopAction> = (
  state = INITIAL_STATE,
  action: ShopAction
) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        isFetching: false,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
