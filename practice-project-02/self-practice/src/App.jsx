import { useState } from "react";
import NoProject from "./components/NoProject";
import SideBar from "./components/SideBar";
import Project from "./components/Project";

function App() {
    const [selectedScreen, setSelectedScreen] = useState('none');

    function addProjectScreen() {
        setSelectedScreen('project');
    }

    let screen;
    if(selectedScreen === 'none') {
        screen = <NoProject projectScreen={addProjectScreen} />;
    } else if(selectedScreen === 'project') {
        screen = <Project />;
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