export default function Tasks({project}) {

    let tasks = 
    <ul>
        {project.tasks.map((task, index) => 
            <li key={index}>{task}</li>    
        )}
    </ul>

    return (
        <div>
            <h1>{project.title}</h1>
            <button className="border border-black">Delete</button>
            <p>{project.date}</p>
            <p>{project.description}</p>
            <h2>Tasks</h2>
            <input type="text" className="border border-black"/>
            <button>Add Task</button>
            {project.tasks.length === 0 ? <p>This project does not have any tasks yet</p> : tasks}
        </div>
    );
}