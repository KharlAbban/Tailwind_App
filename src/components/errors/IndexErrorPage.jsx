import { useRouteError } from 'react-router-dom';

const IndexErrorPage = () => {
    const routeError = useRouteError();
  return (
    <div>
      {routeError.message}
    </div>
  )
}

export default IndexErrorPage;
