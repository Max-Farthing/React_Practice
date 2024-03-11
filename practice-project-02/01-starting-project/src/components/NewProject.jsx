import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {
    const modal = useRef();

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const entereddescription = description.current.value;
        const entereddueDate = dueDate.current.value;


        if(enteredTitle.trim() === '' || entereddescription.trim() === '' || entereddueDate.trim() === '') {
            modal.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: entereddescription,
            dueDate: entereddueDate
        });
        console.log(entereddueDate);

    }

    return (
        <>
            <Modal ref={modal} buttonCaption="Okay" >
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
                <p className='text-stone-600 mb-4'>Oops ... looks like you forgot to enter a value</p>
                <p className='text-stone-600 mb-4'>Please make sure you provide a valid value for each entry field</p>
            </Modal >
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button 
                            className="text-stone-800 hover:text-stone-950" 
                            onClick={onCancel}
                        >
                                Cancel
                        </button>
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
        </>
    );
}