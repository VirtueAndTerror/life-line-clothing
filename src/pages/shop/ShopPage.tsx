import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { createStructuredSelector } from 'reselect';

/* Redux & Redux-Thunk */
import { fetchCollectionsStartAsync } from '../../redux/shop/shop-actions';
import { selectIsCollectionFetching } from '../../redux/shop/shop-selectors';
import type { ThunkDispatch } from 'redux-thunk';
import type { RootState } from '../../redux/store';
import type { ShopAction } from '../../redux/shop/shop-types';

/* Components */
import Spinner from '../../components/spinner/Spinner';

interface SPProps extends PropsFromRedux {}

const ShopPage = (props: SPProps) => {
  const { isCollectionFetching, fetchCollectionsStartAsync } = props;

  useEffect(() => {
    // The data fetching logic was extracted to redux-thunk.
    fetchCollectionsStartAsync();
  }, [fetchCollectionsStartAsync]);

  return (
    <div className='shop-page'>
      {isCollectionFetching ? <Spinner /> : <Outlet />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
});

/* Redux w/Typescript */
const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, undefined, ShopAction>
) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(ShopPage);
