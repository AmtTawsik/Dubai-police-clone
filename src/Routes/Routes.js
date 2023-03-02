import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import SignUp from "../layout/SignUp";
import Clearance from "../Pages/Clearance/Clearance";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Fines from "../Pages/Fines/Fines";
import Home from "../Pages/Home/Home";
import Initiative from "../Pages/Initiative/Initiative";
import LostItem from "../Pages/LostItem/LostItem";
import Media from "../Pages/Media/Media";
import NightWork from "../Pages/NightWork/NightWork";
import Security from "../Pages/Security/Security";
import Services from "../Pages/Services/Services";
import SignUp1 from "../Pages/SignUp/SignUp1";
import SignUp2 from "../Pages/SignUp/SignUp2";
import SignUp3 from "../Pages/SignUp/SignUp3";
import SignUp4 from "../Pages/SignUp/SignUp4";
import Signup5 from "../Pages/SignUp/Signup5";
import SignUp6 from "../Pages/SignUp/SignUp6";
import SignUp7 from "../Pages/SignUp/SignUp7";
import SignUp8 from "../Pages/SignUp/SignUp8";
import SignUp9 from "../Pages/SignUp/SignUp9";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/fines',
                element:<Fines></Fines>
            },
            {
                path:'/security',
                element:<Security></Security>
            },
            {
                path:'/lostitem',
                element:<LostItem></LostItem>
            },
            {
                path:'/nightwork',
                element:<NightWork></NightWork>
            },
            {
                path:'/clearance',
                element:<Clearance></Clearance>
            },
            {
                path:'/media',
                element:<Media></Media>
            },
            {
                path:'/initiative',
                element:<Initiative></Initiative>
            },
            {
                path:'/services',
                element:<Services></Services>
            },
        ]
    },
    // {
    //     path:'/signup',
    //     element:<SignUp></SignUp>,
    //     errorElement:<ErrorPage></ErrorPage>,
    //     children:[
    //         {
    //             path:'/signup',
    //             element:<SignUp1></SignUp1>,
    //         },
    //         {
    //             path:'/signup/1',
    //             element:<SignUp2></SignUp2>,
    //         },
    //         {
    //             path:'/signup/2',
    //             element:<SignUp3></SignUp3>
    //         },
    //         {
    //             path:'/signup/3',
    //             element:<SignUp4></SignUp4>
    //         },
    //         {
    //             path:'/signup/4',
    //             element:<Signup5></Signup5>
    //         },
    //         {
    //             path:'/signup/5',
    //             element:<SignUp6></SignUp6>
    //         },
    //         {
    //             path:'/signup/6',
    //             element:<SignUp7></SignUp7>
    //         },
    //         {
    //             path:'/signup/7',
    //             element:<SignUp8></SignUp8>
    //         },
    //         {
    //             path:'/signup/8',
    //             element:<SignUp9></SignUp9>
    //         },
    //     ]
    // }
])