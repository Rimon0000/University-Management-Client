
import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Login from "../pages/login";
import { AdminPaths } from "./admin.routes";
import { routeGenerator } from "../utils/routeGenerator";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/admin",
    element: <App></App>,
    children: routeGenerator(AdminPaths)
  },
  {
    path: "/faculty",
    element: <App></App>,
    children: routeGenerator(AdminPaths)
  },
  {
    path: "/student",
    element: <App></App>,
    children: routeGenerator(AdminPaths)
  },
  {
    path: "/login", 
    element: <Login></Login>
  }
]);

export default router;