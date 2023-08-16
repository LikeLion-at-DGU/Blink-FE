import { createBrowserRouter } from "react-router-dom";
// import Home from '../Pages/Home';
// import App from './App';
// import StyledComponentmemo from '../Pages/StyledComponentmemo';
// import ReactRouters from '../Pages/ReactRouters';
// import Techit from '../Pages/Techits';
import Intro from "./pages/Intro/intro";
import Signin from "./pages/Auth/Login/signin";
import Signup from "./pages/Auth/Signup/signup";
import ExpertSignup from "./pages/Auth/Signup/ExpertSignup";
import Post from "./components/post/Post";
import Post2 from "./components/Post2/Post2";
import Home from "./pages/home/Home";
import ExpertList from "./pages/Expert/ExpertList";
import ExpertDetail from "./pages/Expert/ExpertDetail";
import App from "./App";
import PostList from "./components/post/PostList";
import GMap from "./components/post/GMap";
import React from "react";
import Mypage from "./pages/Mypage/component";
import ActiveRight from "./pages/Mypage/Myactive";

const Router = createBrowserRouter([
  {
    path: "",
    element: <Intro />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/expertSignup",
        element: <ExpertSignup />,
      },
      {
        path: "/post",
        element: <Post />,
      },
      {
        path: "/post2",
        element: <Post2 />,
      },
      {
        path: "/expertList",
        element: <ExpertList />,
        children: [
          {
            path: "expertList/:Id",
            element: <ExpertDetail />,
          },
        ],
      },
      {
        path: "/home", // /home 로 수정
        element: <Home />,
        children: [
          {
            path: "/home/postList", // /home/postList 로 수정
            element: <PostList />,
          },
          { path: "/home/gMap", element: <GMap /> },
        ],
      },
      {
        path: "/my",
        element: <ActiveRight />,
      },
    ],
  },
]);

export default Router;
