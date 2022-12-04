import GoogleButton from 'react-google-button';
import FreelancerRegsitrationForm from '../components/form2';
import {UserAuth} from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


export function SignIn(){
  const {googleSignIn, user} = UserAuth();
  const navigate= useNavigate()


const handleGoogleSignIn = async () => {
  try {
    await googleSignIn();
  }catch (error){
    console.log(error)
  }
  };

useEffect (()=>{
  if(user != null){
    navigate('/account')
  }
},[user])


  return(
    <>
    
    <h1 className='text-center text=3xl font-bold py-8'> Sign In </h1>
    <div className='max-w-[240px] m-auto py-4'>
      <GoogleButton onClick ={handleGoogleSignIn}/>
      <FreelancerRegsitrationForm/>
    </div>
  </>
  )
};