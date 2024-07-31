import {BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";
import Header from "./components/layout/header/Header.jsx";
import Post from "./pages/post/index.jsx";
import './App.css';
import MainLayout from "./layouts/MainLayout.jsx";
import PostDetail from "./pages/postDetail/index.jsx";
import Write from "./pages/write/index.jsx";
import Footer from "./components/layout/footer/Footer.jsx";
import Main from "./pages/main/index.jsx";

function App() {
  return (
    <>
      <Router>
        <ConditionalHeader />
        <MainLayout>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/posts" element={<Post />} />
            <Route path="/posts/:postId" element={<PostDetail />} />
            <Route path="/write" element={<Write />} />
          </Routes>
          <Footer />
        </MainLayout>
      </Router>
    </>
  );
}

const ConditionalHeader = () => {
  const location = useLocation();
  const hiddenHeaderPaths = [
    "/write",
  ]
  return !hiddenHeaderPaths.includes(location.pathname) ? <Header /> : null;
}
export default App
