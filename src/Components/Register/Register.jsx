import { ArrowForwardOutlined } from "@mui/icons-material";
import { useRef, useState } from "react";
import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = () => {
    setPasword(passwordRef.current.value);
  };

  return (
    <>
      <div className="register">
        <div className="top">
          <img src={require("../../Images/Logo/netFlix.png")} alt="" />
          <button className="loginButton">Sign In</button>
        </div>
        <div className="register-container">
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h2>Watch anywhere. Cancel anytime</h2>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership
          </p>
          {!email ? (
            <div className="input">
              <input
                type="email"
                placeholder="Email address"
                name="email"
                ref={emailRef}
                id=""
              />
              <button className="registerButton" onClick={handleStart}>
                Get Started
              </button>
              <ArrowForwardOutlined />
            </div>
          ) : (
            <form className="input">
              <input
                type="password"
                placeholder="Password"
                name="email"
                ref={passwordRef}
                id=""
              />
              <button className="registerButton" onClick={handleFinish}>
                Start
              </button>
              <ArrowForwardOutlined />
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Register;
