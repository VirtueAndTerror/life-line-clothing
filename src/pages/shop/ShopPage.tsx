import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { selectIsCollectionFetching } from '../../redux/shop/shop-selectors';
import { fetchCollectionsStart } from '../../redux/shop/shop-actions';

/* Components */
import Spinner from '../../components/spinner/Spinner';

const ShopPage = () => {
  const isCollectionFetching = useAppSelector(selectIsCollectionFetching);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // The data fetching logic was extracted to redux-saga.
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <div className='shop-page'>
      {isCollectionFetching ? <Spinner /> : <Outlet />}
    </div>
  );
};

export default ShopPage;
