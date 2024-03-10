import { Layout, Menu } from "antd";
import { AdminPaths } from "../../routes/admin.routes";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { FacultyPaths } from "../../routes/faculty.routes";
import { StudentPaths } from "../../routes/student.routes";
const { Sider } = Layout;

const userRole = {
    ADMIN: "admin",
    FACULTY: "faculty",
    STUDENT: "student",
}


const Sidebar = () =>{
    const role = "admin";
    let sidebarItems;

    switch (role) {
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
          >
            <div style={{color: 'white', height: '4rem', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                <h1>PH University</h1>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItems} />
          </Sider>
    )
}

export default Sidebar;