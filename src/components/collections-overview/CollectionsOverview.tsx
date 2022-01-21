import { connect, ConnectedProps } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import type { Collections } from '../../interfaces';

import { selectCollectionsForPreview } from '../../redux/shop/shop-selectors';

import CollectionPreview from '../collection-preview/CollectionPreview';

import './collections-overvies.scss';

interface COProps extends PropsFromRedux {
  collections: Collections[];
}

const CollectionsOverview = ({ collections }: COProps) => (
  <div className='collections-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} id={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(CollectionsOverview);
