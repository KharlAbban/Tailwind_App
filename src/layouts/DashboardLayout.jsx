import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SampleContent from "../components/SampleContent";
import { UserContext } from "../utils/contexts/UserContext";
import Breadcrumb from "../components/Breadcrumb";

const DashboardLayout = () => {
    // Mmiscallenous actions
    const userInfo = localStorage.getItem("userInfo") || "Staff";

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
        <UserContext.Provider value={userInfo}>
            <Navbar toggleSidebar={toggleSidebar}/>
            <Sidebar sidebarVisibility={sidebarVisibility} />

            <div className="p-1 border border-dashed border-gray-700 lg:ml-64 md:ml-16">
            <div className="px-2 mt-14">
                <Breadcrumb />
                <h1 className="font-bold leading-tight text-4xl mt-2">Ticket Dashboard</h1>
                <SampleContent />
            </div>
            </div>
        </UserContext.Provider>
    </div>
  )
}

export default DashboardLayout
