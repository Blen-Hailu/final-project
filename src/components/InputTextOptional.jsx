import React from "react";
import { useForm } from 'react-hook-form';


export const InputTextOptional =({ title, query_variable, register }) => {
  const { formState: {errors} } = useForm();
  const onChange = (data) => console.log(data);
   return (
      <>
       <label>{title}</label>
         <input
         {...register(`${query_variable}`,
          {required: false,
           maxLength: 20,
           message: 'Required field',
           mode: onChange
          })}
          id={title}
          placeholder={title}
         />
          {errors?.name && errors.name.message}
      </>
  )};