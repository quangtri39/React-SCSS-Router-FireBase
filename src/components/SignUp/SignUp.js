import "./SignUp.scss";
export default function SignUp() {
  const handleSummit = () => {};
  return (
    <div className="signUp">
      <h2>Sign Up</h2>
      <form onSubmit={handleSummit} className="form-sign-up">
        <label htmlFor="SUname">Name</label>
        <input type="text" id="SUname" placeholder="Your Name" />
        <label htmlFor="SUemail">Email</label>
        <input type="email" id="SUemail" placeholder="Email" />
        <label htmlFor="SUpassword">Password</label>
        <input type="password" id="SUpassword" placeholder="Password" />
        <label htmlFor="SUrepassword">RePassword</label>
        <input type="password" id="SUrepassword" placeholder="RePassword" />
        <button type="submit" className="btn btn-primary">
          SignUp
        </button>
      </form>
    </div>
  );
}
