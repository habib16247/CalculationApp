import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Auth/Login/Login";
import Resigstration from "../Pages/Auth/Registration/Resigstration";
import App from "../App";
import Calculator from "../Pages/Calculator/Calculator";
import Users from "../Pages/Users/Users";
import NotFound from "../Pages/NotFound/NotFound";
import UserDetails from "../Pages/Users/UserDetails";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/calculator",
                element: <Calculator/>
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/users",
                element: <Users />,
                loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
                errorElement: <NotFound />
            },
            {
                path: "a/:id",
                element: <UserDetails/>,
                loader: ({params}) =>  fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            },
            {
                path: "/signup",
                element: <Resigstration />
            },
            {
                path: "/login",
                element: <Login />
            },
        ]
    },
    
    {
        path: "*",
        element: <NotFound />
    }
])


export default router