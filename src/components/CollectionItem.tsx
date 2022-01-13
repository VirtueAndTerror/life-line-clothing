import { Item } from '../pages/ShopPage';

type CIProps = Item;

const CollectionItem = ({ id, name, price, imageUrl }: CIProps) => {
  return (
    <div className='w-[22%] flex flex-col h-350px item-center'>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className='w-full h-[95%] bg-cover bg-center mb-5'
      ></div>
      <div className='w-full h-[5%] flex justify-between'>
        <span className='w-[90%] mb-5'>{name}</span>
        <span className='w-[10%]'>{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
