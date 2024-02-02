import Header from "./components/header/header";
import UserInput from "./components/UserInput";
import Table from "./components/Table";
import { calculateInvestmentResults, formatter } from "./util/investment.js";
import { useState } from "react";


function App() {
  const [initialInvestment, setInitialInvestment] = useState('');
  const [annualInvestment, setAnnualInvestment] = useState('');
  const [expectedReturn, setExpectedReturn] = useState('');
  const [duration, setDuration] = useState('');
  const [investmentResults, setInvestmentResults] = useState([]);

  const handleChange = (value, inputType) => {
    switch (inputType) {
      case 'initialInvestment':
        setInitialInvestment(value);
        break;
      case 'annualInvestment':
        setAnnualInvestment(value);
        break;
      case 'expectedReturn':
        setExpectedReturn(value);
        break;
      case 'duration':
        setDuration(value);
        break;
      default:
        break;
    }
  };

  if (initialInvestment && annualInvestment && expectedReturn && duration) {
    const results = calculateInvestmentResults({
      initialInvestment,
      annualInvestment,
      expectedReturn,
      duration,
    });
    setInvestmentResults(results);
  }
  

  return (
    <>
      <Header />
      <main>
        <UserInput 
          initialInvestment={initialInvestment}
          annualInvestment={annualInvestment}
          expectedReturn={expectedReturn}
          duration={duration}
          onInputChange={handleChange}
        />
        <Table data={investmentResults}/>
      </main>
    </>
    
  );
}

export default App
