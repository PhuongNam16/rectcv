import React, { useState } from 'react';
import {Card, Col, Row} from 'react-bootstrap';
import {FcCalendar,RiAccountCircleLine} from 'react-icons/all';
import "./Blog.css";

const Blog = () => {
  const [info, setInfo] = useState([
    {
      id: '1',
      time :' 11 March, 2021',
      name : "Kevin Miller"
    },
    {
      id: '2',
      time : '29 March, 2021',
      name : "Kevin Miller"
    },
    {
      id: '3',
      time: '15 April, 2021',
      name : "Kevin Miller"
    }
  ])
  return (
    <section className="blog background_gpattern" id="blog">
      <div className="container justify-content-between flex-column h-100">
        <div className="section-title">
          <Row>
            <Col xs={12}>
              <div className="text-left">
                <h2 className="text_background">
                  MY ARTICLES{' '}
                  <span className="heading_background">Blog</span>
                </h2>
                <p class="m-0">
                  The standard chunk of Lorem Ipsum used since the 1500s.
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="section-content">
          <Row xs={1} md={3} className="g-4">
            {info.map ((item) => (
              <Col>
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://demo.themesuccess.com/templates/rectcv/layouts/assets/images/blog1.jpg"
                  />
                  <Card.Body>
                    <Card.Title>How to write website content.</Card.Title>
                   <Row className="mt-3 mb-3">
                       <Col xs={6}>
                           <span><FcCalendar/>{' '}</span>
                           <span>{item.time}</span>
                       </Col>
                       <Col xs={6}>
                           <span><RiAccountCircleLine/>{' '}</span>
                           <span>by {item.name}</span>
                       </Col>
                   </Row>
                    <Col xs={6}>
                      <a href="" className="btn btn-outline-primary">
                        Read More
                      </a>
                    </Col>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Blog;
