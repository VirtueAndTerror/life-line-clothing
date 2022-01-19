import { connect, ConnectedProps } from 'react-redux';

import CustomButton from '../custom-button/CustomButton';

import { addItem } from '../../redux/cart/cart-actions';

import type { Item } from '../../pages/shop/ShopPage';
import type { AppDispatch } from '../../redux/store';

import './collection-item.scss';

interface CIProps extends PropsFromRedux {
  item: Item;
}

const CollectionItem = ({ item, addItem }: CIProps) => {
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
      <CustomButton onClick={() => addItem(item)} inverted>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

/* Redux & Typescript */
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  addItem: (item: Item) => dispatch(addItem(item)),
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(CollectionItem);
