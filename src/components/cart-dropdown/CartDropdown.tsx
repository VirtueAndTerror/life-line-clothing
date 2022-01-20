import { connect, ConnectedProps } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cart-item/CartItem';

import { selectCartItems } from '../../redux/cart/cart-selectors';

import { toggleCartHidden } from '../../redux/cart/cart-actions';

import type { RootState } from '../../redux/store';

import './cart-dropdown.scss';

interface CartProps extends PropsFormRedux {}

const Cart = ({ cartItems, toggleCartHidden }: CartProps) => {
  const navigate = useNavigate();
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className='empty-msg'>Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          navigate('checkout');
          toggleCartHidden();
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  cartItems: selectCartItems(state),
});

const connector = connect(mapStateToProps, { toggleCartHidden });

type PropsFormRedux = ConnectedProps<typeof connector>;

export default connector(Cart);
