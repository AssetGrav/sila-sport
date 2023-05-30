import { Route, Routes } from "react-router-dom";
import Promo from "./components/ui/Promo";
import Main from "./components/layout/Main";
import NavBar from "./components/ui/NavBar";
import Products from "./components/layout/Products";
import Services from "./components/layout/Services";

function App() {
  return (
    <div className="rounded-2xl shadow-2xl shadow-gray-500 bg-gray-light font-sans">
      <Promo />
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
