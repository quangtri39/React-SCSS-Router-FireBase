import "./CartDropdown.scss";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { togglehidden } from "../../redux/cart";
function CartDropdown({ history }) {
  const dispatch = useDispatch();
  const { hidden } = useSelector((state) => state.cart);
  const { cartItems } = useSelector((state) => state.cart);

  return !hidden ? (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length !== 0 ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <div className="no-item">No item in cart</div>
        )}
      </div>
      <Button
        className="cart-button btn-Success"
        onClick={() => {
          dispatch(togglehidden());
          history.push("/checkout");
        }}
      >
        GO TO CHECKOUT
      </Button>
    </div>
  ) : null;
}
export default withRouter(CartDropdown);
