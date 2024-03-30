import { useState, useRef } from "react";
import NoProject from "./components/NoProject";
import SideBar from "./components/SideBar";
import Project from "./components/Project";

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
    const projectRefs = useRef({
        title: null,
        description: null,
        date: null
    });

    function addProjectScreen() {
        setSelectedScreen('project');
    }

    function handleSaveProject() {
        const newProject = 
        {
            id: Math.random(),
            title: projectRefs.current.title,
            description: projectRefs.current.description,
            date: projectRefs.current.date,
            tasks: []
        };
        console.log(newProject);
        setProjects((prevProjects) => 
            [newProject, ...prevProjects]
        );
        console.log(projects.length);
    }

    let screen;
    if(selectedScreen === 'none') {
        screen = <NoProject projectScreen={addProjectScreen} />;
    } else if(selectedScreen === 'project') {
        screen = <Project ref={projectRefs} handleSave={handleSaveProject} />;
    } else if(selectedScreen === 'task') {
        
    }

    return (
        <>
            {screen}
            <SideBar />
        </>
    );
}

export default App;