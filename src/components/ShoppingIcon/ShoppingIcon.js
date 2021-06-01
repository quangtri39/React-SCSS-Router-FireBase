import "./ShoppingIcon.scss";
import { ReactComponent as ShoppIcon } from "../../SVG/bag.svg";
import { useDispatch, useSelector } from "react-redux";
import { togglehidden } from "../../redux/cart";
export default function ShoppingIcon({ width = "3rem", height = "3rem" }) {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const cartCount = cartItems.reduce(
    (accumulator, currentValue) => accumulator + currentValue.count,
    0
  );
  const handleClick = () => {
    dispatch(togglehidden());
  };

  return (
    <div className="card-icon" onClick={handleClick} style={{ width, height }}>
      <ShoppIcon className="shopping-icon" />
      <div className="items-count">{cartCount}</div>
    </div>
  );
}
