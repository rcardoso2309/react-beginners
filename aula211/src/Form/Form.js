import React from 'react'
import Button from './Button'
import Input from './Input'

const Form = () => {
  return (
    <div>
      <Input id= "email" label="email" required />
      <Input id = "password" type="password" label="password"/>
      <Button/>
    </div>
  );
};

export default Form;
