import React from "react";
import "./Login.css";
import Frame from "../Images/Frame.png";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { useGoogleLogin } from "react-google-login";

const clientId =
  "522679274661-jr90khtn6kabutk5s26jqllvmosttf9c.apps.googleusercontent.com";

const Login = () => {
  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
    // refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <div className="login">
      <div className="card">
        <img src={Frame} className="logo1" />
        <h1>Log In</h1>
        <button onClick={signIn} className="btn1">
          Log in with Google <FaGoogle className="social" />
        </button>
        <button className="btn2">
          Log in with Facebook <FaFacebook className="social" />
        </button>
      </div>
    </div>
  );
};

export default Login;
