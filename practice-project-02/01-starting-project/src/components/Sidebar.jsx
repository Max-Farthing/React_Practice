
export default function Sidebar({ data, openMenu, openTask }) {
    return (
        <div>
            <h1>YOUR PROJECTS</h1>
            <button 
                onClick={() => openMenu(true)}
                className="bg-black text-white rounded-md"
            >
                + Add Project
            </button>
            <ul>
                {data.map(item =>(
                    <li key={item.id}><button onClick={() => openTask(true)}>{item.title}</button></li>
                ))}
                {/* map data here for li elements of projects */}
            </ul>
        </div>
    );
}