import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { GithubProvider } from "./context/github/GithubContext";

const App = () => {
  return (
    <GithubProvider>
      <Router>
        <Navbar />
        <main className="container my-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/notFound" element={<NotFound />} />
            <Route exact path="/*" element={<NotFound />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </Router>
    </GithubProvider>
  );
};

export default App;
