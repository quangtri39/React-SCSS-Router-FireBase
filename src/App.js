import "./App.scss";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import CategoryMain from "./layout/CategoryMain";
import ProductDetail from "./layout/ProductDetail";
import useFirebaseAuth from "./hook/useFirebaseAuth";
import SignInAndSignUp from "./layout/SignInAndSignUp/SignInAndSignUp";

function App() {
  useFirebaseAuth();
  const { currentUser } = useSelector((state) => state.user);

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={CategoryMain}></Route>
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
