import RenderAllItems from "./RenderAllItems";
const SingleItem2 = ({ items, setSelectedItem }) => {
   return (
      <div id="Item">
        <img src={image} alt="Item Pic" id="ItemPic" />
        <h2>{title}</h2>
        <p id="Price">
          <b>Price</b> ${price}
        </p>
        <p id="Description">
          <b>Description</b> {description}
        </p>
        <p id="Departments">
          <b>Departments</b> {category}
        </p>
        </div>
       {items.map((item) => {
           return (
               <RenderAllItems
               key={item.id}
               image={item.image}
               title={item.title}
               category={item.category}
               description={item.description}
               rating={item.rating.rate}
               price={item.price}
               />
               );
            }       
    )});
};
  
  export default SingleItem2;
  