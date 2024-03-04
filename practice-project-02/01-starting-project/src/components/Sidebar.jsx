
export default function Sidebar({ openMenu }) {
    return(
        <div>
            <h1>YOUR PROJECTS</h1>
            <button onClick={openMenu}>+ Add Project</button>
            <ul>

            </ul>
        </div>
    );
}