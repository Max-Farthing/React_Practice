
export default function NoProject({ addProject }) {
    return (
        <div className="ml-32">
            <h1>No Project Selected</h1>
            <p>Select a project to get started with a new one</p>
            <button 
                className="bg-stone-500 text-white"
                onClick={addProject}
            >
                Create new project
            </button>
        </div>
    );
}