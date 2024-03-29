import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DashboardLayout, IndexLayout } from "./layouts";
import { Dashboard, HomeErrorPage, IndexErrorPage, Login, NewTicket, Register, ResetPassword, Tickets } from "./components";
import { loginAction, registerAction } from "./utils/actions/indexActions";
import { createNewTicketAction } from "./utils/actions/ticketActions";
import dashboardLoader from "./utils/loaders/dashboardLoader";
import { logoutAction } from "./utils/actions/homeActions";

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
    errorElement: <HomeErrorPage />,
    children:[
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader
      },
      {
        path: "/home/logout",
        action: logoutAction
      }
    ]
  },
  {
    path: "/home/tickets",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Tickets />
      },
      {
        path: "/home/tickets/new",
        element: <NewTicket />,
        action: createNewTicketAction
      }
    ]
  }
]);

const App = () => {
  return (
    <RouterProvider router={nocRouter} />
  )
}

export default App;