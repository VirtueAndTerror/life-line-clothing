import * as React from 'react';

import { SHOP_DATA } from '../../lib/shop-data';

import CollectionPreview from '../../components/collection-preview/CollectionPreview';

export interface Collections {
  id: number;
  title: string;
  routeName: string;
  items: Item[];
}

export interface Item {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

interface ShopPageProps {}

interface ShopPageState {
  collections: Collections[];
}

class ShopPage extends React.Component<ShopPageProps, ShopPageState> {
  constructor(props: ShopPageProps) {
    super(props);
    this.state = { collections: SHOP_DATA };
  }
  render() {
    const { collections } = this.state;

    return (
      <div className='h-screen'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} id={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
