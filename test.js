
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


//for sidebar array
const newArray = AdminPath2.reduce((acc, item) =>{
    if(item.path && item.name){
        acc.push({
            key: item.name,
            label: item.path,
        })
    }

    if(item.children){
        acc.push({
            key: item.name,
            label: item.name,
            children: item.children.map(child =>({
                key: child.name,
                label: child.path
            }))
        })
    }

    return acc;
}, [])


//for routes
// const newArray = AdminPath2.reduce((acc, item) =>{
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

console.log(newArray);