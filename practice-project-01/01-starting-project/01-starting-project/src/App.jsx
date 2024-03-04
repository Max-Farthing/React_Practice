import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { useState } from "react";

function App() {

    const initialFormData = {
        initialInvestment: 15000,
        annualInvestment: 1200,
        expectedReturn: 10,
        duration: 8
    };

    const [formData, setFormData] = useState(initialFormData);
    const valid = formData.duration > 0;

    function handleChange(category, number) {
        const newObj = {...initialFormData};
        newObj[category] = +number;
        setFormData(newObj);
    }

    return (
      <>
          <Header />
          <main>
              <UserInput func={handleChange} nums={formData}/>
              {valid ? <Results data={formData}/> : <p className="center">Invalid Duration</p>}
          </main>
      </>
    );
}

export default App;
