import React from 'react';
import MenuItem from './MenuItem';

const sections = [
  {
    title: 'hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    id: 1,
    linkUrl: 'shop/hats',
  },
  {
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    id: 2,
    linkUrl: 'shop/jackets',
  },
  {
    title: 'sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    id: 3,
    linkUrl: 'shop/sneakers',
  },
  {
    title: 'womens',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    size: 'large',
    id: 4,
    linkUrl: 'shop/womens',
  },
  {
    title: 'mens',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    size: 'large',
    id: 5,
    linkUrl: 'shop/mens',
  },
];

interface DirectoryProps {}

interface Item {
  title: string;
  imageUrl: string;
  size?: string;
  id: number;
  linkUrl: string;
}

interface DirectoryState {
  sections: Item[];
}

class Directory extends React.Component<DirectoryProps, DirectoryState> {
  constructor(props: DirectoryProps) {
    super(props);
    this.state = { sections };
  }
  render() {
    return (
      <div className='w-full h-[90%] flex flex-wrap justify-between'>
        {sections.map(({ id, size = '', ...sectionProps }) => (
          <MenuItem key={id} size={size} {...sectionProps} />
        ))}
      </div>
    );
  }
}

// imageUrl={imageUrl} title={title} size={size}

export default Directory;
