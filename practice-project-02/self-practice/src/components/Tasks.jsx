import { forwardRef } from "react";

const Tasks = forwardRef(function Tasks({ project, deleteProject, addTask, clearTask }, ref) {
    return (
        <div>
            <h1>{project.title}</h1>
            <button onClick={deleteProject} className="border border-black">Delete</button>
            <p>{project.date}</p>
            <p>{project.description}</p>
            <h2>Tasks</h2>
            <input type="text" className="border border-black" ref={ref} />
            <button onClick={addTask}>Add Task</button>
            {project.tasks.length === 0 ? <p>This project does not have any tasks yet</p> : 
            <ul>
                {project.tasks.map((task, index) =>
                    <>
                        <li className="m-2" key={index}>{task}</li>
                        <button onClick={() => clearTask(index)} className="bg-stone-400">Clear</button>
                    </>
                )}
            </ul>}
        </div>
    );
});

export default Tasks;