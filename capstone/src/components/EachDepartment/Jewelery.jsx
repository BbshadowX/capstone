import { useNavigate, useParams } from "react-router-dom";

export default function Jewelery({ product }) {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);

  const handleInfoClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div className="Products">
      <h1>Jewelery</h1>
      {/* {product.category === "jewelery" ? (
        <div>
          <img src={product.image} alt="Product Pic" id="ProductPic" />
          <h2 id="ProductTitle">{product.title}</h2>
          <p id="Price">
            <b>Price</b> ${product.price}
          </p>
          <p id="Description">
            <b>Description</b> ${product.description}
          </p>
          <p id="Departments">
            <b>Department</b> ${product.category}
          </p>
          <button onClick={handleInfoClick} key={product.title}>
            Info
          </button>
        </div>
      ) : (
        <></>
      )} */}
    </div>
  );
}
