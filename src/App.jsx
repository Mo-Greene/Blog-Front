import {BrowserRouter as Router, useLocation} from "react-router-dom";
import Header from "./components/layout/header/Header.jsx";
import './App.css';
import MainLayout from "./layouts/MainLayout.jsx";
import Footer from "./components/layout/footer/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.js";
import {AppRoutes} from "./routes/AppRoute.jsx";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <ConditionalHeader />
        <MainLayout>
          <AppRoutes />
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
