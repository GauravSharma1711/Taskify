import React from 'react';

const SignUp = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="flex flex-col gap-4 bg-base-200 border-2 border-base-100 rounded-2xl p-10 w-full max-w-md">
        <h1 className="text-3xl font-bold text-slate-300 text-center">Sign Up</h1>

        <input
          type="text"
          placeholder="Username"
          className="input input-md rounded-lg border border-base-100 bg-base-100 w-full input-neutral"
        />
        <input
          type="text"
          placeholder="Full Name"
          className="input input-md rounded-lg border border-base-100 bg-base-100 w-full input-neutral"
        />
        <input
          type="email"
          placeholder="Email"
          className="input input-md rounded-lg border border-base-100 bg-base-100 w-full input-neutral"
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-md rounded-lg border border-base-100 bg-base-100 w-full input-neutral"
        />

        <select
          defaultValue=""
          className="select w-full rounded-lg border border-base-100 bg-base-100 text-white focus:outline-none"
        >
          <option value="" disabled hidden>
            Role
          </option>
          <option value="Admin">Admin</option>
          <option value="Member">Member</option>
        </select>

        <button className="btn bg-white text-black border border-[#e5e5e5] w-full">
          Signup
        </button>
      </div>
    </div>
  );
};

export default SignUp;
