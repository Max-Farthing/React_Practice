

export default function UserInput({ func, nums }) {
    return (
        <section id="user-input">
            <div className="input-group">
                <div>
                    <label>Initial Investment</label>
                    <input type="number" value={nums.initialInvestment} onChange={(event) => func("initialInvestment", event.target.value)}/>
                </div>
                <div>
                    <label>Annual Investment</label>
                    <input type="number" value={nums.annualInvestment} onChange={(event) => func("annualInvestment", event.target.value)}/>
                </div>
            </div>
            <div className="input-group">
                <div>
                    <label>Expected Return</label>
                    <input type="number" value={nums.expectedReturn} onChange={(event) => func("expectedReturn", event.target.value)}/>
                </div>
                <div>
                    <label>Duration</label>
                    <input type="number" value={nums.duration} onChange={(event) => func("duration", event.target.value)}/>
                </div>
            </div>
        </section>
    );
}