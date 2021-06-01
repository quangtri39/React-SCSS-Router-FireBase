import "./ProductItem.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart";
export default function ProductItem({ id, img, title, text, price }) {
  const dispatch = useDispatch();

  const shortTitle = title.length > 20 ? title.slice(0, 20) + "..." : title;
  const shortText = text.length > 85 ? text.slice(0, 85) + "..." : text;

  const handleClick = () => {
    dispatch(addItem({ id, img, title, price }));
  };
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt="item" />
      <div className="card-container">
        <h5 className="card-title">{shortTitle}</h5>
        <p className="card-text">{shortText}</p>
        <div className="card-bottom">
          <Link to={`/product/${id}`} className="btn btn-primary">
            More info
          </Link>
          <Button className="btn-Success" onClick={handleClick}>
            +
          </Button>
          <p className="card-price">${price}</p>
        </div>
      </div>
    </div>
  );
}
