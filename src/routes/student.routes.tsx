import OfferedCourse from "../pages/faculty/OfferedCourse";
import StudentDashboard from "../pages/student/StudentDashboard";

export const StudentPaths = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: <StudentDashboard></StudentDashboard>
    },
    {
        name: "Offered Course",
        path: "offered-course",
        element: <OfferedCourse></OfferedCourse>
    },

]


