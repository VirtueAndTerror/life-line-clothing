import { Item } from '../../pages/shop/ShopPage';

import './collection-item.scss';

type CIProps = Item;

const CollectionItem = ({ id, name, price, imageUrl }: CIProps) => {
  return (
    <div className='collection-item'>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className='image'
      ></div>
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
