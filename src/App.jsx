import {BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Post from "./pages/post/index.jsx";
import About from "./pages/about/index.jsx";
import './App.css';
import MainLayout from "./layouts/MainLayout.jsx";
import PostDetail from "./pages/postDetail/index.jsx";
import Write from "./pages/write/index.jsx";

function App() {
  return (
    <>
      <Router>
        <MainLayout>
          <ConditionalHeader />
          <Routes>
            <Route path="/" element={<h1>what?</h1>} />
            <Route path="/posts" element={<Post />} />
            <Route path="/posts/:postId" element={<PostDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/write" element={<Write />} />
          </Routes>
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
