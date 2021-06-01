import "./Button.scss";
export default function Button({ className = "", ...props }) {
  return <button className={`btn ${className}`} {...props} />;
}
