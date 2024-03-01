import React, { useState } from 'react';
import MenuToggleIcon from "../assets/media/menuToggleIcon.svg";
import UserLogo from "../assets/media/fgblogo_icon-removebg-preview.png";

const Navbar = ({toggleSidebar}) => {
    const [displaySubMenu, setdisplaySubMenu] = useState(false);

  return (
    <nav id='dashboardNav' className='fixed top-0 z-50 w-full bg-deepBlue border-gray-300 border-b'>
        <div className='p-3'>
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

                {/* Show Quick Menu */}
                <div className='flex justify-center items-center'>
                <div class="relative inline-block text-left">
                    <div>
                        <button onClick={() => setdisplaySubMenu(!displaySubMenu)} type="button" class="flex justify-center items-center rounded-full px-1 py-1.5 ring-gray-600 hover:ring-gray-400 focus:ring-gray-300 ring-2 w-8 h-8">
                            <img src={UserLogo} className='w-full h-full' alt="" />
                        </button>
                    </div>
                    <div class={`${displaySubMenu ? '' : 'hidden'} absolute right-0 z-10 mt-2 w-60 origin-top-right rounded-md bg-white shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none`}>
                        <div class="py-1" role="none">
                        <a href="#" class="block px-4 py-1 text-lg font-semibold hover:bg-blue-100">Account settings</a>
                        <a href="#" class="block px-4 py-1 text-lg font-semibold hover:bg-blue-100">Support</a>
                        <a href="#" class="block px-4 py-1 text-lg font-semibold hover:bg-blue-100">License</a>
                        <form>
                            <button type="submit" class="text-red-600 block w-full px-4 py-2 text-left text-md hover:bg-red-100" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
                        </form>
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