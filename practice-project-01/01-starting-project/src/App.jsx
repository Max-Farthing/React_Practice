import Header from "./components/header/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

export default function App() {
    
    return (
        <>
            <Header />
            <main>
                <UserInput />
                <Results />
            </main>
        </>
    );
}