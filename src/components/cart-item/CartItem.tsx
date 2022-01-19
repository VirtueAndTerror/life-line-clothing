import { Item } from '../../pages/shop/ShopPage';
import './cart-item.scss';

interface CIProps {
  item: Item;
}

const CartItem = ({ item: { imageUrl, price, name, quantity } }: CIProps) => (
  <div className='cart-item'>
    <img src={imageUrl} alt='item' />
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>
        {' '}
        {quantity} x {price}
      </span>
    </div>
  </div>
);

export default CartItem;
