import { connect, ConnectedProps } from 'react-redux';

import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cart-item/CartItem';
import { selectCartItems } from '../../redux/cart/cart-selectors';

import type { RootState } from '../../redux/store';

import './cart-dropdown.scss';

interface CartProps extends PropsFormRedux {}

const Cart = ({ cartItems }: CartProps) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = (state: RootState) => ({
  cartItems: selectCartItems(state),
});

const connector = connect(mapStateToProps);

type PropsFormRedux = ConnectedProps<typeof connector>;

export default connector(Cart);
