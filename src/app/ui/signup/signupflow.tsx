import React from 'react'

function Flow() {
  return (
    <div className="w-1/2 flex flex-col justify-center items-center bg-gray-100 p-8">
    <div className="text-3xl font-bold mb-8">NovaCRM</div>
    <ul className="space-y-4">
      <li className="flex items-center">
        <span className="material-icons">account_circle</span>
        <span className="ml-2">Your Details</span>
      </li>
      <li className="flex items-center">
        <span className="material-icons">email</span>
        <span className="ml-2">Verify email</span>
      </li>
      <li className="flex items-center">
        <span className="material-icons">group</span>
        <span className="ml-2">Your workspace</span>
      </li>
      <li className="flex items-center">
        <span className="material-icons">flight_takeoff</span>
        <span className="ml-2">Welcome to NovaCRM</span>
      </li>
    </ul>
    <div className="flex mt-8 space-x-4">
      <a href="/">
        <a className="underline">Back to Home</a>
      </a>
      <a href="/signin">
        <a className="underline">Signin</a>
      </a>
    </div>
  </div>
  )
}

export default Flow


