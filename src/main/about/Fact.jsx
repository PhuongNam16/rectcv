import React from 'react';
import {Col, Row} from 'react-bootstrap';
import './Fact.css';
import {
  AiOutlineDownload,
  FiSmile,
  IoTimerOutline,
  RiMagicFill,
} from 'react-icons/all';
const Fact = () => {
  return (
    <div
      className="section background_section facts"
      style={{
        backgroundImage: `url("https://demo.themesuccess.com/templates/rectcv/layouts/assets/images/background_2.jpg")`,
      }}
    >
      <div className="container">
        <Row>
          <Col xs={3}>
            <div className="fact-single">
              <div className="fact-icon">
                <span class="mbri-timer">
                  <IoTimerOutline className="icon-mbri" />
                </span>
              </div>
              <div className="fact-info">
                <span
                  className="tmcounter"
                  data-from="0"
                  data-to="20"
                  data-speed="1500"
                >
                  20
                </span>
                +
              </div>
              <div className="fact-meta">
                <span>Years Experiance</span>
              </div>
            </div>
          </Col>
          <Col xs={3}>
            <div className="fact-single">
              <div className="fact-icon">
                <span class="mbri-timer">
                  <FiSmile className="icon-mbri" />
                </span>
              </div>
              <div className="fact-info">
                <span
                  className="tmcounter"
                  data-from="0"
                  data-to="20"
                  data-speed="1500"
                >
                  400
                </span>
                +
              </div>
              <div className="fact-meta">
                <span>Happy Clients</span>
              </div>
            </div>
          </Col>
          <Col xs={3}>
            <div className="fact-single">
              <div className="fact-icon">
                <span class="mbri-timer">
                  <RiMagicFill className="icon-mbri" />
                </span>
              </div>
              <div className="fact-info">
                <span
                  className="tmcounter"
                  data-from="0"
                  data-to="20"
                  data-speed="1500"
                >
                  7853
                </span>
              </div>
              <div className="fact-meta">
                <span>Projects Done</span>
              </div>
            </div>
          </Col>
          <Col xs={3}>
            <div className="fact-single">
              <div className="fact-icon">
                <span class="mbri-timer">
                  <AiOutlineDownload className="icon-mbri" />
                </span>
              </div>
              <div className="fact-info">
                <span
                  className="tmcounter"
                  data-from="0"
                  data-to="20"
                  data-speed="1500"
                >
                  2569
                </span>
              </div>
              <div className="fact-meta">
                <span>Download</span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Fact;
