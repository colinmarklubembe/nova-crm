"use client"
// pages/signup.tsx
import Image from 'next/image';
import Flow from '../ui/signup/signupflow';

export default function Signup() {

  const handleSignup = () => {
    // Handle the signup logic here
  };

  return (
    <div className="min-h-screen flex px-10 py-10 bg-gray-100">
      <Flow/>
      <div className="w-1/2 flex flex-col justify-center items-center p-8 bg-white  rounded-xl">
        <h2 className="text-2xl font-bold mb-6">Welcome to NovaCRM!</h2>
        <p className="mb-6">Best tool for business management</p>
        <button className="flex items-center justify-center w-full py-2 mb-6 border rounded">
          <Image src="/google.svg" alt="Google Icon" width={70} height={50} />
          <span className="ml-2">Sign up with Google</span>
        </button>
        <div className="w-full border-t mb-6"></div>
        <form className="w-full space-y-4">
          <div>
            <label className="block mb-1">Full Name</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              value={""}
              onChange={(e) => {}}
            />
          </div>
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              className="w-full border rounded px-3 py-2"
              value={""}
              onChange={(e) => {}}
            />
          </div>
          <div>
            <label className="block mb-1">Password</label>
            <input
              type="password"
              className="w-full border rounded px-3 py-2"
              value={""}
              onChange={(e) => {}}
            />
          </div>
          <div>
            <label className="block mb-1">Confirm Password</label>
            <input
              type="password"
              className="w-full border rounded px-3 py-2"
              value={""}
              onChange={(e) => {}}
            />
          </div>
          <button
            type="button"
            className="w-full py-3 bg-teal-500 text-white rounded"
            onClick={handleSignup}
          >
            Continue
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          By clicking on sign up, you agree to NovaCRM's{' '}
          <a href="/terms">
            <a className="underline">Terms of Service</a>
          </a>{' '}
          and{' '}
          <a href="/privacy">
            <a className="underline">Privacy Policy</a>
          </a>
        </p>
      </div>
    </div>
  );
}
