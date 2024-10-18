import { useRoutes } from "react-router-dom"
import Layout from "../pages/Layout/layout";
import AllRoutes from "./allRoutes";

const Routes = ()=>{
    const routes = useRoutes(
        [
           {
             path:'/',
             element:<Layout/>,
             children:AllRoutes
           }
        ]
    )
    return routes;

    
}

export default Routes;

