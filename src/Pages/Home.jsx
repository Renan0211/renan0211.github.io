import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../Components/Header';
import ProjectCard from '../Components/ProjectCard';
import projectDataTest from '../data/dataTest';

function Home() {
  return (
    <div>
      <Header />
      <Container>
        <Row xs={1} md={2} className="g-4">
          {projectDataTest.map((project) => (
            <Col>
              <ProjectCard projectData={project} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
