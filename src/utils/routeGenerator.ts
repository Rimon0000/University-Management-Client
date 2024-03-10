import { TRoute, TUserPath } from "../types"


export const routeGenerator = (items : TUserPath[]) =>{
    const routes = items.reduce((acc : TRoute[], item) =>{
        if(item.path && item.element){
            acc.push({
                path: item.path,
                element: item.element
            })
        }
    
        if(item.children){
            item.children.forEach(child =>{
                acc.push({
                    path: child.path!,                  //! is not empty for use typescript type
                    element: child.element
                }) 
            })
        }
    
        return acc;
    }, [])

    return routes;
}