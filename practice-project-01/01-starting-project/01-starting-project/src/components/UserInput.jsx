

export default function UserInput() {
    return (
        <section id="user-input">
            <div className="input-group">
                <div>
                    <label>Initial Investment</label>
                    <input />
                </div>
                <div>
                    <label>Annual Investment</label>
                    <input />
                </div>
            </div>
            <div className="input-group">
                <div>
                    <label>Expected Return</label>
                    <input />
                </div>
                <div>
                    <label>Duration</label>
                    <input />
                </div>
            </div>
        </section>
    );
}