
import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Login from "../pages/login";
import { AdminPaths } from "./admin.routes";
import { routeGenerator } from "../utils/routeGenerator";
import { FacultyPaths } from "./faculty.routes";
import { StudentPaths } from "./student.routes";

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
    children: routeGenerator(FacultyPaths)
  },
  {
    path: "/student",
    element: <App></App>,
    children: routeGenerator(StudentPaths)
  },
  {
    path: "/login", 
    element: <Login></Login>
  }
]);

export default router;