import { useParams } from "react-router-dom";
import products from "../data/products.json";
import { useCart } from "../context/CartContext";
import { useState } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="p-6 text-center text-gray-700">
        <h2 className="text-xl font-semibold">Product not found.</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-800 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="w-full overflow-hidden rounded-lg shadow-md">
          <img
            src={product.image}
            alt={product.title}
            className={`w-full max-h-[550px] object-cover transition-transform duration-500`}
          />
        </div>

        {/* Product Info */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">{product.title}</h1>

          <div className="flex items-center gap-4 text-yellow-500 text-lg">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
              ⭐ {product.rating.rate}
            </span>
            <span className="text-sm text-gray-500">
              ({product.rating.count || "0"} reviews)
            </span>
          </div>

          <p className="text-xl font-semibold text-emerald-600">
            ${product.price}
          </p>

          <div className="text-sm text-gray-600 space-y-1">
            <p>
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                Category:
              </span>{" "}
              {product.category}
            </p>
          </div>

          <p className="text-base leading-relaxed text-gray-700 mt-4">
            {product.description}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="mt-6 inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-md shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition duration-200 ease-in-out transform"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-16 bg-white rounded-lg shadow px-6 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Customer Reviews
        </h2>
        <div className="space-y-6">
          <div className="border-b pb-4">
            <p className="text-gray-700 font-medium">John D.</p>
            <p className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐</p>
            <p className="text-gray-600 text-sm mt-1">
              "Absolutely love this product! High quality and arrived quickly."
            </p>
          </div>
          <div className="border-b pb-4">
            <p className="text-gray-700 font-medium">Ayesha K.</p>
            <p className="text-yellow-500 text-sm">⭐⭐⭐⭐</p>
            <p className="text-gray-600 text-sm mt-1">
              "Great value for money. Would recommend to others."
            </p>
          </div>
          <div>
            <p className="text-gray-700 font-medium">Carlos M.</p>
            <p className="text-yellow-500 text-sm">⭐⭐⭐</p>
            <p className="text-gray-600 text-sm mt-1">
              "Good but the delivery took longer than expected."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
