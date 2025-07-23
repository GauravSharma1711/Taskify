import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">
      <div className="w-full max-w-sm p-8 bg-base-200 border border-slate-700 rounded-2xl shadow-lg flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-center text-slate-200">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="input input-md input-bordered w-full rounded-lg border-base-200 text-white bg-base-800 placeholder-slate-400"
        />

        <input
          type="password"
          placeholder="Password"
          className="input input-md input-bordered w-full rounded-lg border-base-200 text-white bg-base-800 placeholder-slate-400"
        />

        <button className="btn w-full bg-white text-black border border-[#e5e5e5] hover:bg-gray-100">
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
        </button>
      </div>
    </div>
  );
};

export default Login;
