import { useNavigate } from 'react-router-dom';

interface MIProps {
  title: string;
  imageUrl: string;
  size: string;
  linkUrl: string;
}

const MenuItem = ({ title, imageUrl, size, linkUrl }: MIProps) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/${linkUrl}`)}
      className='flex flex-auto items-center justify-center min-w-[30%] h-240px overflow-hidden border-1 border-solid border-black mt-1 mx-4 mb-5 border-2 border-black border-solid cursor-pointer'
    >
      <div
        className='w-full h-full bg-cover bg-center transition duration-600 hover:scale-110 hover:ease-in'
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div
        className={`${
          size ? 'h-380px' : 'h-90px'
        } py-1 px-3 flex flex-col items-center justify-center border-2 border-black border-solid bg-white opacity-70 absolute hover:opacity-90`}
      >
        <h1 className='text-semibold text-lg my-0 '>
          {title.toLocaleUpperCase()}
        </h1>
        <span className='text-sm'>SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
