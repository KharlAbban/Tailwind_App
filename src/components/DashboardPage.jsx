import { useEffect, useState } from "react";
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import SampleContent from "./SampleContent";

const DashboardPage = () => {
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
      <Navbar toggleSidebar={toggleSidebar}/>
      <Sidebar sidebarVisibility={sidebarVisibility} />
      <SampleContent />
    </div>
  )
}

export default DashboardPage
