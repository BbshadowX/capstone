// import { useState, useEffect } from "react";
// import RenderProduct from "./RenderProduct";
// import SingleProduct from "./SingleProduct";

// const ProductsAPI = "https://fakestoreapi.com/products";

// export default function AllProducts() {
//   const [product, setProducts] = useState([]);
//   // const [category, setCategory] = useState([]);
//   // const [titleText, setTitleText] = useState("All Products");

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch(ProductsAPI);
//         const products = await response.json();
//         setProducts(products);
//         // console.log(products);
//         // return products;
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchProducts();
//   }, []);
//   //   const filteredDepartments = products
//   //   ? category === "all"
//   //    ? products
//   //    : products.filter((product => product.category === category)

//   // //    const filteredProducts = filteredDepartments.filter((product) => product.title.toLowerCase().includes(searchedProduct.toLowerCase())
//   //    )

//   return (
//     <div>
//       {product.map((product) => {
//         return <RenderProduct key={product.id} product={product} />;
//       })}
//       {product.map((product) => {
//         return <SingleProduct key={product.id} product={product} />;
//       })}
//     </div>
//   );
// }
