import { useState, useRef } from "react";
import NoProject from "./components/NoProject";
import SideBar from "./components/SideBar";
import Project from "./components/Project";
import Tasks from "./components/Tasks";

function App() {
    const [selectedScreen, setSelectedScreen] = useState('none');
    const [projects, setProjects] = useState([
        {
            id: undefined,
            title: '',
            description: '',
            date: '',
            tasks: []
        }
    ]);
    const [selectedId, setSelectedId] = useState();
    const titleRef = useRef();
    const descRef = useRef();
    const dateRef = useRef();

    function addProjectScreen() {
        setSelectedScreen('project');
    }

    function cancelProject() {
        setSelectedScreen('none');
    }

    function selectProjectTasks(id) {
        setSelectedId(id);
        setSelectedScreen('task');
    }

    function handleSaveProject() {
        const newProject = 
        {
            id: Math.random() * 1000,
            title: titleRef.current.value,
            description: descRef.current.value,
            date: dateRef.current.value,
            tasks: []
        };
        console.log(newProject);
        setProjects((prevProjects) => 
            [...prevProjects, newProject]
        );
        console.log(projects);
        setSelectedScreen('none');
    }

    let screen;
    if(selectedScreen === 'none') {
        screen = <NoProject projectScreen={addProjectScreen} />;
    } else if(selectedScreen === 'project') {
        screen = <Project ref={{titleRef, descRef, dateRef}} handleSave={handleSaveProject} handleCancel={cancelProject}/>;
    } else if(selectedScreen === 'task') {
        const found = projects.findIndex((project) => project.id === selectedId);
        screen = <Tasks project={projects[found]}/>
    }

    return (
        <>
            {screen}
            <SideBar data={projects} projectScreen={addProjectScreen} setTasks={selectProjectTasks} />
        </>
    );
}

export default App;