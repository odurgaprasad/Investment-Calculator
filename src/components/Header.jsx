import React from "react";
import Logo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <>
      <header id="header">
        <img src={Logo} alt="Investment Logo is visible" />
        <h1>Investment Calculator</h1>
      </header>
    </>
  );
}
