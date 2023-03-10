import { ArrowForwardOutlined } from "@mui/icons-material";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="login">
        <div className="top">
          <img src={require("../../Images/Logo/netFlix.png")} alt="" />
        </div>
        <div className="register-container">
          <form>
            <h1>Sign In</h1>
            <input
              type="email"
              placeholder="Email or Phone number"
              name=""
              id=""
            />
            <input type="password" placeholder="Password" name="" id="" />
            <button className="loginButton">Sign In</button>
            <span>
              New to Netflix? <b>Sign up now.</b>
            </span>
            <small>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <b>Learn more</b>
            </small>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
