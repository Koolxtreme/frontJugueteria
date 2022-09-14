import { Routes, Route } from "react-router-dom";
import MainHeader from "./components/header/MainHeader";
import Home from "./views/Home";
import Products from "./views/Products";
import About from "./views/About";
import Login from "./views/Login";
import Register from "./views/Register";
import Forgot from "./views/Forgot";

function App() {
  return (
    <div>
      <MainHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />}/>
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />}/>
        <Route path="/forgot" element={<Forgot />}/>
      </Routes>
    </div>
  );
}

export default App;
