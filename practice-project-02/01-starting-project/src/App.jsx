import Sidebar from "./components/Sidebar";
import Project from "./components/Project";
import NoProject from "./components/NoProject";
import { useState } from "react";

function App() {
  const [projects, setProjects] = useState([]); //will use to keep track of projects, maybe use refs?
  const [menu, setMenu] = useState(false); //will use for rendering project creation menu

  function openMenu() {
    setMenu(true);
  }

  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1>
      <Sidebar openMenu={openMenu}/>
      {menu ? <Project /> : <NoProject />}
    </>
  );
}

export default App;
