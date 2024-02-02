import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [ userInput, setUserInput ] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
}); 

function handleChange(inputIdentifier, newValue) {
  setUserInput(prevUserInput => {
      const newInput = {...prevUserInput};
      newInput[inputIdentifier] = +newValue;
      return newInput;
  });
}

  return (
    <>
      <Header />
      <main>
        <UserInput 
          onChangeInput={handleChange} 
          userInput={userInput}
        />
        <Results input={userInput}/>
      </main>
    </>
  );
}

export default App
