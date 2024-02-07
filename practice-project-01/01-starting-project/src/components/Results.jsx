import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ input }) {

    const initialInvestment = input.initialInvestment;
    const annualInvestment = input.annualInvestment;
    const expectedReturn = input.expectedReturn;
    const duration = input.duration;

    const data = calculateInvestmentResults({
        initialInvestment,
        annualInvestment,
        expectedReturn,
        duration
    })

    const initInvest = data[0].valueEndOfYear - data[0].interest - data[0].annualInvestment;

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {data.map(rowData => {
                    const totalInterest = rowData.valueEndOfYear - rowData.annualInvestment
                        * rowData.year - initInvest;
                    const totalInvested = rowData.valueEndOfYear - totalInterest;

                    return <tr key={rowData.year}>
                        <td>{rowData.year}</td>
                        <td>{formatter.format(rowData.valueEndOfYear)}</td>
                        <td>{formatter.format(rowData.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalInvested)}</td>
                    </tr>
                })}
            </tbody>
        </table>
    );
}