import { useNavigate, useParams } from "react-router-dom";

export default function FilteredPruducts({ product }) {
  const navigate = useNavigate();
  const params = useParams();
  //   console.log(product);

  const handleInfoClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div className="Products">
      {product.category === "men's clothing" ? (
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
      )}
    </div>
  );
}

//   console.log(product.category);

//   if (product.category === "men's clothing") {
//     console.log("1");
//   }

//   if (product.category === "jewelery") {
//     console.log("2");
//   }

//   if (product.category === "electronics") {
//     console.log("3");
//   }

//   if (product.category === "women's clothing") {
//     console.log("4");
//   }
