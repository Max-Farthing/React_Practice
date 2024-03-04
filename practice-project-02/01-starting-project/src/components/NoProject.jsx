import clipboard from '../assets/no-projects.png'

export default function NoProject() {
    return(
        <>
            <img src={clipboard} alt="clipboard image"/>
            <h2>No Project Selected</h2>
            <p>Select a project or get started with a new one</p>
            <button className='bg-black text-white'>Create new project</button>
        </>
    );
}