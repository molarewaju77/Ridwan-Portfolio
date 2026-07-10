import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Resume from "./pages/Resume";
import ProjectDetails from "./pages/ProjectDetails";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/work/:slug" element={<ProjectDetails />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
