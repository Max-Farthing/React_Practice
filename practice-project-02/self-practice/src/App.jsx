import NoProject from "./components/NoProject";
import SideBar from "./components/SideBar";
import Project from "./components/Project";
import Tasks from "./components/Tasks";

import { useState, useRef } from "react";

function App() {
    const [project, setProject] = useState('n');
    const [projectList, setProjectList] = useState([]);
    const [selectedId, setSelectedId] = useState(undefined);
    const titleRef = useRef();
    const descRef = useRef();
    const dateRef = useRef();
    const newTask = useRef();

    function handleSaveNewProject () {
        const newProject = {
            id: projectList.length + 1,
            title: titleRef.current.value,
            description: descRef.current.value,
            date: dateRef.current.value,
            tasks: []
        };
        setProjectList(prevItems => [...prevItems, newProject]);

        titleRef.current.value = '';
        descRef.current.value = '';
        dateRef.current.value = '';

        setProject('n');
    }

    function handleSelectProject(id) {
        setSelectedId(id);
        setProject('t');
    }

    function handleNewProject() {
        setProject('p');
    }

    function handleCancelProject() {
        setProject('n');
    }

    function handleSaveNewTask(id) {
        const project = projectList.findIndex(obj => obj.id === id);
        if(project === -1) {
            return;
        }
        const updatedList = [...projectList];

        updatedList[project].tasks.push(newTask.current.value);

        newTask.current.value = '';

        setProjectList(updatedList);
    }

    function handleDeleteTask(id) {
        const updatedList = projectList.filter(project => project.id !== id);
        setProjectList(updatedList);
        console.log(updatedList);
        console.log(id);
        setProject('n');
    }

    let view;
    if(project === 'n') {
        view = <NoProject addProject={handleNewProject} />;
    } else if(project === 'p') {
        view = <Project cancelProject={handleCancelProject} saveProject={handleSaveNewProject} ref={{ titleRef, descRef, dateRef }}/>
    } else if(project === 't') {
        view = <Tasks project={projectList[selectedId - 1]} handleAddTask={handleSaveNewTask} ref={newTask} handleDeleteTask={handleDeleteTask} />
    }

    return (
        <>
            <SideBar addProject={handleNewProject} data={projectList} selectProject={handleSelectProject} />
            {view}
        </>
    );
}

export default App;