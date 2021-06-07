import "./Checkout.scss";
import CheckoutItem from "./CheckoutItem";
import { useSelector } from "react-redux";
export default function Checkout() {
  const { cartItems } = useSelector((state) => state.cart);

  const totalAmount = cartItems.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );
  return (
    <div className="checkout-container">
      <table className="checkout">
        <tbody>
          <tr>
            <th style={{ width: "7rem" }}>Product</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th></th>
          </tr>
        </tbody>
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} item={cartItem} />
        ))}
      </table>
      <div className="total-amount">Total: ${totalAmount}</div>
    </div>
  );
}
