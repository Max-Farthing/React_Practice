import Header from "./components/header/header";
import UserInput from "./components/UserInput";
import Table from "./components/Table";
import { calculateInvestmentResults } from "./util/investment.js";
import { useState } from "react";

const INVESTMENTS = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0
};

function getTableInfo() {
  const outputs = calculateInvestmentResults(
    INVESTMENTS.initialInvestment,
    INVESTMENTS.annualInvestment,
    INVESTMENTS.expectedReturn,
    INVESTMENTS.duration
  )


}


function App() {
  const [ values, setValues ] = useState( INVESTMENTS );

  function setInvestments() {
    setValues(
      
    )
  }

  return (
    <>
      <Header />
      <main>
        <UserInput />
        <Table />
      </main>
    </>
    
  );
}

export default App
