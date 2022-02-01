import { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { signUpStart } from '../../redux/user/user-actions';

import './sign-up.scss';

const SignUp = () => {
  const dispatch = useAppDispatch();
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    dispatch(signUpStart({ displayName, email, password }));
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have an account</h2>
      <form className='sign-up-form'>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          handleChange={handleChange}
          label='Display Name'
          required
        ></FormInput>
        <FormInput
          type='text'
          name='email'
          value={email}
          handleChange={handleChange}
          label='Email'
          required
        ></FormInput>
        <FormInput
          type='text'
          name='password'
          value={password}
          handleChange={handleChange}
          label='Password'
          required
        ></FormInput>
        <FormInput
          type='text'
          name='confirmPassword'
          value={confirmPassword}
          handleChange={handleChange}
          label='Confirm Password'
          required
        ></FormInput>

        <CustomButton type='submit' onClick={handleSubmit}>
          SIGN UP
        </CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
