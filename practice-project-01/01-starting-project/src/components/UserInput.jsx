import Input from "./Input";

export default function UserInput({ initialInvestment, annualInvestment, expectedReturn, duration, onInputChange }) {
    return (
        <div id="user-input">
            <Input 
                label="Initial Investment"
                value={initialInvestment}
                onInputChange={(value) => onInputChange(value, 'initialInvestment')} 
            />
            <Input 
                label="Annual Investment"
                value={annualInvestment}
                onInputChange={(value) => onInputChange(value, 'annualInvestment')} 
            />
            <Input 
                label="Expected Return"
                value={expectedReturn}
                onInputChange={(value) => onInputChange(value, 'expectedReturn')} 
            />
            <Input 
                label="Duration"
                value={duration}
                onInputChange={(value) => onInputChange(value, 'duration')} 
            />
        </div>
    );
}