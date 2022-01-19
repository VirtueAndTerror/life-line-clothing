import CustomButton from '../custom-button/CustomButton';
import './cart-dropdown.scss';

const Cart = () => (
  <div className='cart-dropdown'>
    <div className='cart-items'></div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default Cart;
