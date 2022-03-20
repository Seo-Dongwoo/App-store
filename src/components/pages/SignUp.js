import React, { useState } from "react";
import "../../App.css";
import FormSignup from "../SignUpForm/FormSignup";
import FormSuccess from "../SignUpForm/FormSuccess";
import "../css/Form.css";

export default function SignUp() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      <div className="form-container">
        <span className="close-btn"></span>
        <div className="form-content-left">
          <img src="images/AppleLogo.jpg" alt="AppLogo" className="form-img" />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
}
