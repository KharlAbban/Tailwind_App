import React, { useState } from 'react';
import MenuToggleIcon from "../assets/media/menuToggleIcon.svg";
import UserLogo from "../assets/media/fgblogo_icon-removebg-preview.png";
import { MdLogout } from "react-icons/md";
import { BsFiles } from "react-icons/bs";
import { RiProfileLine } from "react-icons/ri";
import SearchBar from './SearchBar';
import { Form } from 'react-router-dom';

const Navbar = ({toggleSidebar}) => {
    const [displaySubMenu, setdisplaySubMenu] = useState(false);

  return (
    <nav id='dashboardNav' className='fixed top-0 z-50 w-full bg-deepBlue border-gray-300 border-b'>
        <div className='py-1 px-3'>
            <div className='flex items-center justify-between py-1'>
                {/* Toggle icon and logo */}
                <div className='flex items-center justify-start'>
                    <button title='Open Sidebar Menu' onClick={toggleSidebar} type='button' className='hidden max-md:inline-flex items-center py-1 px-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200'>
                        <img src={MenuToggleIcon} width={25} height={25} alt="Toggle sidebar" />
                    </button>
                    <span className='flex justify-center items-center gap-2'>
                        <img src={UserLogo} alt="userLogo" height={30} width={30} />
                        <span className='text-white font-semibold text-xl self-center text-nowrap whitespace-nowrap'>ThisTeam</span>
                    </span>
                </div>

                {/* Searchbar that shows on large screens */}
                <SearchBar />

                {/* Show Quick Menu */}
                <div className='flex justify-center items-center'>
                <div className="relative inline-block text-left">
                    <div>
                        <button onClick={() => setdisplaySubMenu(!displaySubMenu)} type="button" className="flex justify-center items-center rounded-full px-1 py-1.5 ring-gray-600 hover:ring-gray-400 focus:ring-gray-300 ring-2 w-8 h-8">
                            <img src={UserLogo} className='w-full h-full' alt="" />
                        </button>
                    </div>
                    <div className={`${displaySubMenu ? '' : 'hidden'} absolute right-0 z-10 mt-2 w-60 origin-top-right rounded-md bg-white shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none`}>
                        <div className="py-1" role="none">
                        <a href="#" className="flex justify-start items-center gap-3 px-4 py-1 text-lg font-semibold hover:bg-blue-100">
                            <BsFiles />
                            My Tickets
                        </a>
                        <a href="#" className="flex justify-start items-center gap-2 px-4 py-1 text-lg font-semibold hover:bg-blue-100">
                            <RiProfileLine />
                            My Profile
                        </a>
                        <Form method='post' action='/home/logout'>
                            <button type="submit" className="flex gap-2 justify-start items-center text-red-600 w-full px-4 py-2 text-left text-md hover:bg-red-100" role="menuitem">
                                <MdLogout />
                                Sign out
                            </button>
                        </Form>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;