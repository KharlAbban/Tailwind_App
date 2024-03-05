import React from 'react'
import { Form } from 'react-router-dom'

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
        <label className='text-lg mt-4' htmlFor="username">Password:</label>
        <input type="password" id="password" name='password' className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:bg-slate-50 block w-full ps-4 p-2" placeholder="Unique password" required />
      </Form>
    </>
  )
}

export default Login
