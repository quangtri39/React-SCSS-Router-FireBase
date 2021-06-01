import "./CheckoutItem.scss";
import { ReactComponent as DeleteIcon } from "../../SVG/x-lg.svg";
import { ReactComponent as Decrease } from "../../SVG/caret-left-fill.svg";
import { ReactComponent as Increase } from "../../SVG/caret-right-fill.svg";
import { useDispatch } from "react-redux";
import { removeItem, addItem, decreaseItem } from "../../redux/cart";
export default function CheckoutItem({ item }) {
  const { img, title, price, quantity } = item;
  const dispatch = useDispatch();
  const handleIncrease = () => {
    dispatch(addItem(item));
  };
  const handleDecrease = () => {
    dispatch(decreaseItem(item));
  };
  const handleDelete = () => {
    dispatch(removeItem(item));
  };
  return (
    <tr>
      <td>
        <img src={img} alt="product" className="img-product" />
      </td>
      <td>{title}</td>
      <td>
        <div className="quantity">
          <Decrease className="increase" onClick={handleDecrease} />
          <span>{quantity}</span>
          <Increase className="decrease" onClick={handleIncrease} />
        </div>
      </td>
      <td>{price}</td>
      <td>
        <DeleteIcon className="delete-icon" onClick={handleDelete} />
      </td>
    </tr>
  );
}
