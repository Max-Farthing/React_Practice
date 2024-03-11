import Input from "./Input";
import { useRef } from "react";

export default function NewProject({ onAdd }) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const entereddescription = description.current.value;
        const entereddueDate = dueDate.current.value;

        //validation ...

        onAdd({
            title: enteredTitle,
             description: entereddescription,
             dueDate: entereddueDate
        });
    }

    return (
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button className="text-stone-800 hover:text-stone-950">Cancel</button>
                </li>
                <li>
                    <button 
                        className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md"
                        onClick={handleSave}>
                            Save
                    </button>
                </li>
            </menu>
            <div>
               <Input label="Title" ref={title} type="text" />
               <Input label="Description" textarea ref={description} />
               <Input label="Due Date" ref={dueDate} type="date" />
            </div>
        </div>
    );
}