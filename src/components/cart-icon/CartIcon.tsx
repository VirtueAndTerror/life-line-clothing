import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { toggleCartHidden } from '../../redux/cart/cart-actions';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.scss';
import { selectCartItemsCount } from '../../redux/cart/cart-selectors';

const CartIcon = () => {
  const itemCount = useAppSelector(selectCartItemsCount);
  const dispatch = useAppDispatch();
  return (
    <div className='cart-icon' onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  );
};

export default CartIcon;
