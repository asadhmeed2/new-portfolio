import React from "react";
import "./css/projects.style.css";

const ProjectUI = ({ project }) => {
  const image = (
    <img
      src={`${process.env.REACT_APP_SERVER_URL}${project.url}`}
      alt={project.name}
      className="project-img"
    />
  );
  return <div className="project-UI">{image}</div>;
};

export default ProjectUI;
