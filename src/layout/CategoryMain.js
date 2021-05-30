import { useEffect, useState } from "react";
import Category from "../components/Category/Category";

export default function CategoryMain() {
  const [categoriesName, setCategoriesName] = useState([]);
  useEffect(() => {
    const getCategoryItems = async function () {
      const res = await fetch("https://fakestoreapi.com/products/categories");
      const categoryName = await res.json();
      setCategoriesName(categoryName);
    };
    getCategoryItems();
  }, []);

  return (
    <div className="container category">
      {categoriesName.length > 0
        ? categoriesName.map((categoryName, index) => (
            <Category key={index} isHomeMain nameCate={categoryName} />
          ))
        : null}
    </div>
  );
}
