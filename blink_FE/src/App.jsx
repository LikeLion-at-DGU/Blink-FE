import React from "react";
import { Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import reset from "styled-reset";
import Home from "./pages/home/Home";
import { Layout } from "./components/Layout/Layout";
import Post from "./components/post/Post";
import Signin from "./pages/Auth/Login/signin";
import KMap from "./components/post/KMap";
import ExpertList from "./pages/Expert/ExpertList";
import ExpertDetail from "./pages/Expert/ExpertDetail";
import { CardData } from "./pages/Expert/ExpertData";
import Nav from "./components/Layout/Nav/Nav";
import Signup from "./pages/Auth/Signup/signup";
import { Outlet } from "react-router-dom";
import ExpertSignup from "./pages/Auth/Signup/ExpertSignup";
import Post2 from "./components/Post2/Post2";

import Intro from "./pages/Intro/intro";

/* 추가적인 리셋이나 스타일 조정을 여기에 추가할 수 있습니다. */
const GlobalStyleComponent = createGlobalStyle`
  ${reset}
  /* 추가적인 리셋이나 스타일 조정을 여기에 추가할 수 있습니다. */
  width: 1920px;
  height: 1080px;
  background-color: blue;
`;

const Wrapper = styled.div`
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
function App() {
  return (
    <>
      <GlobalStyleComponent />
      {/* <Nav /> */}
      <Routes>
        {/* <Route index element={<KMap />} /> */}
        {/* <Route index element={<Post />} />
        <Route path="/" element={<Layout />} /> */}
        {/* <Route index element={<Home />} /> */}
        {/* // <Route index element={<KMap />} /> */}
        {/* <Route path="/" element={<Layout />} /> */}
        {/* <Route index element={<Home />} /> */}
        {/* <Route index element={<KMap />} /> */}
        {/* <Route index element={<Signin />}> */}
        {/* <Route index element={<Post />} /> */}
        <Route index element={<Intro />} />
        {/* <Route index element={<Signup />}> */}
        {/* <Route index element={<ExpertSignup />}> */}
        {/* #4 변호사 페이지 렌더링 코드 */}
        {/* <Route path="/expert" element={<ExpertList />}> */}
        {/* <Route
            path="detail/:Id"
            element={<ExpertDetail CardData={CardData} />}
          /> */}
        {/* </Route> */}
      </Routes>
    </>
  );
}
export default App;
