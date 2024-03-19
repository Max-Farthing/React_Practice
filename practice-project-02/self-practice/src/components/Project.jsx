import { forwardRef } from "react";

const Project = forwardRef(function Project({ cancelProject, saveProject }, ref) {
    return (
        <div>
            <button onClick={cancelProject} className="bg-stone-300">Cancel</button>
            <button onClick={saveProject} className="bg-black text-white">Save</button>
            <div>
                <label>Title</label>
                <input className="border border-gray-400" type="text" ref={ref.titleRef} />
                <label>Description</label>
                <textarea className="border border-gray-400" ref={ref.descRef} />
                <label>Due Date</label>
                <input className="border border-gray-400" type="date" ref={ref.dateRef} />
            </div>
        </div>
    );
});

export default Project;