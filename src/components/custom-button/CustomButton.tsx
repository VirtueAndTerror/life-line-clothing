import './custom-button.scss';

interface CBProps {
  children: string;
  type?: 'submit' | 'reset' | 'button';
  onClick?: (e: React.FormEvent | React.ChangeEvent) => any;
  isGoogleSignIn?: boolean;
  inverted?: boolean;
}

/* 
default style

inverted style

google sign in style
*/

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}: CBProps) => (
  // Now if we have a type='submit', the button will get that
  <button
    className={`${inverted ? 'inverted' : ''}${
      isGoogleSignIn ? 'google-sign-in' : ''
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
