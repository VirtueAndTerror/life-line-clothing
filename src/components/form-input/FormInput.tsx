import { ChangeEvent } from 'react';

import './form-input.scss';

interface FIProps {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  label?: string;
  type: string;
  value: string;
  required: boolean;
}

const FormInput = ({ handleChange, label, ...otherProps }: FIProps) => {
  return (
    <div className='group'>
      <input className='form-input' onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
