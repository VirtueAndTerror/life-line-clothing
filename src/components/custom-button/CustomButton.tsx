import { UserCredential } from 'firebase/auth';
import './custom-button.scss';

interface CBProps {
  children: string;
  type?: 'submit' | 'reset' | 'button';
  onClick?: (
    e: React.FormEvent | React.ChangeEvent
  ) => void | Promise<void> | Promise<UserCredential>;
  isGoogleSignIn?: boolean;
}

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }: CBProps) => (
  // Now if we have a type='submit', the button will get that
  <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
