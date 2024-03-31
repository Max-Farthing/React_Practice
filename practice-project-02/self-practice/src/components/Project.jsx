import { forwardRef } from "react";

const Project = forwardRef(function Project({handleSave, handleCancel}, ref) {
    return (
        <div>
           <button className="bg-red-400" onClick={handleCancel}>Cancel</button>
           <button className="bg-black text-white" onClick={handleSave}>Save</button>
           <div>
                <label>Title</label> 
                <input type="text" className="border border-black" ref={ref.titleRef}/>
                <label>Description</label> 
                <textarea className="border border-black" ref={ref.descRef}/>
                <label>Due Date</label> 
                <input type="date" className="border border-black" ref={ref.dateRef}/>
           </div>
        </div>
    );
});

export default Project;