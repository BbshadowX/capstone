import { useEffect, useState } from "react";
import SingleItem from "./SingleItem";

const PrductsAPI = "https://fakestoreapi.com/products";

const RenderAllItems = () => {
  const [item, setItem] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

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
      <h1>Items</h1>
      {item.map((item) => {
        return (
          <>
            selectedItem ? (<h1>Selected Item</h1>
            ) : (
            <SingleItem
              key={item.id}
              image={item.image}
              title={item.title}
              category={item.category}
              description={item.description}
              rating={item.rating.rate}
              price={item.price}
              setSelectedItem={setSelectedItem}
            />
            )
          </>
        );
      })}
    </>
  );
};
export default RenderAllItems;
