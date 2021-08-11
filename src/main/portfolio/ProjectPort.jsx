import React from 'react';
import { Col, Row } from 'react-bootstrap';
import "./Project.css";
const ProjectPort = () => {
  return (
    <div
      className="section project background-section"
      style={{
        backgroundImage: `url("https://demo.themesuccess.com/templates/rectcv/layouts/assets/images/background_3.jpg")`,
      }}
    >
        <div className="container">
            <Row>
                <Col xs={12}>
                    <Row className="box p-5 mx-3  mx-md-0 align-items-center text-center">
                        <Col xs={4}><h3 className="m-0">Create a Website</h3></Col>
                        <Col xs={4}><p className="m-0">We can create and develop together.</p></Col>
                        <Col xs={4}>
                            <a href="" className="btn btn-outline-primary">Let's do this</a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    </div>
  );
};

export default ProjectPort;
