import { signOutUser } from '../../firebase/firebase.utils';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import type { CurrentUser } from '../../App';

import './header.scss';

interface HProps {
  currentUser: CurrentUser | null;
}

const Header = ({ currentUser }: HProps) => {
  console.log({ 'Header-currentUser': currentUser });
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
            SIGN OUT
          </div>
        ) : (
          <Link to='/signIn'>SIGN IN</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
