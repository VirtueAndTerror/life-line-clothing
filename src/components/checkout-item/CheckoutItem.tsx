import { connect, ConnectedProps } from 'react-redux';
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cart-actions';

import { Item } from '../../pages/shop/ShopPage';

import './checkout-item.scss';

interface ChIProps extends PropsFromFedux {
  cartItem: Item;
}

const CheckoutItem = ({
  cartItem,
  clearItemFromCart,
  removeItem,
  addItem,
}: ChIProps) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div
        className='remove-button'
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  clearItemFromCart,
  removeItem,
  addItem,
};

const connector = connect(null, mapDispatchToProps);

type PropsFromFedux = ConnectedProps<typeof connector>;

export default connector(CheckoutItem);
