import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import User from "./pages/User";
import NotFound from "./pages/NotFound";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";
import Alert from "./components/Alert";

const App = () => {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <Navbar />
          <main className="container">
            <Alert />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/user/:login" element={<User />} />
              <Route path="/notFound" element={<NotFound />} />
              <Route exact path="/*" element={<NotFound />} />
            </Routes>
          </main>
          {/* <Footer /> */}
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
};

export default App;
