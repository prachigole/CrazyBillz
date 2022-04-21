/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { auth, fs } from "../Config/Config";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export const Login = () => {
  const history = useHistory();

  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var [errorMsg, setErrorMsg] = useState("");
  var [successMsg, setSuccessMsg] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    //console.log(email, password);
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setSuccessMsg(
          "Login Successfull. You will now automatically be redirected to the Login."
        );
        setPassword = "";
        setEmail = "";
        setTimeout(() => {
          setSuccessMsg("");
          history.push("/");
        }, 2000)
      })
      .catch(error => setErrorMsg(error.message));
  };
  return (
    <div className="container">
      <br></br>
      <br></br>
      <br></br>
      <h1>Login</h1>
      <hr></hr>
      <br></br>
      {successMsg && (
        <>
          <div className="success-msg">{successMsg} </div>
          <br></br>
        </>
      )}
      <form className="form-group" autoComplete="off" onSubmit={handleLogin}>
        <div className="deets">
          <label>Email ID</label>
          <input
            type="email"
            className="form-control"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>
        </div>
        <br></br>
        <div className="deets">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          ></input>
        </div>
        <br></br>

        <div className="btn-box">
          <span>
            Already have an account Sign In
            <Link to="/Signup" className="link">
              {" "}
              Here
            </Link>
          </span>
        </div>
        <br></br>
        <div className="btn-box">
          <button className="btn btn-success btn-md">Login</button>
        </div>
      </form>
      {errorMsg && (
        <>
          <div className="error-msg">{errorMsg} </div>

          <br></br>
        </>
      )}
    </div>
  );
};
