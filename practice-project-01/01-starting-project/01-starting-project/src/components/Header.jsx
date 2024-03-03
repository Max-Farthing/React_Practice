import money from '../assets/investment-calculator-logo.png';

export default function Header() {
    return (
        <header id='header'>
            <img src={money}/>
            <h1>React Investment Calculator</h1>
        </header>
    );
}