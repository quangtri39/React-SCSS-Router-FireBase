import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import "./SignInAndSignUp.scss";
export default function SignInAndSignUp() {
  return (
    <div className="container flex-row">
      <div className="items">
        <SignIn />
      </div>
      <div className="items">
        <SignUp />
      </div>
    </div>
  );
}
