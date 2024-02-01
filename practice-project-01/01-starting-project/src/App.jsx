import Header from "./components/header/header";
import UserInput from "./components/UserInput";
import Table from "./components/Table";

function App() {

  const INVESTMENTS = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
  };

  return (
    <>
      <Header />
      <main>
        <UserInput 
          initial={initialInvestment}
          annual={annualInvestment}
          expected={expectedReturn}
          length={duration}
        />
        <Table />
      </main>
    </>
    
  );
}

export default App
