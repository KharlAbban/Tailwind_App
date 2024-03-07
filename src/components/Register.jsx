import React from 'react'
import { FaSpinner } from 'react-icons/fa';
import { Form, Link, useActionData, useNavigation } from 'react-router-dom'
import { HashLoader } from 'react-spinners';

const Register = () => {
  const registrationErrors = useActionData();
  const navigation = useNavigation();

  return (
    <>
      <h4 className='underline font-semibold text-3xl mb-2 tracking-wide leading-10'>
        Register
        <span className='lg:hidden'> for NOCTTApp</span>
      </h4>
      <Form method='post' className='flex flex-col max-w-xl'>
        <label className='text-lg' htmlFor="email">Email Address:</label>
        <input type="email" id="email" name='email' className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:bg-slate-50 block w-full ps-4 p-2" placeholder="somemail@provider.com" required />
        {registrationErrors?.emailMsg && <p className='text-red-700'>{registrationErrors.emailMsg}</p>}
        <label className='text-lg mt-2' htmlFor="username">Username:</label>
        <input type="text" id="username" name='username' className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:bg-slate-50 block w-full ps-4 p-2" placeholder="Unique username" required />
        {registrationErrors?.userNameMsg && <p className='text-red-700'>{registrationErrors.userNameMsg}</p>}
        <label className='text-lg mt-2' htmlFor="password">Password:</label>
        <input type="password" id="password" name='password' className="border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:bg-slate-50 block w-full ps-4 p-2" placeholder="Special password" required />
        

        <button type="submit" className="w-full mt-5 inline-flex items-center justify-center py-2 px-3 text-base font-medium text-white bg-blue-800 rounded-md border border-blue-700 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300">
          {navigation.state == "submitting" && <HashLoader color='white' size={25} className='mr-3' />}
          {navigation.state == "submitting" ? "Submitting" : "Sign Up"}
        </button>
        {registrationErrors?.message && <p className='text-red-700'>{registrationErrors.message}</p>}
      </Form>

      <p className='text-lg mt-2'>Already own an account? <Link to="/" className='underline text-blue-700 hover:text-blue-500 duration-200'>Login here!</Link></p>
    </>
  )
}

export default Register
