import { useState } from "react";

export default function UserInput() {
    const NUMS = {
        initialInvestment: 15000,
        annualInvestment: 900,
        expectedReturn: 6,
        duration: 10
    }

    const [value, setValue] = useState(NUMS);

    function handleChange(attribute, newValue) {
        setValue(prevUserInput => ({
            ...prevUserInput,
            [attribute] : newValue
        }));
    }

    return (
        <section id="user-input">
            <div className="input-group">
                <div>
                    <label>Initial Investment</label>
                    <input 
                        type="number" 
                        required 
                        value={value.initialInvestment}
                        onChange={(event) => handleChange('initialInvestment', event.target.value)}
                    />
                </div>
                <div>
                    <label>Annual Investment</label>
                    <input 
                        type="number" 
                        required 
                        value={value.annualInvestment}
                        onChange={(event) => handleChange('annualInvestment', event.target.value)}
                    />
                </div>
            </div>
            <div className="input-group">
                <div>
                    <label>Expected Return</label>
                    <input 
                        type="number" 
                        required 
                        value={value.expectedReturn}
                        onChange={(event) => handleChange('expectedReturn', event.target.value)}
                    />
                </div>
                <div>
                    <label>Duration</label>
                    <input 
                        type="number" 
                        required 
                        value={value.duration}
                        onChange={(event) => handleChange('duration', event.target.value)}
                    />
                </div>
            </div>
        </section>
    );
}