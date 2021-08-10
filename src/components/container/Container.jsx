import React from 'react';
import {Col, Row} from 'react-bootstrap';
import './Container.css';
import data from '../../data/data.json';
import {useState} from 'react';

const dataMain = data.imageData;
const Container = () => {
  const [data, setdata] = useState (dataMain);
  return (
    <div className="demo-section">
      <div className="container">
        <div className="demo-heading">
          <h2>8 Pre-Build Demos</h2>
        </div>
        <Row>
        {data.map (item => (
            <Col xs={6} className="p-4" key={item.id}>
              <div className="demo-thumbnail">
                <a href="">
                  <img src={item.img} alt="" className="img-fluid" />
                </a>
              </div>
              <div className="demo-desc">
                <h2 className="text-center">
                  {item.title}
                </h2>
              </div>
              <div className="demo-link">
                <a href="" className="btn btn-primary">View Demo</a>
              </div>
            </Col>
        ))}
        </Row>
      </div>
    </div>
  );
};

export default Container;
