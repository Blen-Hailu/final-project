import React from "react";
import { useForm } from "react-hook-form";
import { addCooks } from "../query.js";
import { InputTextRequired } from "./InputTextRequired.jsx";
import { InputTextOptional } from "./InputTextOptional.jsx";

export default function CompleteRegistration () {
  const { handleSubmit, register } = useForm();
   const onSubmit = async (requestData) => {
    const responseData = await addCooks(requestData);
    console.log(requestData); 
    console.log(responseData); 
   }

    {/*redirected from initial signn-up page as popup window, with skip button to close*/} 
   return (
     <form action="POST" encType="multipart/form-data" autoComplete="on"
      onSubmit={handleSubmit(onSubmit)}>

      {/*Nick name*/} 
      <InputTextRequired register={register} title='Nick Name' query_variable='user_name'/>
      {/*First name*/} 
      <InputTextRequired register={register} title='First name' query_variable='user_name'/>
      {/*Sur name*/} 
      <InputTextRequired register={register} title='Sur name' query_variable='user_name'/>
     
     {/*ad_1_street*/} 
     <InputTextRequired register={register} title='StreetAddress' query_variable='user_name'/>
     {/*ad_2_apt optional */} 
     <InputTextOptional register={register} title='Room, Apt, Suite etc' query_variable='user_name'/>
     {/*ad_3_city*/} 
     <InputTextRequired register={register} title='City' query_variable='user_name'/>
     {/*ad_4_postcode*/} 
     <InputTextRequired register={register} title='Postal Code' query_variable='user_name'/>
     {/*ad_5_country -- paybe dropdown list? */} 
     <InputTextRequired register={register} title='Country' query_variable='user_name'/>  

     {/*activities*/} 
     <InputMultiple register={register} title='Country' query_variable='user_name' />
    
     {/*phone number*/}
     {/*bio text area*/}
     {/*phone number*/}

       {/*Submit button*/} 
      <button type="submit">SUBMIT</button>  
  
    </form>


  );
 }
