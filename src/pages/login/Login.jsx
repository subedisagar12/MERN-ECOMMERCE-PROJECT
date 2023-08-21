import { Link } from "react-router-dom"

function Login() {
    return (
      <>
      <div className="loginSignupClass">
      <div className='loginClass'>
      <form>
    {/* Email input */}
    <div className="form-outline mb-4">
      <input type="email" id="email" className="form-control width-input" />
      <label className="form-label">
        Email address
      </label>
    </div>
    {/* Password input */}
    <div className="form-outline mb-4">
      <input type="password" id="password" className="form-control" />
      <label className="form-label">
        Password
      </label>
    </div>
    {/* 2 column grid layout for inline styling */}
    <div className="row mb-4">
      <div className="col d-flex justify-content-center">
        {/* Checkbox */}
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue=""
            id="rememberme"
            defaultChecked=""
          />
          <label className="form-check-label" htmlFor="form2Example31">
            Remember me
          </label>
        </div>
      </div>
      <div className="col">
        {/* Simple link */}
        <a href="#!">Forgot password?</a>
      </div>
    </div>
    {/* Submit button */}
    <div className="login-center">
    <button type="button" className="btn btn-primary btn-block mb-4">
      Sign in
    </button>
    </div>
    {/* Register buttons */}
    <div className="text-center">
      <p>
        Not a member? <Link to = "/signup">Register</Link>
      </p>
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
      </>
    )
  }
  
  export default Login