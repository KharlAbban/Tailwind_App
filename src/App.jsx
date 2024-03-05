import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DashboardLayout, IndexLayout } from "./layouts";

const nocRouter = createBrowserRouter([
  {
    path: "/",
    element: <IndexLayout />,
  },
  {
    path: "/home",
    element: <DashboardLayout />,
  }
]);

const App = () => {
  return (
    <RouterProvider router={nocRouter} />
  )
}

export default App;