import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import sideArt from "../assets/sideArt.png";
import showEye from "../assets/showEye.png";
import hideEye from "../assets/hideEye.png";
import checkCircle from "../assets/checkCircle.png";
import Modal from "./Modal";

export default function Form() {
  const [showHide, setShowHide] = useState("Show");
  const [eye, setEye] = useState(showEye);
  const [showHidePassword, setShowHidePassword] = useState("password");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [signupButton, setSignupButton] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleShowHide = () => {
    showHide === "Show" ? setShowHide("Hide") : setShowHide("Show");
    showHidePassword === "password"
      ? setShowHidePassword("text")
      : setShowHidePassword("password");
    eye === showEye ? setEye(hideEye) : setEye(showEye);
  };

  // password regex
  const lowercaseRegex = /[a-z]+/g;
  const [lowerCheck, setLowerCheck] = useState(false);

  const uppercaseRegex = /[A-Z]+/g;
  const [upperCheck, setUpperCheck] = useState(false);

  const numberRegex = /[0-9]/g;
  const [numberCheck, setNumberCheck] = useState(false);

  const specialCharRegex = /[$&+,:;=?@#|'<>.^*()%!-]/g;
  const [specialCheck, setSpecialCheck] = useState(false);

  const regexAll = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const [passwordCheck, setPasswordCheck] = useState(false);
  const [characterCheck, setCharacterCheck] = useState(false);

  useEffect(() => {
    let lower = lowercaseRegex.test(password);
    let upper = uppercaseRegex.test(password);
    let num = numberRegex.test(password);
    let spec = specialCharRegex.test(password);
    let char = password.length > 7;
    let rAll = regexAll.test(password);

    setLowerCheck(lower);
    setUpperCheck(upper);
    setNumberCheck(num);
    setSpecialCheck(spec);
    setCharacterCheck(char);
    setPasswordCheck(rAll);

    passwordCheck ? setSignupButton(true) : setSignupButton(false);
  }, [password, passwordCheck]);

  const handleModal = (e) => {
    e.preventDefault();
    console.log("show modal");
    setShowModal(!showModal);
  };

  return (
    <>
      {showModal && (
        <Modal username={username} email={email} handleModal={handleModal} />
      )}
      <div className="content">
        <img className="logo" src={logo} alt="" />

        {/* left side */}
        <div className="content-left">
          <div className="form-content">
            <span className="form-header">Welcome to Mailchimp</span>
            <span className="pre-form-text">
              Find your people. Engage your customers. Build your brand. Do it
              all with Mailchimp’s Marketing Platform. Already have an account?{" "}
              <span className="blue-text">Log in</span>
            </span>
            <form>
              {/* email */}
              <div className="form-input-container">
                <label className="form-label" for="signup-email">
                  Email
                </label>
                <input
                  className="form-input"
                  type="email"
                  name="signup"
                  id="signup-email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* username */}
              <div className="form-input-container">
                <label className="form-label" for="signup-username">
                  Username
                </label>
                <input
                  className="form-input"
                  type="text"
                  name="signup"
                  id="signup-username"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <div className="username-tip">
                  Choose a username that contains only letters and numbers, or
                  use your email address. This is for login only.
                </div>
              </div>

              {/* password */}
              <div className="form-input-container">
                <label className="form-label" for="signup-password">
                  Password
                </label>
                <input
                  className="form-input"
                  type={showHidePassword}
                  name="signup"
                  id="signup-password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className="show-hide-container" onClick={handleShowHide}>
                  <img
                    className="show-hide-icon"
                    src={eye}
                    alt={`${showHide} eye icon`}
                  />

                  <span className="show-hide-text">{showHide}</span>
                </div>
              </div>

              {!passwordCheck && (
                <div className="password-requirements">
                  <div className="password-requirements-ul-left">
                    <ul className="password-requirements-ul">
                      <li className={`password-requirements-li-${lowerCheck}`}>
                        <span
                          className={`password-requirements-span-${lowerCheck}`}
                        >
                          One lowercase character
                        </span>
                      </li>
                      <li className={`password-requirements-li-${upperCheck}`}>
                        <span
                          className={`password-requirements-span-${upperCheck}`}
                        >
                          One uppercase character
                        </span>
                      </li>
                      <li className={`password-requirements-li-${numberCheck}`}>
                        <span
                          className={`password-requirements-span-${numberCheck}`}
                        >
                          One number
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="password-requirements-ul-right">
                    <ul className="password-requirements-ul">
                      <li
                        className={`password-requirements-li-${specialCheck}`}
                      >
                        <span
                          className={`password-requirements-span-${specialCheck}`}
                        >
                          One special character
                        </span>
                      </li>
                      <li
                        className={`password-requirements-li-${characterCheck}`}
                      >
                        <span
                          className={`password-requirements-span-${characterCheck}`}
                        >
                          8 characters minimum
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {passwordCheck && (
                <div className="password-passes-check">
                  <img className="checkCircle" src={checkCircle} alt="" />
                  Your password is secure and you're all set!
                </div>
              )}

              <div className="signup-submit-container">
                <button
                  className={`signup-button-${signupButton}`}
                  onClick={handleModal}
                >
                  Sign Up
                </button>
                <div className="email-updates-checkbox-container">
                  <div>
                    <input
                      type="checkbox"
                      id="email-checkbox"
                      className="regular-checkbox"
                    />
                    <label htmlFor="email-checkbox"></label>
                  </div>
                  <span>
                    I don't want to receive updates from Mailchimp related to
                    marketing best practices, product and feature updates, and
                    promotions.
                  </span>
                </div>
              </div>

              <div className="tos-div">
                By clicking the "Sign Up" button, you are creating a Mailchimp
                account, and you agree to Mailchimp's{" "}
                <span className="blue-text underline-text">Terms of Use</span>{" "}
                and{" "}
                <span className="blue-text underline-text">Privacy Policy</span>
                .
              </div>

              <div className="footer">
                <span>
                  ©2001–2021 All Rights Reserved. Mailchimp® is a registered
                  trademark of The Rocket Science Group.
                </span>
                <span>
                  <span className="underline-text">Cookie Preferences</span>,{" "}
                  <span className="underline-text">Privacy</span>, and{" "}
                  <span className="underline-text">Terms</span>.
                </span>
              </div>
            </form>
          </div>
        </div>

        {/* right side */}
        <div className="content-right">
          <img className="sideArt" src={sideArt} alt="side art" />
        </div>
      </div>
    </>
  );
}
