import "./ShoppingIcon.scss";
import { ReactComponent as ShoppIcon } from "../../SVG/bag.svg";
import { useDispatch } from "react-redux";
import { sethidden } from "../../redux/cart";
export default function ShoppingIcon({ width = "3rem", height = "3rem" }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(sethidden());
  };
  return (
    <div className="card-icon" onClick={handleClick} style={{ width, height }}>
      <ShoppIcon className="shopping-icon" />
      <div className="items-count">0</div>
    </div>
  );
}
