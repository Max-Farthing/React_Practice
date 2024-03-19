
export default function SideBar( { addProject, data, selectProject } ) {
    return (
        <div className="flex flex-col bg-stone-900 w-1/4 mt-16 rounded-xl p-8 space-y-8 items-center">
            <h1 className="text-white"><strong>YOUR PROJECTS</strong></h1>
            <button 
                className="bg-stone-500 text-white"
                onClick={addProject}
            >
                + Add Project
            </button>
            <ul>
                {data.map(item => (
                    <li key={item.id} className="text-white">
                        <button onClick={() => selectProject(item.id)}>
                            {item.title}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}