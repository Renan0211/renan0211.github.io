import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import projectDefaultImg from '../images/project-default-img.svg';

function ProjectCard({ projectData }) {
  const {
    projectName, projectLink, repositoryLink, projectId,
  } = projectData;
  return (
    <Card>
      <img className="card-img-top" src={projectDefaultImg} alt="Imagem de capa do card" />
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <Card.Title>{projectName}</Card.Title>
          <div className="">
            <Link to={`/details/${projectId}`} className="btn btn-info" role="button">Detalhes</Link>
            <a href={projectLink} className="btn btn-primary mx-2" role="button">Ver Projeto</a>
            <a href={repositoryLink} className="btn btn-dark" role="button">Repositório</a>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

ProjectCard.propTypes = {
  projectData: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ProjectCard;
