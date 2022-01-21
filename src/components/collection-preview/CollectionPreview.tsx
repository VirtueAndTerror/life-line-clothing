import CollectionItem from '../collection-item/CollectionItem';
import { Collections } from '../../interfaces';

import './collection-preview.scss';

interface CPProps extends Collections {}

const CollectionPreview = ({ title, items }: CPProps) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
