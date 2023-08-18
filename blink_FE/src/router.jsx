import { createBrowserRouter, useRoutes, Navigate } from "react-router-dom";
// import Home from '../Pages/Home';
// import App from './App';
// import StyledComponentmemo from '../Pages/StyledComponentmemo';
// import ReactRouters from '../Pages/ReactRouters';
// import Techit from '../Pages/Techits';
import Intro from "./pages/Intro/intro";
import Signin from "./pages/Auth/Login/signin";
import Signup from "./pages/Auth/Signup/signup";
import ExpertSignup from "./pages/Auth/Signup/ExpertSignup";
import Post from "./components/post/PostWrite/Post";
import Post2 from "./components/Post2/Post2";
import Home from "./pages/home/Home";
import ExpertList from "./pages/Expert/ExpertList";
import ExpertDetail from "./pages/Expert/ExpertDetail";
import App from "./App";
import PostList from "./components/post/PostList/PostList";
import CustomGMap from "./components/post/Post/CustomGMap";
import React from "react";
import Notice from "./components/Modal/Notice";
import Mypage from "./pages/Mypage/component";
import ActiveRight from "./pages/Mypage/Myactive";
import { Myaccount } from "./pages/Mypage/Myaccount";
import { CardData } from "../src/pages/Expert/ExpertData";
import { Myactive } from "./pages/Mypage/Myactive";

// function AuthenticatedRoute({ element, children }) {
//   // 로컬 스토리지에서 인증 토큰을 확인
//   const authToken = localStorage.getItem("authToken");

//   if (!authToken) {
//     // 인증 토큰이 없을 경우 로그인 페이지로 이동
//     return <Navigate to="/signin" />;
//   }

//   return element || children;
// }

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
        path: "/myaccount",
        element: <Myaccount />,
      },
      {
        path: "/myactive",
        element: <Myactive />,
      },
      {
        path: "/post",
        element: <Post />,
      },
      {
        path: "/post2/:mainpostId",
        element: <Post2 />,
      },
      {
        path: "/expertlist",
        element: <ExpertList />,
        children: [
          {
            path: ":Id",
            element: <ExpertDetail CardData={CardData} />,
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
          { path: "/home/gMap", element: <CustomGMap /> },
        ],
      },
    ],
  },
]);

export default Router;
