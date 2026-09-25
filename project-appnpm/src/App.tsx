import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/layout";

import Home from "./pages/Home";
import Employees from "./pages/Employee";
import Product from "./pages/Products";
import Post from "./pages/Post";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/products" element={<Product />} />
        <Route path="/posts" element={<Post />} />
      </Route>
    </Routes>
  );
};

export default App;
