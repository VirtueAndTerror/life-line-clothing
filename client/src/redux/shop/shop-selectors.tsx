import { createSelector, Selector } from 'reselect';
import type { RootState } from '../store';
import type { Collection } from '../../interfaces';
import type { ShopState } from './shop-reducer';

type Map = {
  [key: string]: Collection;
};

const selectShop: Selector<RootState, ShopState> = (state) => state.shop;

export const selectShopCollections = createSelector(
  selectShop,
  (shop) => shop.collections
);

export const selectCollection = (collectionUrlParam: string) =>
  //@ts-ignore
  createSelector(selectShopCollections, (collections: Map) =>
    collections ? collections[collectionUrlParam] : null
  );

export const selectCollectionsForPreview = createSelector(
  selectShopCollections,
  (collections) =>
    //@ts-ignore
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectIsCollectionFetching = createSelector(
  selectShop,
  (shop) => shop.isFetching
);
