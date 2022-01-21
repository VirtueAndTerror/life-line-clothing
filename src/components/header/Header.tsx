import { connect, ConnectedProps } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOutUser } from '../../firebase/firebase.utils';

import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { selectCurrentUser } from '../../redux/user/user-selector';

import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import type { CurrentUser } from '../../App';

import './header.scss';

interface HProps extends PropsFormRedux {
  currentUser: CurrentUser;
}

const Header = ({ currentUser, hidden }: HProps) => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <div className='option'>
          <Link to='/shop'>SHOP</Link>
        </div>
        <div className='option'>
          <Link to='/shop'>CONTACT</Link>
        </div>
        {currentUser ? (
          <div className='option' onClick={signOutUser}>
            <a href='/'>SIGN OUT</a>
          </div>
        ) : (
          <Link to='signIn'>SIGN IN</Link>
        )}
        <CartIcon />
      </div>
      {!hidden && <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  // With 'reselect'library we pass createStructuredSelector instead on a function that take the state.
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const connector = connect(mapStateToProps);

type PropsFormRedux = ConnectedProps<typeof connector>;

export default connector(Header);
