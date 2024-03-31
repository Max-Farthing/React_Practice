export default function SideBar({ data, projectScreen, setTasks }) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h1>YOUR PROJECTS</h1>
            <button className="bg-stone-400" onClick={projectScreen}>+ Add Project</button>
            <ul className="mt-8">
                {data.map(project => {
                    return (
                        <li key={project.id}>
                            <button 
                                className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
                                onClick={() => setTasks(project.id)}
                            >
                                {project.title}
                            </button>
                        </li>

                    );
                })}
            </ul>
        </aside>
    );
}