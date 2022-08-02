import * as React from 'react';

/* Components */
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

/* Firebase */
import { signInWithEmailAndPassword } from 'firebase/auth';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

/* CSS */
import './sign-in.scss';
import { FirebaseError } from 'firebase/app';

interface SignInState {
  email: string;
  password: string;
  error: { msg: string } | null;
}

interface SignInProps {}

class SignIn extends React.Component<SignInProps, SignInState> {
  constructor(props: SignInProps) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: null,
    };
  }

  handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await signInWithEmailAndPassword(auth, email, password);

      this.setState({ email: '', password: '' });
    } catch (err: any) {
      const error: FirebaseError = err;
      const errorCode = error.code;

      switch (errorCode) {
        case 'auth/wrong-password':
          this.setState({
            email: '',
            password: '',
            error: { msg: 'Username & password do not match' },
          });
          break;
        case 'auth/user-not-found':
          this.setState({
            email: '',
            password: '',
            error: { msg: 'No user associated with this email' },
          });
          break;
        default:
          console.log(error);
      }
    }
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    // @ts-ignore
    this.setState({ [name]: value });
  };

  render() {
    const { error } = this.state;
    return (
      <div className='sign-in'>
        <h2 className='title'>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            label='Email'
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />

          <FormInput
            type='password'
            name='password'
            label='Password'
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />

          <div className='buttons'>
            <CustomButton type='submit'>Sign in</CustomButton>
            <CustomButton
              type='button'
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </div>
          <div className='errorMsg'>{error && <span>{error?.msg}</span>}</div>
        </form>
      </div>
    );
  }
}

export default SignIn;
