export default function Tasks({ project }) {
    return (
        <div>
            <button className="bg-stone-500 text-white">Delete</button>
            <h1>{project.title}</h1>
            <p>{project.date}</p>
            <p>{project.description}</p>
            <h1>Tasks</h1>
            <input className="border border-gray-500"/>
            <button className="bg-stone-500 text-white">Add Task</button>
            <ul>
                {/* {project.tasks.map(items => (
                    <li>{items}</li>
                ))} */}
            </ul>
        </div>
    );
}