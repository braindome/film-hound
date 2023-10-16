import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './checkout.css';

function Checkout() {
  const [showPhoneNumberInput, setShowPhoneNumberInput] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showPayButton, setShowPayButton] = useState(false);
  const [showKlarnaOptions, setShowKlarnaOptions] = useState(false);
  const [showPayPalInput, setShowPayPalInput] = useState(false);
  const [paypalEmail, setPaypalEmail] = useState("");

  const navigate = useNavigate();

  const handleSwishClick = () => {
    setShowPhoneNumberInput(true);
    setShowKlarnaOptions(false);
    setShowPayPalInput(false);
  }

  const handleKlarnaClick = () => {
    setShowKlarnaOptions(!showKlarnaOptions);
    setShowPhoneNumberInput(false);
    setShowPayPalInput(false);
  }

  const handlePayPalClick = () => {
    setShowPayPalInput(true);
    setShowPhoneNumberInput(false);
    setShowKlarnaOptions(false);
  }

  const handlePhoneNumberChange = (e) => {
    const inputValue = e.target.value;
    // Use a regular expression to match only numeric characters
    const numericValue = inputValue.replace(/\D/g, ''); // Remove non-numeric characters
  
    setPhoneNumber(numericValue);
    setShowPayButton(!!numericValue);
  }

  const handlePaypalEmailChange = (e) => {
    const emailValue = e.target.value;
    setPaypalEmail(emailValue);
    setShowPayButton(!!emailValue);
  }

  const handlePayment = () => {
    alert("Payment processed! Thank you for your purchase");
    // After the alert is dismissed, navigate back to the home page
    navigate('/home');
  }

  return (
    <div>
      <h1>How do you want to pay?</h1>
      <div className="button-container">
        <button onClick={handleSwishClick}>Swish</button>
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
          <button onClick={handleKlarnaClick}>Klarna</button>
          {showKlarnaOptions && (
            <div className="klarna-options">
              <button onClick={handlePayment}>Pay now</button>
              <button onClick={handlePayment}>Pay after 7 days</button>
              <button onClick={handlePayment}>Pay after 30 days</button>
            </div>
          )}
        </div>
        <button onClick={handlePayPalClick}>PayPal</button>
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
