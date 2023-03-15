import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import TopRated from "../pages/TopRated";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path:'top-rated',
                element:<TopRated></TopRated>
            },
            {
                path:'cart',
                element:<Cart></Cart>
            }
        ]
    }
])