import { Link, useRouteError } from "react-router-dom";
import { GoAlert } from "react-icons/go";

const HomeErrorPage = () => {
    const routeError = useRouteError();

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <GoAlert className="text-6xl text-red-800" />
      <p className="text-xl font-semibold">
        {routeError.message}
      </p>
      {routeError.message.includes("You need to login to continue") ?
       <Link to="/" className="standard-btn mt-4">Login Here</Link>:
       <Link to="/home" className="standard-btn mt-4">Go back home</Link>
      }
    </div>
  )
}

export default HomeErrorPage
