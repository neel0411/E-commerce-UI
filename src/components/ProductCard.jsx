import { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, onAddToCart }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    onAddToCart(product);
    setShowToast(true);

    // Reset animation after 500ms
    setTimeout(() => setIsAdding(false), 500);

    // Hide toast after 2 seconds
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <div className="relative bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.015]">
      {/* Toast feedback */}
      {showToast && (
        <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-medium px-3 py-1 rounded shadow animate-fade-in-out z-20">
          ✅ Added to Cart
        </div>
      )}

      <Link to={`/product/${product.id}`} className="block group">
        <img
          src={product.image}
          alt={product.title}
          className="h-48 w-full object-cover rounded-t-xl group-hover:opacity-90 group-hover:shadow-sm group-hover:scale-105 transition-transform duration-300"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 truncate">
            {product.title}
          </h2>
          <p className="text-sm text-gray-500 mt-1">{product.category}</p>
          <div className="flex items-center gap-1 text-yellow-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4"
                fill={
                  i < Math.round(product.rating.rate) ? "currentColor" : "none"
                }
                stroke="currentColor"
                strokeWidth={1}
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.788 1.4 8.168L12 18.896l-7.334 3.862 1.4-8.168L.132 9.21l8.2-1.192z" />
              </svg>
            ))}
          </div>
        </div>
      </Link>

      <div className="p-4 pt-0">
        <button
          onClick={handleAddToCart}
          className={`w-full bg-gradient-to-r from-green-400 to-cyan-400 text-white font-semibold py-2 rounded-lg shadow-md hover:shadow-lg transition duration-200
            ${isAdding ? "animate-pulse" : "hover:scale-105"}`}
        >
          {isAdding ? "Adding..." : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
