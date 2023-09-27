import FilteredPruducts from "./FilteredProducts";
import { Link } from "react-router-dom";

export default function Departments({ products }) {
  //   console.log(params);
  return (
    <>
      <h1>Departments</h1>
      <nav id="DepartmentNavbar">
        <Link to="/mens">Mens Cloths</Link>
        <br />
        <Link to="/jewelery">Jewelery</Link>
        <br />
        <Link to="/electronics">Electronics</Link>
        <br />
        <Link to="/womens">Womens Cloths</Link>
      </nav>
      <br />
      <div>
        {products.map((product) => {
          return (
            <FilteredPruducts
              key={product.id}
              product={product}
              category={product.category}
            />
          );
        })}
      </div>
    </>
  );
}
