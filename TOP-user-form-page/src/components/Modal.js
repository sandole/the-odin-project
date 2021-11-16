import React from "react";
import logo from "../assets/logo.svg";

export default function Modal({ username, email, handleModal }) {
  return (
    <div className="modal">
      <div className="modal-container">
        <img className="modal-logo" src={logo} alt="" />
        <span className="modal-thank-you">Thank you {username}!</span>
        <span className="modal-message">
          We greatly appreciate you choosing Mailchimp! A confirmation email
          will be sent to <span className="blue-text-no-effect">{email}</span>{" "}
          shortly!
        </span>
        <button className="modal-button" onClick={handleModal}>
          Close
        </button>
      </div>
    </div>
  );
}
