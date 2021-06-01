import "./Input.scss";
export default function Input({ id, text, className = "", ...props }) {
  return (
    <>
      {text ? <label htmlFor={id}>{text}</label> : null}
      <input id={id} className={`input ${className}`} {...props} />
    </>
  );
}
