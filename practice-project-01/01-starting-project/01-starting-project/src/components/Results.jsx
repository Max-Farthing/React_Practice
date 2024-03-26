import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ data }) {

    const initialInvestment = data.initialInvestment;
    const annualInvestment = data.annualInvestment;
    const expectedReturn = data.expectedReturn;
    const duration = data.duration;

    const newData = calculateInvestmentResults(data);

    const initInvest = newData[0].valueEndOfYear - newData[0].interest - newData[0].annualInvestment;

    return (
        <table id='result'>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Intereset</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {newData.map(rowData => {
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