import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='w-full h-[70px] flex justify-between mb-2'>
      <Link className='h-full w-[70px] p-[25px]' to='/'>
        <h1>Logo</h1>
      </Link>
      <div className='w-1/3 h-full flex items-center justify-end'>
        <div className='py-1 px-2'>
          <Link to='/shop'>SHOP</Link>
        </div>
        <div className='py-1 px-2'>
          <Link to='/shop'>CONTACT</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
