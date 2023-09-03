import "./App.css";

// Package imports
import { Routes, Route } from "react-router-dom";

// Component import

import Navbar from "./components/Navbar";
import Footer from "./components/footer";

import ProductDetail from "./pages/ProductDetail";
import Homepage from "./pages/Homepage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ProductContextProvider from "./context/productContext";
import CartMainPage from "./pages/CartMainPage";

function App() {
  return (
    <>
      <Navbar />
    <ProductContextProvider>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/product/detail" element={<ProductDetail />} />

        <Route path="/cart" element={<CartMainPage />} />

        <Route path="/checkout" element={<CheckoutPage />} />
       </Routes>
      </ProductContextProvider>
      <Footer/>
    </>
  );
}

export default App;
