import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import CategoryMain from "./layout/CategoryMain";
import ProductDetail from "./layout/ProductDetail";
import { Switch, Route } from "react-router-dom";
import SignInAndSignUp from "./layout/SignInAndSignUp/SignInAndSignUp";

import { useEffect } from "react";
import { auth } from "./firebase/firebase";
import { useDispatch } from "react-redux";
import { setcurrentUser } from "./redux/user";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubcribefromAuth = auth.onAuthStateChanged((user) => {
      let currUser = null;
      if (user != null) {
        currUser = {
          displayName: user.displayName,
          email: user.email,
          uid: user.uid,
          photoURL: user.photoURL,
        };
      }
      dispatch(setcurrentUser(currUser));
    });
    return () => {
      unsubcribefromAuth();
    };
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={CategoryMain}></Route>
        <Route path="/product/:productID" component={ProductDetail}></Route>
        <Route path="/signin" component={SignInAndSignUp}></Route>
      </Switch>
    </>
  );
}

export default App;
