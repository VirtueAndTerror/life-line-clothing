import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop-saga';
import { selectIsCollectionFetching } from '../../redux/shop/shop-selectors';

import type { AppDispatch } from '../../redux/store';

/* Components */
import Spinner from '../../components/spinner/Spinner';

const ShopPage = () => {
  const isCollectionFetching = useSelector(selectIsCollectionFetching);

  useEffect(() => {
    // The data fetching logic was extracted to redux-saga.
    fetchCollectionsStart();
  }, []);

  return (
    <div className='shop-page'>
      {isCollectionFetching ? <Spinner /> : <Outlet />}
    </div>
  );
};

/* Redux w/Typescript */
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  // @ts-ignore
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

const connector = connect(null, mapDispatchToProps);

export default connector(ShopPage);
