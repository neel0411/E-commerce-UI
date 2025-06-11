// this file is for you can either use app component or direct main.jsx to route

// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home"; //component
// import ProductDetails from "./pages/ProductDetails"; //component
// import Navbar from "./components/Navbar"; //component
// import Cart from "./components/Cart"; //component
// import { CartProvider } from "./context/CartContext"; //a context provider that wraps components and gives them access to cart state globally

// function App() {
//   return (
//     <>
//       <CartProvider>
//         {/*this allows any component inside it to access or modify the cart */}
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           {/*loads home component */}
//           <Route path="/product/:id" element={<ProductDetails />} />
//           {/*loads with a dynamic 'id' */}
//           <Route path="/cart" element={<Cart />} />
//           {/*load cart */}
//         </Routes>
//       </CartProvider>
//     </>
//   );
// }

// export default App;
// // this code sets up the main structure of application
