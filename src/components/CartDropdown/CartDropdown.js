import "./CartDropdown.scss";
import Button from "../Button/Button";
import { useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";
export default function CartDropdown() {
  const { hidden } = useSelector((state) => state.cart);
  const { cartItems } = useSelector((state) => state.cart);
  return !hidden ? (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <Button className="cart-button btn-Success">View Cart</Button>
    </div>
  ) : null;
}
