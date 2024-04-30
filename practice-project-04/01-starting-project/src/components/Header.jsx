import headerIMG from ".././assets/logo.jpg";

export default function Header() {
    return (
        <header id="main-header">
            <div id="title">
                <img src={headerIMG} alt="React Food Image" />
                <h1>ReactFood</h1>
            </div>
            <nav>
                <button>Cart (0)</button>
            </nav>
        </header>
    );
}