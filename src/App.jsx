import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Navbar from "./components/Navbar";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer.jsx";
import ProductDetail from "./pages/ProductDetail/ProductDetail.jsx";
import Contact from "./pages/Contact.jsx";
import { AlertProvider } from "./context/AlertContext";

function App() {
  return (
    <AlertProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/productos/:id" element={<ProductDetail />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AlertProvider>
  );
}

export default App;
