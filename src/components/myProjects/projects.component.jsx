import React, { useState } from 'react'
import { PROJECTS_DATA } from '../../consts'
import ProjectUI from './projectUI.component';
import './css/projects.style.css'

const Projects = () => {
    const [activeProjectId ,setActiveProjectId] = useState('1');

    const handleActiveProject = (e)=> setActiveProjectId(id=>e.target.id);
  return (
    <div className="projects-container">
        <div className="projects-taps">
            <ul>
            {PROJECTS_DATA.map(project =><li key={project.id}  id={project.id} onClick={handleActiveProject}>{project.name}</li>)}        
            </ul>
        </div>
        <div className="project-window">
            <ProjectUI project={PROJECTS_DATA.find(project => project.id === activeProjectId)}/>
        </div>
    </div>
  )
}

export default Projects