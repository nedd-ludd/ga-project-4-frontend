import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Ours from "./components/Ours";
import ItemsIndex from "./components/ItemsIndex";
import Item from "./components/Item";

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
        <Route path="/items/:id" element={<Item />} />
        <Route path="/ours-dashboard" element={<Ours />} />
        <Route path="/items" element={<ItemsIndex />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
