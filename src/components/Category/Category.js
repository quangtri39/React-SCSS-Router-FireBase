import ItemOverview from "../ItemOverview/ItemOverview";
import "./Category.scss";

export default function Category({ nameCate, items }) {
  return (
    <div className="category">
      <div className="category-title">{nameCate}</div>
      <div className="category-items">
        {items.length > 0 ? <ItemOverview items={items} maxItem={4} /> : null}
      </div>
    </div>
  );
}
// them data vao firebase
// const addCateItems = (nameCate, objectAdd) => {
//   const categoryRef = firestore.collection("category");
//   const newDocRef = categoryRef.doc();
//   newDocRef.set({ title: nameCate, items: objectAdd });
// };
