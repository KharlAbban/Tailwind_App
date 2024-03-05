const Breadcrumb = () => {
  return (
    <ol class="text-sm flex items-center whitespace-nowrap text-gray-500 font-semibold" aria-label="Breadcrumb">
        <li class="inline-flex items-center">
            <a class="flex items-center hover:text-blue-600 focus:outline-none focus:text-blue-600" href="#">
            Home
            </a>
            <svg class="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600 mx-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M6 13L10 3" stroke="currentColor" stroke-linecap="round"/>
            </svg>
        </li>
        <li class="inline-flex items-center">
            <a class="flex items-center hover:text-blue-600 focus:outline-none focus:text-blue-600" href="#">
            App Center
            <svg class="flex-shrink-0 size-5 dark:text-gray-600 mx-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M6 13L10 3" stroke="currentColor" stroke-linecap="round"/>
            </svg>
            </a>
        </li>
        <li class="inline-flex items-center font-semibold text-gray-800 truncate" aria-current="page">
            Application
        </li>
    </ol>
  )
}

export default Breadcrumb;
