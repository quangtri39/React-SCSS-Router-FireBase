import { auth, createUserProfileDocument } from "../../firebase/firebase";
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
        <label htmlFor="SUname">Name</label>
        <input required type="text" id="SUname" placeholder="Your Name" />
        <label htmlFor="SUemail">Email</label>
        <input required type="email" id="SUemail" placeholder="Email" />
        <label htmlFor="SUpassword">Password</label>
        <input
          required
          type="password"
          id="SUpassword"
          placeholder="Password"
        />
        <label htmlFor="SUrepassword">RePassword</label>
        <input
          required
          type="password"
          id="SUrepassword"
          placeholder="RePassword"
        />
        <button type="submit" className="btn btn-primary">
          SignUp
        </button>
      </form>
    </div>
  );
}
