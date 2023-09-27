import SingleProductView from "./SingleProductView";
import FilteredPruducts from "./FilteredProducts";
import { Link, useParams } from "react-router-dom";

export default function SingleProduct({ product }) {
  const params = useParams();
  //   console.log(params);
  //   console.log(product);

  return (
    <>
      <div>
        <h1>{params.category}</h1>
      </div>
      {/* <div>
        {products.map((product) => {
          return <SingleProductView key={product.id} product={product} />;
        })}
      </div> */}
    </>
  );
}

// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// // import AllProducts from "../../api/AllProducts";
// const ProductsAPI = "https://fakestoreapi.com/products";

// export default function SingleProduct({ products }) {
//   return (
//     <div>
//       <h1>{params.id}</h1>
//       {product.map((product) => {
//         return (
//           <SingleProductView
//             key={product.id}
//             product={product}
//             title={product.title}
//           />
//         );
//       })}
//     </div>
//   );
// }
