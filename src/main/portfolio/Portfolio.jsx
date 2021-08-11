import React, {useState} from 'react';
import {Card, Col, Row} from 'react-bootstrap';
import {
  BsLink,
  IoImagesOutline,
  RiDribbbleFill,
  SiGoogleplay,
} from 'react-icons/all';
import './Portfolio.css';
import ProjectPort from './ProjectPort';
const Portfolio = () => {
  const [image, setimage] = useState ([
    {
      id: 1,
      img: 'https://demo.themesuccess.com/templates/rectcv/layouts/assets/images/portfolio1.jpg',
      icon: <IoImagesOutline />,
      title: 'Project Title',
      body: 'Category',
    },
    {
      id: 2,
      img: 'https://demo.themesuccess.com/templates/rectcv/layouts/assets/images/portfolio2.jpg',
      icon: <SiGoogleplay />,
      title: 'Project Title',
      body: 'Category',
    },
    {
      id: 3,
      img: 'https://demo.themesuccess.com/templates/rectcv/layouts/assets/images/portfolio3.jpg',
      icon: <IoImagesOutline />,
      title: 'Project Title',
      body: 'Category',
    },
    {
      id: 4,
      img: 'https://demo.themesuccess.com/templates/rectcv/layouts/assets/images/portfolio4.jpg',
      icon: <BsLink />,
      title: 'Project Title',
      body: 'Category',
    },
    {
      id: 5,
      img: 'https://demo.themesuccess.com/templates/rectcv/layouts/assets/images/portfolio5.jpg',
      icon: <IoImagesOutline />,
      title: 'Project Title',
      body: 'Category',
    },
    {
      id: 6,
      img: 'https://demo.themesuccess.com/templates/rectcv/layouts/assets/images/portfolio6.jpg',
      icon: <IoImagesOutline />,
      title: 'Project Title',
      body: 'Category',
    },
  ]);
  return (
    <>
    <section className="portfolio background_gpattern" id="portfolio">
      <div className="container justify-content-between flex-column h-100">
        <div className="section-title">
          <Row>
            <Col xs={12}>
              <div className="text-left">
                <h2 className="text_background">
                  My Projects{' '}
                  <span className="heading_background">Portfolio</span>
                </h2>
                <p class="m-0">
                  There are many variations of passages of Lorem Ipsum.
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="section-content">
          <Row xs={1} md={3} className="g-4 ">
            {image.map (item => (
              <Col xs={4} className="portfolio-item" key={item.id}>
                <Card className="item-box">
                  <Card.Img src={item.img} className="img-fluid" />

                  <Card className="item-details d-flex align-items-center">

                    <Card.Body className="item-details-ins text-center w-100">
                      <div
                        style={{
                          color: '#F0F0F0',
                          fontSize: '32px',
                          marginBottom: '0.5rem',
                        }}
                      >
                        <span>{item.icon}</span>
                      </div>
                      <Card.Title style={{color: '#F0F0F0'}}>
                        {item.title}
                      </Card.Title>
                      <Card.Text style={{color: '#F0F0F0'}}>
                        {item.body}
                      </Card.Text>

                    </Card.Body>
                  </Card>
                </Card>
              </Col>
            ))}
          </Row>
          <Row>
            <Col xs={12} className="text-center mt-5">
              <a href="" className="btn align-items-center btn-outline-primary">
                <span className="icon"><RiDribbbleFill />{' '}</span>
                <span>See more</span>
              </a>
            </Col>
          </Row>
        </div>
      </div>
    </section>
      <ProjectPort/>
      </>
  );
};

export default Portfolio;
