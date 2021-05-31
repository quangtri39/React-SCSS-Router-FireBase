import "./SignIn.scss";
import { auth, signInWithGoogle } from "../../firebase/firebase";

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
        <label htmlFor="SIemail">Email</label>
        <input type="email" id="SIemail" placeholder="Email" />
        <label htmlFor="SIpassword">Password</label>
        <input type="password" id="SIpassword" placeholder="Password" />
        <div className="btn-group">
          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
          <button onClick={signInWithGoogle} className="btn btn-primary">
            Sign In with Google
          </button>
        </div>
      </form>
    </div>
  );
}
