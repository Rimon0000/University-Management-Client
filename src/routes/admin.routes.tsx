import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/userManagement/CreateAdmin";
import CreateFaculty from "../pages/admin/userManagement/CreateFaculty";
import CreateStudent from "../pages/admin/userManagement/CreateStudent";
import AcademicDepartment from "../pages/admin/academicManagement/AcademicDepartment";
import AcademicFaculty from "../pages/admin/academicManagement/AcademicFaculty";
import AcademicSemester from "../pages/admin/academicManagement/AcademicSemester";
import CreateAcademicDepartment from "../pages/admin/academicManagement/CreateAcademicDepartment";
import CreateAcademicFaculty from "../pages/admin/academicManagement/CreateAcademicFaculty";
import CreateAcademicSemester from "../pages/admin/academicManagement/CreateAcademicSemester";
import StudentData from "../pages/admin/userManagement/StudentData";
import StudentDetails from "../pages/admin/userManagement/StudentDetails";
import SemesterRegistration from "../pages/admin/courseManagement/SemesterRegistration";
import RegisteredSemester from "../pages/admin/courseManagement/RegisteredSemester";
import CreateCourse from "../pages/admin/courseManagement/CreateCourse";
import Courses from "../pages/admin/courseManagement/Courses";
import OfferCourse from "../pages/admin/courseManagement/OfferCourse";
import OfferedCourse from "../pages/faculty/OfferedCourse";

export const AdminPaths = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: <AdminDashboard></AdminDashboard>
    },
    {
        name: "Academic Management",
        children: [
            {
                name: "Create A. Semester",
                path: "create-academic-semester",
                element: <CreateAcademicSemester></CreateAcademicSemester>
            },
            {
                name: "Academic Semester",
                path: "academic-semester",
                element: <AcademicSemester></AcademicSemester>
            },
            {
                name: "Create A. Faculty",
                path: "create-academic-faculty",
                element: <CreateAcademicFaculty></CreateAcademicFaculty>
            },
            {
                name: "Academic Faculty",
                path: "academic-faculty",
                element: <AcademicFaculty></AcademicFaculty>
            },
            {
                name: "Create A. Department",
                path: "create-academic-department",
                element: <CreateAcademicDepartment></CreateAcademicDepartment>
            },
            {
                name: "Academic Department",
                path: "academic-department",
                element: <AcademicDepartment></AcademicDepartment>
            },

        ]
    },

    {
        name: "User Management",
        children: [
            {
                name: "Create Student",
                path: "create-student",
                element: <CreateStudent></CreateStudent>
            },
            {
                name: "Students",
                path: "students-data",
                element: <StudentData></StudentData>
            },
            {
                path: "student-data/:studentId",
                element: <StudentDetails></StudentDetails>
            },
            {
                name: "Create Admin",
                path: "create-admin",
                element: <CreateAdmin></CreateAdmin>
            },
            {
                name: "Create Faculty",
                path: "create-faculty",
                element: <CreateFaculty></CreateFaculty>
            },
            

        ]
    },

    {
        name: "Course Management",
        children: [
            {
                name: "Semester Registration",
                path: "semester-registration",
                element: <SemesterRegistration></SemesterRegistration>
            },
            {
                name: "Registered Semester",
                path: "registered-semester",
                element: <RegisteredSemester></RegisteredSemester>
            },
            {
                name: "Create Course",
                path: "create-course",
                element: <CreateCourse></CreateCourse>
            },
            {
                name: "Courses",
                path: "courses",
                element: <Courses></Courses>
            },
            {
                name: "Offer Course",
                path: "offer-course",
                element: <OfferCourse></OfferCourse>
            },
            {
                name: "Offered Courses",
                path: "offered-courses",
                element: <OfferedCourse></OfferedCourse>
            },
            
        
        ]
    },
]


//* sidebar array
// export const adminSidebarItems = AdminPaths.reduce((acc: TSidebarItem[], item) =>{
//     if(item.path && item.name){
//         acc.push({
//             key: item.name,
//             label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
//         })
//     }

//     if(item.children){
//         acc.push({
//             key: item.name,
//             label: item.name,
//             children: item.children.map(child =>({
//                 key: child.name,
//                 label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>
//             }))
//         })
//     }

//     return acc;
// }, [])


//!* programmatically way
// export const adminRoutes = AdminPaths.reduce((acc : TRoute[], item) =>{
//     if(item.path && item.element){
//         acc.push({
//             path: item.path,
//             element: item.element
//         })
//     }

//     if(item.children){
//         item.children.forEach(child =>{
//             acc.push({
//                 path: child.path,
//                 element: child.element
//             }) 
//         })
//     }

//     return acc;
// }, [])



//!Hard coded way

// export const AdminPaths = [
//     {
//         path: "create-student",
//         element: <CreateStudent></CreateStudent>
//     },
//     {
//       path: "create-admin",
//       element: <CreateAdmin></CreateAdmin>
//     },
//     {
//     path: "create-faculty",
//     element: <CreateFaculty></CreateFaculty>
//   }
// ]
