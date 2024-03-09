
export const AdminPath2 = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: "AdminDashboard"
    },
    {
        name: "User Management",
        children: [
            {
                name: "Create Admin",
                path: "create-student",
                element: "<CreateAdmin></CreateAdmin>"
            },
            {
                name: "Create Faculty",
                path: "create-faculty",
                element: "<CreateFaculty></CreateFaculty>"
            },
            {
                name: "Create Student",
                path: "create-student",
                element: "<CreateStudent></CreateStudent>"
            },

        ]
    },
]


const newArray = AdminPath2.reduce((acc, item) =>{
    if(item.path && item.element){
        acc.push({
            path: item.path,
            element: item.element
        })
    }

    if(item.children){
        item.children.forEach(child =>{
            acc.push({
                path: child.path,
                element: child.element
            }) 
        })
    }

    return acc;
}, [])

console.log(newArray);