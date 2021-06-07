import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setcategory } from "../redux/category";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../firebase/firebase";
export default function useCategoryFirebase() {
  const dispatch = useDispatch();
  useEffect(() => {
    const collectionRef = firestore.collection("category");
    const unsubscribe = collectionRef.onSnapshot(async (snapshot) => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(setcategory(collectionMap));
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch]);
}
// them data vao firebase
// const addCateItems = ( objectAdd) => {
//   const categoryRef = firestore.collection("products");
//   const newDocRef = categoryRef.doc();
//   newDocRef.set({ items: objectAdd });
// };
