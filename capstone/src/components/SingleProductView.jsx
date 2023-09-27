import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SingleProductView({ product }) {
  // const [info, setInfo] = useState(null);
  const navigate = useNavigate();

  const handleInfoClick = () => {
    navigate(`/products/${product.id}`);
  };
  return (
    <div className="Single-Product-View">
      <h1>hi</h1>
      {/* {product.image ? (
        <img src={product.image} alt="Product Pic" id="ProductPic" />
      ) : (
        <></>
      )}
      <h2>{product.title}</h2>
      <p id="Price">
        <b>Price</b> ${product.price}
      </p>
      <p id="Description">
        <b>Description</b> {product.description}
      </p>
      <p id="Departments">
        <b>Departments</b> {product.category}
      </p>
      <button onClick={handleInfoClick} key={product.title}>
        Info
      </button>
      <button>Add To Cart</button> */}
    </div>
  );
}
