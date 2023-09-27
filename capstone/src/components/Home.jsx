import { useState } from "react";
import RenderProduct from "./RenderProduct";

export default function Home({ products }) {
  return (
    <>
      <h1>Home</h1>
      <div>
        {products.map((product) => {
          return <RenderProduct key={product.id} product={product} />;
        })}
      </div>
    </>
  );
}
