import { useEffect } from "react";
import { useState } from "react";

const PrductsAPI = "https://fakestoreapi.com/products";

const RenderAllItems = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const GetAllItems = async () => {
      try {
        const response = await fetch(PrductsAPI);
        const items = await response.json();
        setItem(items);
        console.log(items);
        return items;
      } catch (error) {
        console.error(error);
      }
    };
    GetAllItems();
  }, []);

  return (
    <>
      {item.length &&
        item.map((item, i) => {
          return (
            <div key={i} id={i} className="Items">
              <h2 id={item.title}>{item.title}</h2>
              <img src={item.image} id="ItemPic" />
              <h3 id={item.price}>${item.price}</h3>
              <p id={item.description} className="description">
                {item.description}
              </p>
            </div>
          );
        })}
    </>
  );
};
export default RenderAllItems;
