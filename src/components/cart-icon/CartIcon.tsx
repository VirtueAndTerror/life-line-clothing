import { connect, ConnectedProps } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart-actions';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.scss';
import { AppDispatch } from '../../redux/store';

interface CIProps extends PropsFromRedux {}

const CartIcon = ({ toggleCartHidden }: CIProps) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>0</span>
  </div>
);

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(CartIcon);
