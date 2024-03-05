import { forwardRef } from "react";

const Tasks = forwardRef(function Tasks({ data, addTask }, ref) {
    return (
        <div>
            <h1>{data.title}</h1>
            <button>Delete</button>
            <p>{data.date}</p>
            <p>{data.description}</p>
            <hr />
            <h1>Tasks</h1>
            <input ref={ref} type="text" className="border border-black rounded-md"/>
            <button onClick={addTask}>Add Task</button>
            <ul>
                {/* map out tasks here */}
            </ul>
      </div>
    );
})

export default Tasks;