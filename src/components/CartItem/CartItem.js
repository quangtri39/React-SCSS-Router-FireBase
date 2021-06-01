import "./CartItem.scss";
export default function CartItem({ item: { img, title, price, quantity } }) {
  title = title.length > 20 ? title.slice(0, 17) + "..." : title;
  return (
    <div className="cart-item">
      <img src={img} alt="item" />
      <div className="item-details">
        <span className="name">{title}</span>
        <span className="price">
          {quantity} x {price}
        </span>
      </div>
    </div>
  );
}
