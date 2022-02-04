import { useSelector } from 'react-redux';

import { selectDirectorySections } from '../../redux/directory/directory-selectors';

import MenuItem from '../menu-item/MenuItem';

import './directory.scss';

export interface DirectoryItem {
  title: string;
  imageUrl: string;
  size?: string;
  id: number;
  linkUrl: string;
}

const Directory = () => {
  const sections = useSelector(selectDirectorySections);
  return (
    <div className='directory-menu'>
      {sections.map(({ id, size = '', ...sectionProps }) => (
        <MenuItem key={id} size={size} {...sectionProps} />
      ))}
    </div>
  );
};

export default Directory;
