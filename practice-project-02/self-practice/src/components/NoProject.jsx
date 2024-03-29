import none from '../assets/no-projects.png';

export default function NoProject({projectScreen}) {
    return (
        <div>
            <img src={none} alt='image of paperwork' className='w-24 h-24'/>
            <h2>No Project Selected</h2>
            <p>Select a project or get started with a new one</p>
            <button className='bg-stone-400' onClick={projectScreen}>Create new project</button>
        </div>
    );
}