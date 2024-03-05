import React from 'react'
import { Form, Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <h4 className='underline font-semibold text-3xl mb-2 tracking-wide leading-10'>
        LogIn
        <span className='lg:hidden'> to NOCTTApp</span>
      </h4>
      <Form className='flex flex-col max-w-xl'>
        <label className='text-lg' htmlFor="username">Username:</label>
        <input type="text" id="username" name='username' className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:bg-slate-50 block w-full ps-4 p-2" placeholder="Username here" required />
        <p className='text-red-700'>Some error message!</p>
        <label className='text-lg mt-2' htmlFor="password">Password:</label>
        <input type="password" id="password" name='password' className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:bg-slate-50 block w-full ps-4 p-2" placeholder="Unique password" required />
        <p className='text-red-700'>Some error message!</p>

        <button type="submit" className="w-full mt-5 inline-flex items-center justify-center py-2 px-3 text-base font-medium text-white bg-blue-700 rounded-md border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Log in
        </button>
      </Form>

      <p className='text-lg mt-4'>
        Lost your password?
        <Link to="" className='underline text-yellow-600 hover:text-yellow-400 duration-200'> Reset password</Link>
      </p>
      <p className='text-lg'>Don't have an account? <Link to="" className='underline text-blue-700 hover:text-blue-500 duration-200'>Register now!</Link></p>
    </>
  )
}

export default Login
