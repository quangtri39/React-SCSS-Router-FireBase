import "./ItemOverview.scss";
import ProductItem from "../ProductItem/ProductItem";
export default function ItemOverview({ items, maxItem = 0 }) {
  const renderItems = () => {
    if (maxItem > 0) {
      return items.slice(0, maxItem);
    }
    return items;
  };
  return renderItems().map(({ id, title, image, description, price }) => (
    <ProductItem
      key={id}
      id={id}
      title={title}
      img={image}
      text={description}
      price={price}
    />
  ));
}
