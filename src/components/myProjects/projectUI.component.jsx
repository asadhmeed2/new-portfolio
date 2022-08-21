import React from 'react'

const ProjectUI = ({project}) => {
  return (
    <div className="project-UI">
        <h3>{project?.name}</h3>
    </div>
  )
}

export default ProjectUI