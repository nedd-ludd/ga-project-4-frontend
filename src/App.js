import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Ours from "./components/Ours";
import ItemsIndex from "./components/ItemsIndex";
import Item from "./components/Item";
import AppAppBar from "./components/AppAppBar";
import ListItems from "./components/AddItem";
import People from "./components/People";
import Person from "./components/Person";

import "react-toastify/dist/ReactToastify.css";
// import "./styles/App.css";

window.Buffer = window.Buffer || require("buffer").Buffer;

function App() {
  return (
    <Router>
      <AppAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/items/:id" element={<Item />} />
        <Route path="/ours-dashboard" element={<Ours />} />
        <Route path="/items" element={<ItemsIndex />} />
        <Route path="/add-items" element={<ListItems />} />
        <Route path="/edit-item/:id" element={<ListItems />} />
        <Route path="/people" element={<People />} />
        <Route path="/people/:id" element={<Person />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
