import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";


export const AdminPath2 = [
    {
        name: "Dashboard",
        path: "/admin/dashboard",
        element: <AdminDashboard></AdminDashboard>
    },
    {
        name: "User Management",
        children: [
            {
                name: "Create Admin",
                path: "/admin/create-student",
                element: <CreateAdmin></CreateAdmin>
            },
            {
                name: "Create Faculty",
                path: "/admin/create-faculty",
                element: <CreateFaculty></CreateFaculty>
            },
            {
                name: "Create Student",
                path: "/admin/create-student",
                element: <CreateStudent></CreateStudent>
            },

        ]
    },
    {
        name: "Course Management",
        children: [
            {
                name: "Offered Course",
                path: "/admin/offered-course",
                element: <CreateAdmin></CreateAdmin>
            },

        ]
    }
]


export const AdminPaths = [
    {
        path: "create-student",
        element: <CreateStudent></CreateStudent>
    },
    {
      path: "create-admin",
      element: <CreateAdmin></CreateAdmin>
    },
    {
    path: "create-faculty",
    element: <CreateFaculty></CreateFaculty>
  }
]
