import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import ShoppingIcon from "../ShoppingIcon/ShoppingIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
function Navbar({ history }) {
  const { currentUser } = useSelector((state) => state.user);
  const handleClick = () => {
    history.push("/");
  };
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <div className="logo-icon" onClick={handleClick}></div>
          <div className="logo-brand" onClick={handleClick}>
            E-Commerse
          </div>
        </div>
        <div className="navbar-item">ABOUT</div>
        <div className="navbar-item">SERVICES</div>
        {currentUser == null ? (
          <Link to="/signin" className="navbar-item">
            SING IN
          </Link>
        ) : (
          <div
            className="navbar-item"
            onClick={() => {
              auth.signOut();
            }}
          >
            SIGN OUT
          </div>
        )}
        <ShoppingIcon />
      </div>
      <CartDropdown />
    </>
  );
}
export default withRouter(Navbar);
