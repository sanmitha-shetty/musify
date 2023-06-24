import React, { useEffect } from 'react';

import { app } from '../config/firebase.config';
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth';

import {FcGoogle} from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

const Login = ({setAuth}) => {

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const navigate = useNavigate();

  const loginWithGoogle = async () => {
    await signInWithPopup(firebaseAuth, provider).then((userCred) => {
      if(userCred){
        setAuth(true);
        window.localStorage.setItem("auth", "true");

        firebaseAuth.onAuthStateChanged((userCred) =>{
         if(userCred){
          
          userCred.getIdToken().then((token) =>{
            console.log(token);
        })
          navigate("/" ,{replace:true})
         }
         else{
          setAuth(false);
          navigate("/login")

         }
      } )
      }
    })
  }

  useEffect(() => {
    if (window.localStorage.getItem("auth") === "true"){
      navigate("/", {replace : true})
    }
  }, [])

  return (
    <div className='relative w-screen h-screen'>
      <div className='absolute inset-0 bg-darkOverlay flex items-center justify-center p-4'>
        <div className='w-full md:w-375 p-4 bg-lightOverlay shadow-2xl rounded-md backdrop-blur-md flex flex-col justify-center'>
          <div className='flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-cardOverlay
          cursor-pointer hover:bg-card hover:shadow-md duration-100 ease-in-out transition-all'
          onClick={loginWithGoogle}
          >
            <FcGoogle  className='text-xl'/>
            Sign In with Google
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login