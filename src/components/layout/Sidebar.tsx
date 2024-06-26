import { Layout, Menu } from "antd";
import { AdminPaths } from "../../routes/admin.routes";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { FacultyPaths } from "../../routes/faculty.routes";
import { StudentPaths } from "../../routes/student.routes";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
const { Sider } = Layout;

const userRole = {
    ADMIN: "admin",
    FACULTY: "faculty",
    STUDENT: "student",
}


const Sidebar = () =>{
    const user = useAppSelector(selectCurrentUser)
    let sidebarItems;

    switch (user!.role) {
        case userRole.ADMIN:
            sidebarItems = sidebarItemsGenerator(AdminPaths, userRole.ADMIN)
            break;
        case userRole.FACULTY:
            sidebarItems = sidebarItemsGenerator(FacultyPaths, userRole.FACULTY)
            break;
        case userRole.STUDENT:
            sidebarItems = sidebarItemsGenerator(StudentPaths, userRole.STUDENT)
            break;
    
        default:
            break;
    }


    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            style={{height: "100vh", position: "sticky", top: "0", left: "0"}}
          >
            <div style={{color: 'white', height: '4rem', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                <h1>PH University</h1>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItems} />
          </Sider>
    )
}

export default Sidebar;