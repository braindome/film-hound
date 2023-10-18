import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./checkout.css";
import { useSelector } from "react-redux";
import swishImage from '../assets/swish.png'
import klarnaImage from '../assets/klarna.png'
import paypalImage from '../assets/paypal.png'


function Checkout() {
  const [showPhoneNumberInput, setShowPhoneNumberInput] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showPayButton, setShowPayButton] = useState(false);
  const [showKlarnaOptions, setShowKlarnaOptions] = useState(false);
  const [showPayPalInput, setShowPayPalInput] = useState(false);
  const [paypalEmail, setPaypalEmail] = useState("");

  const navigate = useNavigate();
  const username = useSelector((state) => state.user.username);

  const handleSwishClick = () => {
    setShowPhoneNumberInput(true);
    setShowKlarnaOptions(false);
    setShowPayPalInput(false);
  };

  const handleKlarnaClick = () => {
    setShowKlarnaOptions(!showKlarnaOptions);
    setShowPhoneNumberInput(false);
    setShowPayPalInput(false);
  };

  const handlePayPalClick = () => {
    setShowPayPalInput(true);
    setShowPhoneNumberInput(false);
    setShowKlarnaOptions(false);
  };

  const handlePhoneNumberChange = (e) => {
    const inputValue = e.target.value;
    // Use a regular expression to match only numeric characters
    const numericValue = inputValue.replace(/\D/g, ""); // Remove non-numeric characters

    setPhoneNumber(numericValue);
    setShowPayButton(!!numericValue);
  };

  const handlePaypalEmailChange = (e) => {
    const emailValue = e.target.value;
    setPaypalEmail(emailValue);
    setShowPayButton(!!emailValue);
  };

  const handlePayment = () => {
    alert("Payment processed! Thank you for your purchase, " + username);
    // After the alert is dismissed, navigate back to the home page
    navigate("/home");
  };

  return (
    <div className="checkout-container">
      <h1>How do you want to <span className="blue">pay?</span></h1>
      <div className="button-container">
      <button onClick={handleSwishClick} className="swish-button">
        <img src={swishImage} alt="Swish Logo" className="swish-image" />
        <span className="swish-text">Swish</span>
        </button>

        {showPhoneNumberInput && (
          <div>
            <input
              type="text"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
            {showPayButton && (
              <button className="pay-button" onClick={handlePayment}>
                Pay
              </button>
            )}
          </div>
        )}
        <div className="klarna-container">
        <button onClick={handleKlarnaClick} className="klarna-button">
        <img src={klarnaImage} alt="Klarna Logo" className="klarna-image" />
        <span className="klarna-text">Klarna</span>
    </button>


          {showKlarnaOptions && (
            <div className="klarna-options">
              <button onClick={handlePayment}>Pay now</button>
              <button onClick={handlePayment}>Pay after 7 days</button>
              <button onClick={handlePayment}>Pay after 30 days</button>
            </div>
          )}
        </div>
        <button onClick={handlePayPalClick} className="paypal-button">
        <img src={paypalImage} alt="PayPal Logo" className="paypal-image" />
        <span className="paypal-text">PayPal</span>
        </button>


        {showPayPalInput && (
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              value={paypalEmail}
              onChange={handlePaypalEmailChange}
            />
            {showPayButton && (
              <button className="pay-button" onClick={handlePayment}>
                Pay
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
