import { forwardRef, useRef, useImperativeHandle } from "react";

const Project = forwardRef(function Project({ closeMenu, add }, ref) {

    const inputRefs = {
        input1Ref: useRef(null),
        input2Ref: useRef(null),
        input3Ref: useRef(null)
    };

    useImperativeHandle(ref, () => ({
        inputRefs
    }));
    
    return (
        <>
            <div>
                <button onClick={() => closeMenu('noproject')} className="">Cancel</button>
                <button onClick={add} className="bg-black text-white rounded-md">Save</button>
                <label>TITLE</label>
                <input
                    ref={inputRefs.input1Ref}
                    className="border border-black rounded-md" 
                    type="text"
                />
            </div>
            <div>
                <label>DESCRIPTION</label>
                <input 
                    ref={inputRefs.input2Ref}
                    className="border border-black rounded-md" 
                    type="text"
                />
            </div>
            <div>
                <label>DUE DATE</label>
                <input 
                    ref={inputRefs.input3Ref}
                    className="border border-black rounded-md" 
                    type="date"
                />
            </div>
        </>
    );
})

export default Project;