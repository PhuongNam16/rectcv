import React from 'react';
import {Col, Row} from 'react-bootstrap';
import './Contacts.css';
import {BsPhone, ImMap2, IoMailOutline} from 'react-icons/all';
const Contacts = () => {
  return (
    <section className="contact">
      <div className="container justify-content-between flex-column h-100">
        <div className="section-title">
          <Row>
            <Col xs={12}>
              <div className="text-left">
                <h2 className="text_background">
                  Get In Touch{' '}
                  <span className="heading_background">Contact Us</span>
                </h2>
                <p class="m-0">
                  It is a long established fact that a reader will be distracted by the readable content
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <section className="section-content">
          <Row>
            <Col xs={4}>
              <Row>
                <Col xs={6} className="contact-icon"><IoMailOutline /></Col>
                <Col xs={6} className="contact-details mt-2">
                  <h5>Email Us</h5>
                  <p>
                    <a href="mailto:kevinmiller@alb.com">
                      kevinmiller@alb.com
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col xs={4}>
              <Row>
                <Col xs={6} className="contact-icon"><BsPhone /></Col>
                <Col xs={6} className="contact-details mt-2">
                  <h5>Email Us</h5>
                  <p>
                    <a href="mailto:kevinmiller@alb.com">
                      kevinmiller@alb.com
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col xs={4}>
              <Row>
                <Col xs={6} className="contact-icon"><ImMap2 /></Col>
                <Col xs={6} className="contact-details mt-2">
                  <h5>Email Us</h5>
                  <p>
                    <a href="mailto:kevinmiller@alb.com">
                      kevinmiller@alb.com
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col xs={12}>
              <form action="" id="contact-form">
                <Row>
                  <Col xs={6} className="mt-3">
                    <div>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        placeholder="Full Name"
                        autuComplate="off"
                      />
                    </div>
                  </Col>
                  <Col xs={6} className="mt-3">
                    <div>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        placeholder="Rmail"
                        autuComplate="off"
                      />
                    </div>
                  </Col>
                  <Col xs={12} className="mt-3">
                    <div>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        placeholder="Subject"
                        autuComplate="off"
                      />
                    </div>
                  </Col>
                  <Col xs={12} className="mt-3">
                    <div>
                      <textarea
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        placeholder="Message"
                        autuComplate="off"
                      ></textarea>
                    </div>
                  </Col>
                </Row>
                <Row>
                <Col xs={12} className ="form-group btnarea mt-3 text-right mb-0">
                  <a href="" className="btn btn-outline-primary">Send Message</a>
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>
        </section>
      </div>
    </section>
  );
};

export default Contacts;
