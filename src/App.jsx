import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <nav className="bg-blue-600 text-white p-4 flex justify-between">
        <Link to="/" className="font-bold">Store</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CartProvider>
  );
}
