import "./ProductItem.scss";
export default function ProductItem({ img, title, text, price }) {
  title = title.length > 20 ? title.slice(0, 20) + "..." : title;
  text = text.length > 90 ? text.slice(0, 90) + "..." : text;
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt="item" />
      <div className="card-container">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <div className="card-bottom">
          <a href="#" className="btn btn-primary">
            More info
          </a>
          <p className="card-price">${price}</p>
        </div>
      </div>
    </div>
  );
}
