import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { cart, addToCart } = useContext(CartContext);
  const inCart = cart.some((item) => item.id === product.id);

  return (
    <div className="border rounded-lg shadow p-4 flex flex-col">
      <img src={product.image} alt={product.title} className="h-40 object-contain mb-2" />
      <h3 className="font-semibold text-lg">{product.title}</h3>
      <p className="text-gray-500 text-sm line-clamp-2">{product.description}</p>
      <p className="text-xl font-bold mt-2">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className={`mt-auto px-4 py-2 rounded text-white ${
          inCart ? "bg-red-500" : "bg-blue-500"
        }`}
      >
        {inCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
}
