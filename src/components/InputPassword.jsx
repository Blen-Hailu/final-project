
import React from "react";
import { useForm } from 'react-hook-form';


export const Password =({ register }) => { 
   
return ( 
<>
 <label>Password</label>
  <input
   name='password'
   id="password"
   type= 'password'
   autoComplete='off'
   className={`form-control ${errors.password && "invalid"}`}
   required={true}
   {...register("password", {
   required: "You must specify a password",
   pattern: {
   value: '^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){    1,})(?!.*\s).{8,}$',
   message: "Password should contain at least one number and one    special character"
   },
  minLength: {
  value: 8,
  message: "Password must be more than 8 characters"
  },
  maxLength: {
  value: 20,
  message: "Password must be less than 20 characters"
  },
  })}
  onKeyUp={() => {trigger("password")}}
  error={Boolean(errors.password)}
>

</input>
  {errors.password && (
  <small>{errors.password.message}</small>
  )}

<label>Confirm password</label>
        <input
           id="confirmPassword"
           name="confirmPassword"
           type='password'
           {...register( 'confirmPassword', {
           validate: value =>
           value === watch("password", "") || "The passwords do not match"
           })}
           autoComplete='off'
           onPaste={(e) =>{
           e.preventDefault();
           return false
           }}
           error={Boolean(errors.confirmPassword)}
           className={`form-control ${errors.confirmPassword && "invalid"}`}
           required={true}
           onKeyUp={() => {trigger("confirmPassowrd")}}
         />
           {errors.confirmPassword && (
           <small className="text-danger">{errors.confirmPassword.message}    </small>
 )}
 </>
)}
