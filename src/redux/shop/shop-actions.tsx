import ShopActionTypes from './shop-types';

export interface UpdateCollectionAction {
  type: ShopActionTypes.UPDATE_COLLECTIONS;
  payload: any;
}

export const updateCollections = (collectionsMap: any) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
