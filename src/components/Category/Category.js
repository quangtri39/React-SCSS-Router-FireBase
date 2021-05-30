import { useState, useEffect } from "react";
import ProductItem from "../ProductItem/ProductItem";
import "./Category.scss";
export default function Category({ nameCate, isHomeMain }) {
  const [categoriesItems, setCategoriesItems] = useState([]);

  useEffect(() => {
    console.log(nameCate);
    const getCategoryItems = async function () {
      const res = await fetch(
        `https://fakestoreapi.com/products/category/${nameCate}`
      );
      const category = await res.json();
      setCategoriesItems(category);
      console.log(category);
    };
    getCategoryItems();
  }, [nameCate]);

  const renderItems = () => {
    if (isHomeMain) {
      return categoriesItems.slice(0, 4);
    }
    return categoriesItems;
  };
  return (
    <div className="category">
      <div className="category-title">{nameCate}</div>
      <div className="category-items">
        {renderItems().map(({ id, title, image, description, price }) => (
          <ProductItem
            key={id}
            title={title}
            img={image}
            text={description}
            price={price}
          />
        ))}
      </div>
    </div>
  );
}
