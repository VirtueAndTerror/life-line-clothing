import { connect, ConnectedProps } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart-actions';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.scss';
import { AppDispatch, RootState } from '../../redux/store';

interface CIProps extends PropsFromRedux {}

const CartIcon = ({ toggleCartHidden, itemCount }: CIProps) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }: RootState) => ({
  itemCount: cartItems.reduce(
    (accQuantity, { quantity }) => accQuantity + (quantity ? quantity : 0),
    0
  ),
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(CartIcon);
