const SingleItem = ({ image, title, category, description, rating, price }) => {
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
  );
};

export default SingleItem;
