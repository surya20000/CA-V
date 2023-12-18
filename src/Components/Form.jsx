import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Form = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [Done, setDone] = useState(false);

  const submit = (data) => {
    console.log(data);
    setDone(true);
    confirm("Registration Successfull")
  };

  return (
    <form onSubmit={handleSubmit(submit)} className='bod'>
      {Done ?"" : ""}
      <div className='form-body i'>
        <h1 className='h'>Create Account</h1>
        <input type="text" placeholder='Name' {...register('Name', { required : "Please enter Name", minLength: { value: 3, message: "Name should be at least 3 characters" }, maxLength: { value: 30, message: "Name should not be more than 30 characters" }})} className='field i'/>
        {errors.Name && <span>{errors.Name.message}</span>}
        <input type="email" placeholder='email' {...register('email', { required : "Please enter email", pattern: {value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/, message: "Please enter a valid email"}})} className='field i'/>
        {errors.email && <span>{errors.email.message}</span>}
        <input type="password" placeholder='password' {...register('password', { required : "Please enter Password", minLength: { value: 10, message: "Password should be at least 10 characters long" }, pattern: { value: /.*[!@#$%^&*()\-_=+{};:,<.>]/, message: "Password should contain at least one special character" } })}  className='field i'/>
        {errors.password && <span>{errors.password.message}</span>}
        <input type="password" placeholder='Rpassword' {...register('Rpassword', { required : "Please re-enter your password", validate: value => value === watch('password') || "Passwords do not match" })} className='field i'/>
        {errors.Rpassword && <span>{errors.Rpassword.message}</span>}
        <button type="submit" className='sub'>Submit</button>
        <p>Have already an account? <Link to="/">Login here</Link></p>
      </div>
      {/* {console.log(data)} */}
    </form>
  );
}

export default Form;
