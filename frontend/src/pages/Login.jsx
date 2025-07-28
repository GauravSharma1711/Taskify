import React from 'react';
import { useState } from 'react';
import useAuthStore from '../store/authStore';
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';


const Login = () => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [errorMsg,setErrorMsg] = useState('');

  const {login,isLoggingIn} = useAuthStore();
  const navigate = useNavigate();

  const loginHandler  = async(e)=>{
       try {
        e.preventDefault();
      const res = await login({email,password});
      if(res){
        navigate('/dashboard');
      }

       } catch (error) {
          const message = error.message || 'Login failed';
          setErrorMsg(message);          
        console.log("error logging in",error.message);
       }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">
      <form 
       onSubmit={loginHandler}
      className="w-full max-w-sm p-8 bg-base-200 border border-slate-700 rounded-2xl shadow-lg flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-center text-slate-200">Login</h1>

        <input
          type="email"
          value={email}
          onChange={e=>setEmail(e.target.value)}
          placeholder="Email"
          className="input input-md input-bordered w-full rounded-lg border-base-200 text-white bg-base-800 placeholder-slate-400"
        />

        <input
          type="password"
          value={password}
          onChange={e=>setPassword(e.target.value)}
          placeholder="Password"
          className="input input-md input-bordered w-full rounded-lg border-base-200 text-white bg-base-800 placeholder-slate-400"
        />

        <button 
       type='submit'
         disabled={isLoggingIn}
        className="btn w-full bg-white text-black border border-[#e5e5e5] hover:bg-gray-100"
        >
         
         {
          isLoggingIn ?
           ( <span className="loading text-white loading-spinner loading-xs"></span> )

           :(
         
          <>
          <svg
            aria-label="Email icon"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="mr-2"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="black"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </g>
          </svg>
          Login with Email
          </>
           )}
          
        </button>
        
        {errorMsg && (
       <p className="text-red-500 text-sm text-center">{errorMsg}</p>
        )}

 <div className="text-center">
  <span className="text-white">
    Don't have an account?{' '}
    <Link className="text-gray-500 underline" to="/signup">
      Signup
    </Link>
  </span>
</div>



      </form>
    </div>
  );
};

export default Login;
