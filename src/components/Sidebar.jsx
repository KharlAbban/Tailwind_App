const Sidebar = ({sidebarVisibility}) => {
  return (
    <aside id="dashboardSibebar" className={`fixed top-0 left-0 z-45 w-64 max-md:-translate-x-full md:translate-x-0 max-lg:w-16 transition-transform h-screen bg-deepBlue pt-20 ${sidebarVisibility ? 'max-md:transform-none max-md:w-64': ''}`}>
      <div className="h-full text-white">
        hello
      </div>
    </aside>
  )
}

export default Sidebar;