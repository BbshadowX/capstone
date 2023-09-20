import { useState } from "react";

const RenderAllItems = (item, setSelectedItem) => {
  return (
    <div onclick={() => setSelectedItem(item.id)}>
      <div>item.name</div>
      <div>item.price</div>
      <div>item.description</div>
    </div>
  );
};
export default RenderAllItems;
