import { createBrowserRouter, Outlet } from "react-router-dom";
import Admin from './components/Admin/Admin'
import Card from "./components/Card/Card";
import Login from "./components/Login/Login";
import Users from "./components/User/Users";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Users/>
    },
    {
        path: '/card',
        element: <Card />,
    },
    {
        path: '/admin',
        element: <Admin />,
    },
    {
        path: '/login',
        element: <Login />,
    }
]);