import React from 'react'

const SignUp = () => {
  return (
      <div className='  text-white flex items-center justify-center' >
     
    <div className=' gap-4   border-2 rounded-2xl border-slate-500 flex flex-col p-16 mt-32 items-center justify-center  h-full' >

<h1  className=' font-bold text-slate-300 text-3xl'>Sign Up</h1>

<input type="text" placeholder="username" className="input input-md rounded-lg border-slate-500 w-64 input-neutral" />
<input type="text" placeholder="FullName" className="input input-md rounded-lg border-slate-500 w-64 input-neutral" />
    <input type="text" placeholder="Email" className="input input-md rounded-lg border-slate-500 w-64 input-neutral" />
     <input type="Password" placeholder="Password" className="input input-md rounded-lg border-slate-500  w-64 input-neutral" />

<select defaultValue="Role" className="select border-none focus:outline-none focus:ring-0">
  <option value="Role" disabled hidden>
    Role
  </option>
  <option>Admin</option>
  <option>Member</option>
</select>

<button className=' border-2 border-slate-500 rounded-md w-full p-2' >Signup</button>


    </div>
     

    </div>
  )
}

export default SignUp