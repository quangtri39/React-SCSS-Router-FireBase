import "./SignIn.scss";
import { auth, signInWithGoogle } from "../../firebase/firebase";
import Input from "../Input/Input";
import Button from "../Button/Button";

export default function SignIn() {
  const handleSummit = async (event) => {
    event.preventDefault();
    const { SIemail, SIpassword } = event.target.elements;
    const email = SIemail.value;
    const pass = SIpassword.value;
    try {
      await auth.signInWithEmailAndPassword(email, pass);
      SIemail.value = "";
      SIpassword.value = "";
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="signIn">
      <h2>Sign In</h2>
      <form onSubmit={handleSummit} className="form-sign-in">
        <Input type="email" text="email" id="SIemail" placeholder="Email" />
        <Input
          type="password"
          text="Password"
          id="SIpassword"
          placeholder="Password"
        />
        <div className="btn-group">
          <Button type="submit" className="btn-primary">
            Sign In
          </Button>
          <Button onClick={signInWithGoogle} className="btn-primary">
            Sign In with Google
          </Button>
        </div>
      </form>
    </div>
  );
}
