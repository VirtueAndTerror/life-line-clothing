import { connect, ConnectedProps } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart-actions';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.scss';
import { RootState } from '../../redux/store';
import { selectCartItemsCount } from '../../redux/cart/cart-selectors';

interface CIProps extends PropsFromRedux {}

const CartIcon = ({ toggleCartHidden, itemCount }: CIProps) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);

const mapStateToProps = (state: RootState) => ({
  /*  We pass the whole RootState into the selector,
  instead of destructuring it. */
  itemCount: selectCartItemsCount(state),
});

const connector = connect(mapStateToProps, { toggleCartHidden });

type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(CartIcon);
