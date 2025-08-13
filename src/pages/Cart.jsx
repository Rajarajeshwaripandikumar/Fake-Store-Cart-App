import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty } =
    useContext(CartContext);

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountPrice = totalPrice - totalPrice * 0.1;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b py-4">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p>${item.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => decreaseQty(item.id)} className="px-2 bg-gray-300 rounded">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQty(item.id)} className="px-2 bg-gray-300 rounded">+</button>
              </div>
              <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-6 text-right">
            <p className="text-lg">Total: <span className="font-bold">${totalPrice.toFixed(2)}</span></p>
            <p className="text-lg text-green-600">
              Final Price (10% off): <span className="font-bold">${discountPrice.toFixed(2)}</span>
            </p>
          </div>
        </>
      )}
    </div>
  );
}
