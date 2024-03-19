import { forwardRef } from "react";

const Tasks = forwardRef(function Tasks({ project, handleAddTask, handleDeleteTask }, ref) {
    return (
        <div>
            <button onClick={() => handleDeleteTask(project.id)} className="bg-stone-500 text-white">Delete</button>
            <h1>{project.title}</h1>
            <p>{project.date}</p>
            <p>{project.description}</p>
            <h1><strong>Tasks</strong></h1>
            <input className="border border-gray-500" ref={ref} />
            <button onClick={() => handleAddTask(project.id)} className="bg-stone-500 text-white">Add Task</button>
            <ul>
                {project.tasks.length === 0 ? <p>No tasks created</p> : project.tasks.map(items => (
                    <li key={items}>{items}</li>
                ))}
            </ul>
        </div>
    );
});

export default Tasks;