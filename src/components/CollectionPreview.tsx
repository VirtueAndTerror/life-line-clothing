import CollectionItem from './CollectionItem';
import { Collections, Item } from '../pages/ShopPage';

interface CPrevProps {
  title: string;
  items: Item[];
}

const CollectionPreview = ({ title, items }: CPrevProps) => {
  return (
    <div className='flex  flex-col mb-[30px]'>
      <h1 className='mb-[25px] text-2xl'>{title.toUpperCase()}</h1>
      <div className='flex justify-between h-[500px]'>
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...itemProps }) => (
            <CollectionItem key={id} id={id} {...itemProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
