import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { UserContext } from "../utils/contexts/UserContext";
import Breadcrumb from "../components/Breadcrumb";
import { Outlet } from "react-router-dom";
import RouteHeading from "../components/RouteHeading";

const DashboardLayout = () => {
    // Get user info from localStorage
    const userInfo = JSON.parse(localStorage.getItem("user"));

    // States
    const [sidebarVisibility, setsidebarVisibility] = useState(false);

    // Local functions
    const toggleSidebar = () => {
        setsidebarVisibility(!sidebarVisibility);
    }
    const handleWindowResize = () => {
        if (window.innerWidth < 768) {
            setsidebarVisibility(false);
        }
    }

    // Effects
    useEffect(() => {
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, [])
    
  return (
    <div className="p-0 m-0 w-screen h-screen overflow-x-hidden">
        {/* Provide Context Here */}
        <UserContext.Provider value={userInfo}>
            <Navbar toggleSidebar={toggleSidebar}/>
            <Sidebar sidebarVisibility={sidebarVisibility} />

            <div className="p-1 border border-dashed border-gray-700 lg:ml-64 md:ml-16">
            <div className="px-2 mt-14">
                <Breadcrumb />
                <RouteHeading />
                <Outlet />
            </div>
            </div>
        </UserContext.Provider>
    </div>
  )
}

export default DashboardLayout
