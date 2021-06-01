import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth, createUserProfileDocument } from "../firebase/firebase";
import { setcurrentUser } from "../redux/user";

export default function useFirebaseAuth() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubcribefromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          dispatch(setcurrentUser({ id: snapShot.id, ...snapShot.data() }));
        });
      } else {
        dispatch(setcurrentUser(null));
      }
    });
    return () => {
      unsubcribefromAuth();
    };
  }, [dispatch]);
}
