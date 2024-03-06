import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DashboardLayout, IndexLayout } from "./layouts";
import { IndexErrorPage, Login, Register, ResetPassword } from "./components";
import { loginAction, registerAction } from "./utils/actions/indexActions";

const nocRouter = createBrowserRouter([
  {
    path: "/",
    element: <IndexLayout />,
    errorElement: <IndexErrorPage />,
    children: [
      {
        index: true,
        element: <Login />,
        action: loginAction
      },
      {
        path: "/register",
        element: <Register />,
        action: registerAction
      },
      {
        path: "/reset-password",
        element: <ResetPassword />,
      }
    ]
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