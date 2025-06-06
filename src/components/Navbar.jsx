import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCart();

  const baseLink = "font-medium transition";
  const getLinkClass = ({ isActive }) =>
    isActive
      ? `${baseLink} text-blue-600`
      : `${baseLink} text-gray-700 hover:text-blue-500`;

  const getCartLinkClass = ({ isActive }) =>
    isActive
      ? `${baseLink} text-rose-600 flex items-center`
      : `${baseLink} text-gray-700 hover:text-rose-500 flex items-center`;

  return (
    <nav className="bg-white/70 backdrop-blur-md shadow-lg px-6 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <NavLink
          to="/"
          className="text-2xl font-bold text-gray-800 tracking-wide hover:text-blue-600 transition"
        >
          ShopNow
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          <NavLink to="/" className={getLinkClass}>
            Home
          </NavLink>
          <div className="relative">
            <NavLink to="/cart" className={getCartLinkClass}>
              <svg className="w-5 h-5 mr-1 fill-current" viewBox="0 0 24 24">
                <path d="M7 4h-2l-3 9h2l1-3h12l1 3h2l-3-9h-2l-1 3h-6l-1-3zm0 14c-1.104 0-2 .896-2 2s.896 2 2 2c1.104 0 2-.896 2-2s-.896-2-2-2zm10 0c-1.104 0-2 .896-2 2s.896 2 2 2c1.104 0 2-.896 2-2s-.896-2-2-2z" />
              </svg>
              Cart
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-rose-600 text-white text-xs px-2 py-0.5 rounded-full shadow-md">
                  {cartItems.length}
                </span>
              )}
            </NavLink>
          </div>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden mt-3 space-y-2 transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <NavLink
          to="/"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            isActive
              ? "block px-4 py-2 rounded-md text-blue-600 font-medium"
              : "block px-4 py-2 rounded-md text-gray-700 hover:text-blue-600 transition"
          }
        >
          Home
        </NavLink>

        <div className="relative px-4">
          <NavLink
            to="/cart"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "flex items-center text-rose-600 font-medium"
                : "flex items-center text-gray-700 hover:text-rose-500 transition"
            }
          >
            <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24">
              <path d="M7 4h-2l-3 9h2l1-3h12l1 3h2l-3-9h-2l-1 3h-6l-1-3zm0 14c-1.104 0-2 .896-2 2s.896 2 2 2c1.104 0 2-.896 2-2s-.896-2-2-2zm10 0c-1.104 0-2 .896-2 2s.896 2 2 2c1.104 0 2-.896 2-2s-.896-2-2-2z" />
            </svg>
            Cart
            {cartItems.length > 0 && (
              <span className="ml-2 bg-rose-600 text-white text-xs px-2 py-0.5 rounded-full shadow-sm">
                {cartItems.length}
              </span>
            )}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
