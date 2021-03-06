import { connect, ConnectedProps } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import StripeCheckoutButton from '../../components/stripe-button/StripeButton';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart-selectors';

import './checkout.scss';

interface ChPProps extends PropsFromRedux {}

const CheckoutPage = ({ cartItems, total }: ChPProps) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className='total'>TOTAL ${total}</div>
    <div className='test-warning'>
      *Please use the following test credit card for payment*
      <br />
      4242 4242 4242 4242 - Exp: 01/30 - CVV: 123
    </div>
    <div className='button'>
      <StripeCheckoutButton price={total} />
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(CheckoutPage);
