import NoProject from "./components/NoProject";
import SideBar from "./components/SideBar";
import Project from "./components/Project";
import Tasks from "./components/Tasks";

import { useState, useRef } from "react";

function App() {
    const [project, setProject] = useState('n');
    const [projectList, setProjectList] = useState([]);
    const titleRef = useRef();
    const descRef = useRef();
    const dateRef = useRef();

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
        setProject('t');
    }

    function handleNewProject() {
        setProject('p');
    }

    function handleCancelProject() {
        setProject('n');
    }

    let view;
    if(project === 'n') {
        view = <NoProject addProject={handleNewProject} />;
    } else if(project === 'p') {
        view = <Project cancelProject={handleCancelProject} saveProject={handleSaveNewProject} ref={{ titleRef, descRef, dateRef }}/>
    } else if(project === 't') {
        view = <Tasks />
    }

    return (
        <>
            <SideBar addProject={handleNewProject} data={projectList} selectProject={handleSelectProject} />
            {view}
        </>
    );
}

export default App;