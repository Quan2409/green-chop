import { Routes, Route } from "react-router-dom";
import HomePage from "../page/Homepage/HomePage";
import AboutPage from "../page/Aboutpage/AboutPage";
import ProductPage from "../page/ProductPage/ProductPage";
import ProductDetail from "../page/ProductPage/ProductDetail";
import ProductCart from "../page/ProductPage/ProductCart";
import NewsPage from "../page/Newpage/NewsPage";
import NewsDetail from "../page/Newpage/NewsDetails";
import Contact from "../page/ContactPage/Contact";

const MainRoute = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/product/" element={<ProductPage />} />
    <Route path="/product/:productId?" element={<ProductDetail />} />
    <Route path="/product/cart" element={<ProductCart />} />
    <Route path="/news" element={<NewsPage />} />
    <Route path="/news/:newsId?" element={<NewsDetail />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);

export default MainRoute;
