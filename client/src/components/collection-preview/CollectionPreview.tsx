import { Link } from 'react-router-dom';
import CollectionItem from '../collection-item/CollectionItem';
import { Collection } from '../../interfaces';

import './collection-preview.scss';

interface CPProps extends Collection {}

const CollectionPreview = ({ title, items, routeName }: CPProps) => (
  <div className='collection-preview'>
    <Link to={`${routeName}`}>
      <h1 className='title'>{title.toUpperCase()}</h1>
    </Link>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
