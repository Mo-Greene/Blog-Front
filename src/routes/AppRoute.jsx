import {Route, Routes} from "react-router-dom";
import Main from "../pages/main/index.jsx";
import Post from "../pages/post/index.jsx";
import PostDetail from "../pages/postDetail/index.jsx";
import Write from "../pages/write/index.jsx";
import Login from "../pages/login/index.jsx";

export const AppRoutes = () => (

  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/posts" element={<Post />} />
    <Route path="/posts/:slug" element={<PostDetail />} />
    <Route path="/write" element={<Write />} />
    <Route path="/login" element={<Login />} />
  </Routes>
);