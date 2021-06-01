import { auth, createUserProfileDocument } from "../../firebase/firebase";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./SignUp.scss";
export default function SignUp() {
  const handleSummit = async (event) => {
    event.preventDefault();
    const { SUname, SUemail, SUpassword, SUrepassword } = event.target.elements;
    const displayName = SUname.value;
    const email = SUemail.value;
    const pass = SUpassword.value;
    const repass = SUrepassword.value;
    if (pass !== repass) {
      alert("password dont match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, pass);
      await createUserProfileDocument(user, { displayName: displayName });
      SUname.value = "";
      SUemail.value = "";
      SUpassword.value = "";
      SUrepassword.value = "";
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <div className="signUp">
      <h2>Sign Up</h2>
      <form onSubmit={handleSummit} className="form-sign-up">
        <Input
          required
          type="text"
          text="Name"
          id="SUname"
          placeholder="Your Name"
        />
        <Input
          required
          type="email"
          text="Email"
          id="SUemail"
          placeholder="Email"
        />
        <Input
          required
          type="password"
          text="Password"
          id="SUpassword"
          placeholder="Password"
        />
        <Input
          required
          type="password"
          id="SUrepassword"
          text="RePassword"
          placeholder="RePassword"
        />
        <Button type="submit" className="btn btn-primary">
          SignUp
        </Button>
      </form>
    </div>
  );
}
