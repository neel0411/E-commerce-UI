import { useCart } from "../context/CartContext";
import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, updateQty } = useCart();

  const total = cartItems
    .reduce((sum, item) => sum + item.qty * item.price, 0)
    .toFixed(2);

  return (
    <div className="bg-[#F9FAFB] min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h2>
        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              🛒 Your cart is empty.
            </p>
            <p className="text-sm mt-2">
              Start adding some products to see them here.
            </p>
            <Link
              to="/"
              className="mt-4 inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition"
            >
              Go to Shop
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start bg-white shadow rounded-lg p-4 sm:p-6 border border-gray-200"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <div className="flex-1 ml-4">
                    <div className="flex justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-green-500 font-semibold">
                        ${item.price}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center space-x-3">
                      <button
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        disabled={item.qty <= 1}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-2 py-1 rounded disabled:opacity-50"
                      >
                        -
                      </button>
                      <span className="text-gray-800 font-medium">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-2 py-1 rounded"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-auto text-red-500 hover:text-red-600 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="sticky bottom-0 bg-white border-black py-4 px-6 flex justify-between items-center shadow-md z-10 border">
              <h3 className="text-xl font-bold">Total:</h3>
              <p className="text-xl font-bold text-green-600">${total}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
