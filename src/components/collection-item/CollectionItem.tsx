import { useDispatch } from 'react-redux';

import CustomButton from '../custom-button/CustomButton';

import { addItem } from '../../redux/cart/cart-actions';

import type { Item } from '../../interfaces';

import './collection-item.scss';

interface CIProps {
  item: Item;
}

const CollectionItem = ({ item }: CIProps) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = item;
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
      <CustomButton onClick={() => dispatch(addItem(item))} inverted>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
