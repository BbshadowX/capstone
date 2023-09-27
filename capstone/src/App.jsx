import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import "./App.css";
import Departments from "./components/Departements";
import SingleProduct from "./components/SingleProduct";
import Electronics from "./components/EachDepartment/electronics";
import Jewelery from "./components/EachDepartment/Jewelery";
import MensCloths from "./components/EachDepartment/MensCloths";
import WomensCloths from "./components/EachDepartment/WomensCloths";

const ProductsAPI = "https://fakestoreapi.com/products";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(ProductsAPI);
        const result = await response.json();
        setProducts(result);
        console.log(result);
      } catch (error) {
        console.error("There was an error fetching products");
      }
    };
    fetchProducts();
  }, []);
  return (
    <>
      <NavBar />
      <div className="main-body">
        <Routes>
          <Route
            path="/"
            element={<Home products={products} setProducts={setProducts} />}
          />
          <Route
            path="/departments"
            element={
              <Departments products={products} setProducts={setProducts} />
            }
          />
          <Route
            path="=/departments/:id"
            element={
              <Departments products={products} setProducts={setProducts} />
            }
          />
          <Route
            path="/products/:category"
            element={
              <SingleProduct products={products} setProducts={setProducts} />
            }
          />
          <Route
            path="/electronics"
            element={
              <Electronics products={products} setProducts={setProducts} />
            }
          />
          <Route
            path="/jewelery"
            element={<Jewelery products={products} setProducts={setProducts} />}
          />
          <Route
            path="/mens"
            element={
              <MensCloths products={products} setProducts={setProducts} />
            }
          />
          <Route
            path="/womens"
            element={
              <WomensCloths products={products} setProducts={setProducts} />
            }
          />
        </Routes>
      </div>
      <div>
        {products.map((product) => {
          return (
            <Electronics
              key={product.id}
              product={product}
              category={product.category}
            />
          );
        })}
      </div>
      <div>
        {products.map((product) => {
          return <SingleProduct key={product.id} product={product} />;
        })}
      </div>
    </>
  );
}
