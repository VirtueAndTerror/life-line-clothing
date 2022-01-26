import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { collection, onSnapshot } from 'firebase/firestore';
import {
  db,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop-actions';
import { AppDispatch } from '../../redux/store';

import Spinner from '../../components/spinner/Spinner';

interface SPProps extends PropsFromRedux {}

const ShopPage = ({ updateCollections }: SPProps) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const collectionRef = collection(db, 'collections');
    let unsusbscribe = onSnapshot(collectionRef, (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      setIsLoading(false);
    });

    return () => unsusbscribe();
  }, [updateCollections]);

  return (
    <div className='shop-page'>{isLoading ? <Spinner /> : <Outlet />}</div>
  );
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  updateCollections: (collectionsMap: any) =>
    dispatch(updateCollections(collectionsMap)),
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(ShopPage);
