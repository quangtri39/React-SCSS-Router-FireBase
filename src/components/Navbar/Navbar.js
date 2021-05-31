import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import "./Navbar.scss";
import { withRouter } from "react-router-dom";
function Navbar({ history }) {
  const { currentUser } = useSelector((state) => state.user);
  const handleClick = () => {
    history.push("/");
  };
  return (
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
    </div>
  );
}
export default withRouter(Navbar);
