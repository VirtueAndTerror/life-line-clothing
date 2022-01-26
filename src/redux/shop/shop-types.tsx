import { UpdateCollectionAction } from './shop-actions';

enum ShopActionTypes {
  UPDATE_COLLECTIONS = 'UPDATE_COLLECTIONS',
}

export type ShopAction = UpdateCollectionAction;
export default ShopActionTypes;
