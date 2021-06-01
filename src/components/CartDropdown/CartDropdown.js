import { useSelector } from "react-redux";
import Button from "../Button/Button";
import "./CartDropdown.scss";
export default function CartDropdown() {
  const { hidden } = useSelector((state) => state.cart);
  return !hidden ? (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <Button className="cart-button btn-Success">View Cart</Button>
    </div>
  ) : null;
}
