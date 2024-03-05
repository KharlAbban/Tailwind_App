import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";

const nocRouter = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
  }
]);

const App = () => {
  return (
    <RouterProvider router={nocRouter} />
  )
}

export default App;