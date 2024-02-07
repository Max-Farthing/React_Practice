export default function UserInput({ initialInvestment, annualInvestment, expectedReturn, duration, handle }) {
    

    return (
        <section id="user-input">
            <div className="input-group">
                <div>
                    <label>Initial Investment</label>
                    <input 
                        type="number" 
                        required 
                        value={initialInvestment}
                        onChange={(event) => handle('initialInvestment', event.target.value)}
                    />
                </div>
                <div>
                    <label>Annual Investment</label>
                    <input 
                        type="number" 
                        required 
                        value={annualInvestment}
                        onChange={(event) => handle('annualInvestment', event.target.value)}
                    />
                </div>
            </div>
            <div className="input-group">
                <div>
                    <label>Expected Return</label>
                    <input 
                        type="number" 
                        required 
                        value={expectedReturn}
                        onChange={(event) => handle('expectedReturn', event.target.value)}
                    />
                </div>
                <div>
                    <label>Duration</label>
                    <input 
                        type="number" 
                        required 
                        value={duration}
                        onChange={(event) => handle('duration', event.target.value)}
                    />
                </div>
            </div>
        </section>
    );
}