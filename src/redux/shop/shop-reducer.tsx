import SHOP_DATA from './shop-data';
import ShopActionTypes, { ShopAction } from './shop-types';

export interface ShopState {
  readonly collections: typeof SHOP_DATA;
}

const INITIAL_STATE = {
  collections: SHOP_DATA,
};

const shopReducer = (state = INITIAL_STATE, action: ShopAction) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
