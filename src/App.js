import "./App.scss";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import CategoryMain from "./layout/CategoryMain";
import ProductDetail from "./layout/ProductDetail";
import SignInAndSignUp from "./layout/SignInAndSignUp/SignInAndSignUp";
import Checkout from "./components/Checkout/Checkout";

import useFirebaseAuth from "./hook/useFirebaseAuth";

function App() {
  useFirebaseAuth();
  const { currentUser } = useSelector((state) => state.user);

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={CategoryMain}></Route>
        <Route exact path="/Checkout" component={Checkout}></Route>
        <Route path="/product/:productID" component={ProductDetail}></Route>

        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
          }
        ></Route>
      </Switch>
    </>
  );
}

export default App;
