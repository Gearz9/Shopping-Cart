import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";

const App = () => {
  return (
    <div>
      <div className=" bg-slate-900">
        <NavBar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
