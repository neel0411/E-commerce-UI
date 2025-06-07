import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const E_commerceUI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 flex items-center justify-center px-6 py-12">
      <div className="max-w-6xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 p-10 rounded-2xl shadow-xl text-white"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Discover the Future of Shopping
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Welcome to <span className="font-semibold">ShopNow</span> — your
            one-stop destination for fashion, electronics, and more. Dive into
            hand-picked collections and seamless experiences.
          </p>
          <Link to="/home">
            <button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition hover:scale-105 active:scale-95">
              Shop Now
            </button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Curated Categories",
              desc: "Explore electronics and jewelry tailored to your style.",
              icon: "🛍️",
            },
            {
              title: "Daily Deals",
              desc: "Stay ahead with fresh updates and exclusive discounts.",
              icon: "🔥",
            },
            {
              title: "Seamless Cart",
              desc: "Enjoy one-click adds and a smooth checkout experience.",
              icon: "🛒",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default E_commerceUI;
