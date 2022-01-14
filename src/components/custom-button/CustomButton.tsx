import './custom-buttom.styles.scss';

interface CBProps {
  children: React.ReactChildren;
}

const CustomButton = ({ children, ...otherProps }: CBProps) => (
  <button className='custom-button' {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
