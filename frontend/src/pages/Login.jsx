import React from 'react'

const Login = () => {
  return (
    <div className='  text-white flex items-center justify-center' >
     
    <div className=' gap-4   border-2 rounded-2xl border-slate-500 flex flex-col p-16 mt-32 items-center justify-center  h-full' >

       <h1  className=' font-bold text-slate-300 text-3xl'>Login</h1>
         <input type="text" placeholder="Email" className="input input-md rounded-lg border-slate-500 w-64 input-neutral" />
          <input type="Password" placeholder="Password" className="input input-md rounded-lg border-slate-500  w-64 input-neutral" />
       <button className="btn bg-white text-black border-[#e5e5e5] w-64 ">
  <svg aria-label="Email icon" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="black"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
  Login with Email
</button>


    </div>
     

    </div>
  )
}

export default Login