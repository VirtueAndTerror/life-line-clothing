import { useSelector } from 'react-redux';
import type { Collection } from '../../interfaces';

import { selectCollectionsForPreview } from '../../redux/shop/shop-selectors';

import CollectionPreview from '../collection-preview/CollectionPreview';

import './collections-overview.scss';

const CollectionsOverview = () => {
  const collections = useSelector(selectCollectionsForPreview);
  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} id={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
