import { useState } from "react";

import Header from "./components/header/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

export default function App() {

    const NUMS = {
        initialInvestment: 15000,
        annualInvestment: 900,
        expectedReturn: 6,
        duration: 10
    }

    const [value, setValue] = useState(NUMS);

    function handleChange(attribute, newValue) {
        setValue(prevUserInput => {
            console.log(attribute + ' ' + newValue);
            return {
                ...prevUserInput,
                [attribute]: +newValue
            };
        });
    }
    
    return (
        <>
            <Header />
            <main>
                <UserInput 
                    initialInvestment={value.initialInvestment}
                    annualInvestment={value.annualInvestment}
                    expectedReturn={value.expectedReturn}
                    duration={value.duration}
                    handle={handleChange}
                />
                <Results />
            </main>
        </>
    );
}