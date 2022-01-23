import { connect, ConnectedProps } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory-selectors';

import MenuItem from '../menu-item/MenuItem';

import './directory.scss';

interface DirProps extends PropsFromRedux {}

export interface DirectoryItem {
  title: string;
  imageUrl: string;
  size?: string;
  id: number;
  linkUrl: string;
}

const Directory = ({ sections }: DirProps) => {
  return (
    <div className='directory-menu'>
      {sections.map(({ id, size = '', ...sectionProps }) => (
        <MenuItem key={id} size={size} {...sectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Directory);
