export default function Project({ closeMenu }) {
    return (
        <>
            <div>
                <button onClick={() => closeMenu(false)} className="">Cancel</button>
                <button className="bg-black text-white rounded-md">Save</button>
                <label>TITLE</label>
                <input
                    // onChange={} potentially where i use refs?
                    className="border border-black rounded-md" 
                    type="text"
                />
            </div>
            <div>
                <label>DESCRIPTION</label>
                <input 
                    // onChange={}
                    className="border border-black rounded-md" 
                    type="text"
                />
            </div>
            <div>
                <label>DUE DATE</label>
                <input 
                    // onChange={}
                    className="border border-black rounded-md" 
                    type="date"
                />
            </div>
        </>
    );
}