import * as React from 'react';
import { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';

/* Components */
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

/* Redux Actions */
import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user-actions';

/* CSS */
import './sign-in.scss';

interface Credentials {
  email: string;
  password: string;
}

const SignIn = () => {
  const [credentials, setCredentials] = useState<Credentials>({
    email: '',
    password: '',
  });
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(emailSignInStart(credentials));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div className='sign-in'>
      <h2 className='title'>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type='email'
          name='email'
          label='Email'
          value={credentials.email}
          handleChange={handleChange}
          required
        />

        <FormInput
          type='password'
          name='password'
          label='Password'
          value={credentials.password}
          handleChange={handleChange}
          required
        />

        <div className='buttons'>
          <CustomButton type='submit'>Sign in</CustomButton>
          <CustomButton
            type='button'
            onClick={() => dispatch(googleSignInStart())}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </div>
        {/* <div className='errorMsg'>{errorMsg && <span>{errorMsg}</span>}</div> */}
      </form>
    </div>
  );
};

export default SignIn;
