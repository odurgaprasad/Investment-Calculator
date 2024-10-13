import React, { useState } from "react";
import Header from "./components/Header";
import UserInputs from "./components/UserInputs";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 8,
    duration: 10,
  });

  let userIsValid =
    userInput.initialInvestment >= 1000 &&
    userInput.annualInvestment >= 1 &&
    userInput.expectedReturn >= 0 &&
    userInput.duration >= 1;

  function handleInvestments(initialIdentifier, newValue) {
    setUserInput((prevUserInputs) => {
      return {
        ...prevUserInputs,
        [initialIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInputs onChange={handleInvestments} userInput={userInput} />
      {!userIsValid && (
        <p className="center"> Please Enter duration greater than zero.</p>
      )}
      {userIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
