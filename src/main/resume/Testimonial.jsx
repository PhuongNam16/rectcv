import React from 'react';
import {Col, Row} from 'react-bootstrap';

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
            <Row className="box p-5 mx-3  mx-md-0 align-items-center text-center">
              <div
                id="client_slider"
                class="owl-carousel owl-theme owl-loaded owl-drag"
              >

                <div className="owl-stage-outer">
                  <div
                    className="owl-stage"
                    style={{
                      transform: 'translate3d(-2280px, 0px, 0px)',
                      transition: 'all 1s ease 0s',
                      width: '7980px',
                    }}
                  >
                    <div className="owl-item cloned" style={{width: '1140px'}}>
                      <div className="col-12">
                        <div className="testimonial-box d-flex flex-column flex-md-row justify-content-between align-items-start p-5">
                          <div className="testimonial_icon mr-4">
                            <span className="mbri-quote-left" />
                          </div>
                          <div className="testimonial_content mt-3">
                            <p className="m-0">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, tenetur nisi iste, ipsa obcaecati quis laudantium error distinctio excepturi
                            </p>
                            <div className="testimonial_author row mt-3">
                              <div className="col-12 col-md-7 col-lg-5 col-xl-4">
                                <div className="row">
                                  <div className="col-12 col-md-3">
                                    <div
                                      className="author_picture mr-3"
                                      style={{
                                        backgroundImage: 'url("https://demo.themesuccess.com/templates/rectcv/layouts/assets/images/client1.jpg")',
                                      }}
                                    />
                                    <div className="col-12 col-md-9">
                                      <div className="author_info py-2">
                                        <h3>Ebony Phan</h3>
                                        <p>Web Developer</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Testimonial;
