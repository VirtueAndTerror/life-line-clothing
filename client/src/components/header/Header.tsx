import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { Link, Outlet } from 'react-router-dom';

import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { selectCurrentUser } from '../../redux/user/user-selector';
import { signOutStart } from '../../redux/user/user-actions';

import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

import { ReactComponent as Logo } from '../../assets/life-line.svg';

import './header.scss';

const Header = () => {
  const currentUser = useAppSelector(selectCurrentUser);
  const hidden = useAppSelector(selectCartHidden);
  const dispatch = useAppDispatch();

  return (
    <>
      <div className='header'>
        <Link className='logo-container' to='/'>
          <Logo className='logo' />
        </Link>
        <h1 className='header__title'>LIFE LINE Outlets</h1>
        <div className='options'>
          <div className='option'>
            <Link to='/shop'>SHOP</Link>
          </div>
          <div className='option'>
            <Link to='/shop'>CONTACT</Link>
          </div>
          {currentUser ? (
            <div className='option' onClick={() => dispatch(signOutStart())}>
              <Link to='/'>SIGN OUT</Link>
            </div>
          ) : (
            <div className='option'>
              <Link to='signIn'>SIGN IN</Link>
            </div>
          )}
          <CartIcon />
        </div>
        {!hidden && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Header;
