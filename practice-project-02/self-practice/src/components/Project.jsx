import { forwardRef } from "react";

const Project = forwardRef(function Project({handleSave}, ref) {
    return (
        <div>
           <button className="bg-red-400">Cancel</button>
           <button className="bg-black text-white" onClick={handleSave}>Save</button>
           <div>
                <label>Title</label> 
                <input type="text" className="border border-black" ref={ref.title}/>
                <label>Description</label> 
                <textarea className="border border-black" ref={ref.description}/>
                <label>Due Date</label> 
                <input type="date" className="border border-black" ref={ref.date}/>
           </div>
        </div>
    );
});

export default Project;