import { useLocation } from "react-router-dom";
import { routeHeadings } from "../utils/data/datadump";

const RouteHeading = () => {
    const {pathname} = useLocation();
    const urlMatch = routeHeadings.find((route) => route.path === pathname);

  return (
    <h1 className="font-bold leading-tight text-4xl mt-2">{urlMatch.title}</h1>
  )
}

export default RouteHeading
