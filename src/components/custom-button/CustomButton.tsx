import './custom-button.scss';

interface CBProps {
  children: string;
  type?: 'submit' | 'reset' | 'button';
}

const CustomButton = ({ children, ...otherProps }: CBProps) => (
  // Now if we have a type='submit', the button will get that
  <button className='custom-button' {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
