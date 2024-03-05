import React from 'react';
import { Login } from '../components';

const IndexLayout = () => {
  return (
    <div className='w-screen h-screen flex flex-col m-0 p-0 overflow-hidden'>
        <div className='h-3/4 flex bg-gray-200 items-center max-sm:h-full'>
            <div className="w-1/2 flex flex-col gap-5 pl-4 xl:pl-10 max-lg:hidden">
                <h1 className='lg:text-5xl xl:text-6xl font-bold max-w-2xl'>The only Ticket Management System You Need</h1>
                <h3 className='text-xl max-w-4xl'>
                    <span className='italic'>NOCTTApp</span> has been designed with 
                    <span className='font-bold'> you and your team</span> in mind.
                    Make trouble ticketing easy - because it is!
                </h3>
                <h3 className='text-xl font-bold italic'>Login to continue_</h3>
            </div>
            <div className='w-1/2 pl-20 max-lg:w-full'>
                <Login />
            </div>
        </div>

        <div className='h-1/4 flex p-0 max-sm:hidden'>
            <div className="w-1/2 bg-blue-600 h-full">
            </div>
            <div className='bg-white pl-4 pt-2'>
                <h2 className='font-bold text-3xl mb-3'>As simple as ABC</h2>
                <p className='text-xl'>Sign Up</p>
                <p className='text-xl'>Create or join a team</p>
                <p className='text-xl'>Start Ticketing!</p>
            </div>
        </div>
    </div>
  )
}

export default IndexLayout;
