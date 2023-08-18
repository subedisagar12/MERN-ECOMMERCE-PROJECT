import "./App.css";

// Package imports
import { Routes, Route } from "react-router-dom";

// Component import

import Navbar from "./components/Navbar";

import ProductDetail from "./pages/ProductDetail";
import Homepage from "./pages/Homepage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/product/detail" element={<ProductDetail />} />

        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;
