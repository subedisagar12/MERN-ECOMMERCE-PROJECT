import "./App.css";

// Package imports
import { Routes, Route } from "react-router-dom";

// Component import

import Navbar from "./components/Navbar";

import ProductDetail from "./pages/ProductDetail";
import Homepage from "./pages/Homepage";
import CartPage from "./pages/CartPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/product/detail" element={<ProductDetail />} />

        <Route path="/cart" element={<CartPage />} />

        <Route path="/search" element ={<SearchPage />} />
      </Routes>
    </>
  );
}

export default App;
