import Category from "../components/Category/Category";

export default function CategoryMain() {
  return (
    <div className="container category">
      <Category isHomeMain nameCate="electronics" />
      <Category isHomeMain nameCate="jewelery" />
      <Category isHomeMain nameCate="men's clothing" />
      <Category isHomeMain nameCate="women's clothing" />
    </div>
  );
}
