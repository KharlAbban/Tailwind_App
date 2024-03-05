import { MdDashboard } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { FaRegChartBar } from "react-icons/fa";
import { FaFile } from "react-icons/fa";
import UserLogo from "../assets/media/fgblogo_icon-removebg-preview.png";

const Sidebar = ({sidebarVisibility}) => {
  return (
    <aside id="dashboardSibebar" className={`fixed top-0 left-0 z-45 w-64 max-md:-translate-x-full md:translate-x-0 max-lg:w-16 transition-transform h-screen bg-deepBlue pt-20 ${sidebarVisibility ? 'max-md:transform-none max-md:w-64': ''}`}>
      <div className="h-full text-white">
      <ul className="space-y-2 font-medium">
         <li>
            <a href="#" className="flex gap-2 w-full items-center p-2 text-white hover:bg-blue-900">
               <MdDashboard className="text-3xl ml-2 text-gray-300" />
               <span className={`ms-3 lg:inline-block text-lg ${sidebarVisibility ? '' : 'hidden'}`}>Dashboard</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex gap-2 w-full items-center p-2 text-white hover:bg-blue-900">
               <FaFile className="text-3xl ml-2 text-gray-300" />
               <span className={`ms-3 lg:inline-block text-lg ${sidebarVisibility ? '' : 'hidden'}`}>Tickets</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex gap-2 w-full items-center p-2 text-white hover:bg-blue-900">
               <FaRegChartBar className="text-3xl ml-2 text-gray-300" />
               <span className={`ms-3 lg:inline-block text-lg ${sidebarVisibility ? '' : 'hidden'}`}>Statistics</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex gap-2 w-full items-center p-2 text-white hover:bg-blue-900">
               <IoSettings className="text-3xl ml-2 text-gray-300" />
               <span className={`ms-3 lg:inline-block text-lg ${sidebarVisibility ? '' : 'hidden'}`}>Settings</span>
            </a>
         </li>
      </ul>
      <div className="w-full absolute bottom-0 flex gap-2 items-center justify-center overflow-hidden h-12 border-t">
        <img src={UserLogo} height={40} width={40} alt="" />
        <span className="text-lg font-semibold max-lg:hidden">NOCTTAPP</span>
      </div>
      </div>
    </aside>
  )
}

export default Sidebar;