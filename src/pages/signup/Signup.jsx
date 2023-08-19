function Signup() {
  return (
    <div className="loginSignupClass">
      <div className="signupClass">
        <form>
        <div className="form-outline mb-4">
          <input type="text" id="firstname" className="form-control width-input" />
          <label className="form-label">First Name</label>
        </div>

        <div className="form-outline mb-4">
          <input type="text" id="middlename" className="form-control" />
          <label className="form-label">Middle Name</label>
        </div>

        <div className="form-outline mb-4">
          <input type="text" id="lastname" className="form-control" />
          <label className="form-label">Last Name</label>
        </div>

        <div className="form-outline mb-4">
          <input type="date" id="dob" className="form-control" />
          <label className="form-label">Date Of Birth</label>
        </div>

        <div className="form-outline mb-4">
          <input type="email" id="email" className="form-control" />
          <label className="form-label">Email</label>
        </div>

        <div className="form-outline mb-4">
          <input type="numbers" id="contact-number" className="form-control"/>
          <label className="form-label">Contact Number</label>
        </div>

        <div className="form-outline mb-4">
          <input type="password" id="password" className="form-control" />
          <label className="form-label">Enter Password</label>
        </div>

        <div className="form-outline mb-4">
          <input type="password" id="confirm-password" className="form-control" />
          <label className="form-label">Confirm Password</label>
        </div>

        <div className="signup-center">
        <button type="button" className="btn btn-primary btn-block mb-4">
        Register
        </button>
        </div>

        <div className="text-center">
          <p>or sign up with:</p>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-facebook-f" />
          </button>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-google" />
          </button>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-twitter" />
          </button>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-github" />
          </button>
        </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
