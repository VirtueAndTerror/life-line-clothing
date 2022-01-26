import { createSelector } from 'reselect';
import type { RootState } from '../store';
import type { Collections } from '../../interfaces';

type Map = {
  [key: string]: Collections;
};

const selectShop = (state: RootState) => state.shop;

export const selectShopCollections = createSelector(
  selectShop,
  (shop) => shop.collections
);

export const selectCollection = (collectionUrlParam: string) =>
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
