import { useSelector } from "react-redux";
import Spinner from "../components/Spinner/Spinner";
import Category from "../components/Category/Category";
export default function CategoryMain() {
  const { category } = useSelector((state) => state.category);
  return category ? (
    <div className="container category">
      <Category nameCate="electronics" items={category["electronics"].items} />
      <Category nameCate="jewelery" items={category["jewelery"].items} />
      <Category
        nameCate="men's clothing"
        items={category["men's clothing"].items}
      />
      <Category
        nameCate="women's clothing"
        items={category["women's clothing"].items}
      />
    </div>
  ) : (
    <Spinner />
  );
}
