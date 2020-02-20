// IMPORT REACT
import React, { useRef } from "react";
import API from "../../utils/API";
import Consumer from "../../configContext.js";

const LogIn = () => {
  const emailRef = useRef();
  const passRef = useRef();
  var loginSuccess = true;

  return (
    <Consumer>
      {context => {

        function login() {
          //Call api to login and verify credentials
          API.login({
            email: emailRef.current.value,
            password: passRef.current.value
          }).then(res => {
            //if credentials are correct, update state with user
            if (res.data.success) {
              loginSuccess = true;
              console.log("LOGIN RES", res);
              context.login(loginSuccess, res.data.user);
            }
          }).catch(err => {
            //if credentials are not correct update the state and display invalid message
            console.log("LOGIN ERROR", err);
            loginSuccess = false;
            context.login(loginSuccess);
          });
        }

        function signup() {
          //call API to signup
          API.signup({
            email: emailRef.current.value,
            password: passRef.current.value
          }).then(res => {
            //if input is valid, user is now signed up and logged in
            console.log("SIGNUP RES", res);
            loginSuccess = true;
            context.login(true, res.data);
          }).catch(err => {
            //if input is not valid, retry
            console.log("SIGUP ERROR", err);
            loginSuccess = false;
            context.login(loginSuccess);
          });

        }

        function valid() {
          if (!loginSuccess) {
            return (<div className="grey-text text-lighten-1">Invalid username or password</div>);
          }
        }


        return (
          <div className="container section">
            <div className="row">
              <h3 className="col s12">
                Enter email and password:
              </h3>
            </div>
            <div className="row">

              <form className="col s12">
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix fas fa-at"></i>
                    <input id="inputEmail" className="validate" ref={emailRef} type="email"></input>
                    <label for="inputEmail">Email</label>
                    <span className="helper-text" data-error="Enter valid email"></span>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix fas fa-key"></i>
                    <input id="inputPass" key="pass" ref={passRef} type="password"></input>
                    <label for="inputPass">Password</label>
                  </div>
                </div>
                <div className="row">
                  {valid()}
                </div>
                <div className="row">
                  <div
                    className="btn waves-effect waves-light col s2"
                    onClick={() => signup()}>Signup<i className="material-icons right">send</i>
                  </div>
                  <div
                    className="btn waves-effect waves-light col s2 offset-s1"
                    onClick={() => login()}>Login<i className="material-icons right">send</i>
                  </div>

                </div>
              </form>
            </div>
          </div>
        )
      }}
    </Consumer>
  )
}

export default LogIn;