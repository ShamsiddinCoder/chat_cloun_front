import Home from "../Pages/Home/Home";
import Registration from "../Pages/Registration/Registration";
import UserList from "../Pages/UserList/UserList";
import Login from "../Pages/Registration/Login";
import Action from "../Pages/Action/Action";
import Posts from "../Pages/Posts/Posts";

export const routers = [
    {
        paths: '/',
        elements: Home
    },

    {
        paths: '/registration',
        elements: Registration
    },

    {
        paths: '/users',
        elements: UserList
    },

    {
        paths: '/login',
        elements: Login
    },

    {
        paths: '/action',
        elements: Action
    },
    
    {
        paths: '/posts',
        elements: Posts
    }
]