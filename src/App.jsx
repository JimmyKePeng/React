import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Notes from "./components/Notes";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Projects from "./pages/Projects";
import Secret from "./pages/Secret";
import { AuthProvider } from "./contexts/AuthContext";
import { BackgroundColorProvider } from "./contexts/BackgroundColor";
function App() {
  return (
    <AuthProvider>
      <BackgroundColorProvider>
        <Navbar />
        <main>
          <Routes>
            <Route>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/secret" element={<Secret />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
            </Route>
          </Routes>
        </main>
      </BackgroundColorProvider>
    </AuthProvider>
  );
}

export default App;
