import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from '../views/Home'
import Detail from "../views/Detail";
import Error404 from "../views/Error404";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        errorElement : <Error404/>
    },
    {
        path: "/detail/:eventId",
        element: <Detail></Detail>
    }
]);

const MyRoutes = () => {
    return (
        <RouterProvider router={router} />
    );
}

export default MyRoutes;
