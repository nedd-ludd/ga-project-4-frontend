import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Ours from "./components/Ours";

// import "react-toastify/dist/ReactToastify.css";
// import "./styles/App.css";

// window.Buffer = window.Buffer || require("buffer").Buffer;

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ours" element={<Ours />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
