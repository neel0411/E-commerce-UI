import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import productsData from "../data/products.json";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";

const categories = ["All", "JEWELERY", "ELECTRONICS"];
const sortOptions = [
  { value: "priceLowHigh", label: "Price: Low to High" },
  { value: "priceHighLow", label: "Price: High to Low" },
  { value: "rating", label: "Rating" },
  { value: "newest", label: "Newest" },
];

const Home = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("");
  const [visibleCount, setVisibleCount] = useState(8);

  // Filter by category
  let filtered =
    selectedCategory === "All"
      ? productsData
      : productsData.filter(
          (p) => p.category.toUpperCase() === selectedCategory
        );

  // Sort logic
  switch (sortBy) {
    case "priceLowHigh":
      filtered = [...filtered].sort((a, b) => a.price - b.price);
      break;
    case "priceHighLow":
      filtered = [...filtered].sort((a, b) => b.price - a.price);
      break;
    case "rating":
      filtered = [...filtered].sort((a, b) => b.rating - a.rating);
      break;
    case "newest":
      filtered = [...filtered].sort((a, b) => b.id - a.id);
      break;
  }

  const visibleProducts = filtered.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 px-6 py-10">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto mb-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-2">Welcome to ShopNow</h1>
        <p className="text-lg">
          Explore unbeatable deals and stylish picks — updated daily.
        </p>
      </div>

      {/* Filters + Sort */}
      <div className="max-w-7xl mx-auto mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition 
              ${
                selectedCategory === cat
                  ? "bg-indigo-600 text-white"
                  : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="text-right">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-indigo-500"
          >
            <option value="">Sort by</option>
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Product Grid with Animation */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <AnimatePresence>
          {visibleProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProductCard product={product} onAddToCart={addToCart} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Load More Button */}
      {visibleCount < filtered.length && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => {
              setVisibleCount(visibleCount + 8);
              window.scrollBy({ top: 400, behavior: "smooth" });
            }}
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition hover:scale-105 active:scale-95"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
