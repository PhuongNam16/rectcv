import React from 'react';
import {Col, Row} from 'react-bootstrap';
import './About.css';
import {
  AiOutlineGithub,
  FaFacebookF,
  FaPinterestP,
  GrTumblr,
  ImLinkedin2,
} from 'react-icons/all';
const About = () => {
  return (
    <section className="about background_gpattern" id="about">
      <div className="container justify-content-between flex-column h-100">
        <div className="section-title">
          <Row>
            <Col xs={12} md={8}>
              <div className="text-left">
                <h2 className="text_background">
                  Who Am I{' '}
                  <span className="heading_background">About Me</span>
                </h2>
                <p class="m-0">Get to know me</p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="section-content">
          <Row className="justify-content-center align-items-center">
            <Col md={6}>
              <div className="avatar-area m-auto">
                <img className="img-fluid mx-auto"
                  src="https://demo.themesuccess.com/templates/rectcv/layouts/assets/images/newperson.jpg"
                  alt="avatar"
                />
              </div>
            </Col>
            <Col className="content mt-5" md={6}>
              <h3>I'm Phuong Nam</h3>
              <p className="my-4">
                Hi! There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
              </p>
              <Row>
                <Col md={6}>
                  <div className="about-info mb-2">
                    <span className="desc">Full Name:</span>
                    <span>Nguyen Phuong Nam</span>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="about-info mb-2">
                    <span className="desc">Age:</span>
                    <span>21</span>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="about-info mb-2">
                    <span className="desc">Experience:</span>
                    <span>2 months</span>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="about-info mb-2">
                    <span className="desc">Email:</span>
                    <span>phuongnamhd00@gmail.com</span>
                  </div>
                </Col>
              </Row>
              <div className="button_and_social my-4">
                <Row className="justify-content-center align-items-center">
                  <Col md={6}>
                    <a href="" className="btn btn-outline-primary btn-lg">
                      Download CV
                    </a>
                  </Col>
                  <Col md={6} >
                    <ul className="social-icons list-inline d-flex mt-4 mt-xl-0">
                      <li className="list-inline-item"><a href="#"><FaFacebookF /></a></li>
                      <li className="list-inline-item"><a href="#"><ImLinkedin2 /></a></li>
                      <li className="list-inline-item"><a href="#"><FaPinterestP /></a></li>
                      <li className="list-inline-item"><a href="#"><AiOutlineGithub /></a></li>
                      <li className="list-inline-item"><a href="#"><GrTumblr /></a></li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default About;
