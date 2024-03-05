import Sidebar from "./components/Sidebar";
import Project from "./components/Project";
import NoProject from "./components/NoProject";
import Tasks from "./components/Tasks";
import { useState, useRef } from "react";

function App() {
  const projectRefs = useRef(null);
  const taskRef = useRef(null);
  const [projects, setProjects] = useState([]);
  const [menu, setMenu] = useState('noproject');

  function menuToggle(value) { //maybe if task is passed then send a value
      setMenu(value);          // then maybe we can find obj in projects and show on task screen
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
      date: inputRefs.input3Ref.current.value,
      tasks: []
    };
    setProjects([...projects, newItem]);
  }

  function addTask() {
    const updateObj = projects.find(item => item['title'] === "");
    updateObj[tasks].push(taskRef.current.value);
    setProjects([...projects, updateObj]);
  }

  function deleteProject() {

  }

  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1>
      <Sidebar data={projects} openMenu={menuToggle} />
      {menu === 'project' && <Project closeMenu={menuToggle} add={addProject} ref={projectRefs} />}
      {menu === 'noproject' && <NoProject openMenu={menuToggle}/>}
      {menu === 'task' && <Tasks data={projects} addTask={addTask} ref={taskRef}/>}
    </>
  );
}

export default App;
