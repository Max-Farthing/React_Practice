export default function Project() {
    return (
        <div>
           <button className="bg-red-400">Cancel</button>
           <button className="bg-black text-white">Save</button>
           <div>
                <label>Title</label> 
                <input type="text" className="border border-black"/>
                <label>Description</label> 
                <textarea className="border border-black"/>
                <label>Due Date</label> 
                <input type="date" className="border border-black"/>
           </div>
        </div>
    );
}