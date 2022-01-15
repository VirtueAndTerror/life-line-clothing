import * as React from 'react';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import './sign-up.scss';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

interface SUState {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface SUProps {}

class SignUp extends React.Component<SUProps, SUState> {
  constructor(props: SUProps) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (err) {
      console.error(err);
    }
  };
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    //@ts-ignore
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <form className='sign-up-form'>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            handleChange={this.handleChange}
            label='Display Name'
            required
          ></FormInput>
          <FormInput
            type='text'
            name='email'
            value={email}
            handleChange={this.handleChange}
            label='Email'
            required
          ></FormInput>
          <FormInput
            type='text'
            name='password'
            value={password}
            handleChange={this.handleChange}
            label='Password'
            required
          ></FormInput>
          <FormInput
            type='text'
            name='confirmPassword'
            value={confirmPassword}
            handleChange={this.handleChange}
            label='Confirm Password'
            required
          ></FormInput>

          <CustomButton type='submit' onClick={this.handleSubmit}>
            SIGN UP
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
