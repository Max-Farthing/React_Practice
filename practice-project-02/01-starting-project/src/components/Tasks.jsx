export default function Tasks({ data }) {
    return (
        <div>
            <h1>{data.title}</h1>
            <button>Delete</button>
            <p>{data.date}</p>
            <p>{data.description}</p>
            <hr />
            <h1>Tasks</h1>
            <input type="text" className="border border-black rounded-md"/>
            <button>Add Task</button>
            <ul>
                {/* map out tasks here */}
            </ul>
      </div>
    );
}