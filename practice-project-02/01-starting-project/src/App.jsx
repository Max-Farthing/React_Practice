import Sidebar from "./components/Sidebar";
import Project from "./components/Project";
import NoProject from "./components/NoProject";
import Tasks from "./components/Tasks";
import { useState, useRef } from "react";

function App() {
  const projectRefs = useRef(null);
  const [projects, setProjects] = useState([]); //will use to keep track of projects, maybe use refs?
  const [menu, setMenu] = useState(false); //will use for rendering project creation menu
  const[task, setTask] = useState(false);

  function menuToggle(boolean) {
      setMenu(boolean);
  }

  function taskToggle(boolean) {
      setTask(boolean);
      setMenu(false);
  }

  function addProject() {
    const { inputRefs } = projectRefs.current;
    // console.log(inputRefs.input1Ref.current.value);
    // console.log(inputRefs.input2Ref.current.value);
    // console.log(inputRefs.input3Ref.current.value);
    const newItem = {
      id: projects.length + 1, 
      title: inputRefs.input1Ref.current.value, 
      description: inputRefs.input2Ref.current.value, 
      date: inputRefs.input3Ref.current.value
    };
    setProjects([...projects, newItem]);
  }

  function deleteProject() {

  }

  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1>
      <Sidebar data={projects} openMenu={menuToggle} openTask={taskToggle}/>
      {menu ? <Project closeMenu={menuToggle} add={addProject} ref={projectRefs} /> : <NoProject openMenu={menuToggle}/>}
      {task && <Tasks data={projects} /> }
    </>
  );
}

export default App;
