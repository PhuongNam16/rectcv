import React from 'react';
import {Col, Row} from 'react-bootstrap';
import {ImQuotesLeft} from 'react-icons/all';
import './Testimonial.css';
const Testimonial = () => {
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
            <Row className="testimonial-box d-flex flex-column flex-md-row justify-content-between align-items-start p-5">
              <Col sm={1} class="testimonial_icon mr-4">
                <span class="mbri-quote-left"><ImQuotesLeft /></span>
              </Col>
              <Col className="testimonial_content mt-3 text-left">
                <p class="m-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, tenetur nisi iste, ipsa obcaecati quis laudantium error distinctio excepturi
                </p>
                <div className="testimonial_author row mt-3">
                  <div className="col-12 col-md-7 col-lg-5 col-xl-4">
                    <Row>
                      <Col className="d-flex">
                        <div
                          class="author_picture mr-3"
                          style={{
                            backgroundImage: 'url("https://demo.themesuccess.com/templates/rectcv/layouts/assets/images/client2.jpg")',
                          }}
                        />
                        <div class="author_info py-2">
                          <h3>Ebony Phan</h3>
                          <p>Web Developer</p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
            <div class="owl-dots">
              <button role="button" class="owl-dot active"><span /></button>
              <button role="button" class="owl-dot"><span /></button>
              <button role="button" class="owl-dot"><span /></button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Testimonial;
