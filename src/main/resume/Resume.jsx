import React, {useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import './Resume.css';
import Testimonial from './Testimonial';
const Resume = () => {
  const [data, setdata] = useState ([
    {
      id: '1',
      nameSkill: 'JavaScript',
      percent: '75%',
    },
    {
      id: '2',
      nameSkill: 'Wordpress',
      percent: '90%',
    },
    {
      id: '3',
      nameSkill: 'HTML 5',
      percent: '95%',
    },
    {
      id: '4',
      nameSkill: 'CSS 3',
      percent: '85%',
    },
  ]);
  const [content, setcontent] = useState ([
    {
      id: '1',
      title: 'Education',
      heading: 'Univercity of Boston, Computer Science',
      time: '2010 - 2016',
      bodyText: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna',
    },
    {
      id: '2',
      title: 'Experience',
      heading: 'Master Computer Science',
      time: '2016 - 2018',
      bodyText: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna',
    },
    // {
    //   id: '3',
    //   title: 'Experience',
    //   heading: 'UI/UX Designer',
    //   time: '2010 - 2016',
    //   bodyText: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna',
    // },
    // {
    //   id: '4',
    //   heading: 'Web Developer',
    //   time: '2016 - 2018',
    //   bodyText: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna',
    // },
  ]);
  return (
    <section className="resume background_gpattern" id="resume">
      <div className="container justify-content-between flex-column h-100">
        <div className="section-title">
          <Row>
            <Col xs={12}>
              <div className="text-left">
                <h2 className="text_background">
                  My Experience{' '}
                  <span className="heading_background">Resume</span>
                </h2>
                <p class="m-0">
                  If you are going to use a passage of Lorem Ipsum
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <section className="section-content text">
          <Row className="mt-4">
            {content.map (item => (
              <Col xs={6} className="box-left">
                <h3 className="mb-4">{item.title}</h3>
                <ul className="list-inline resume-list">
                  <li>
                    <h4 className="mb-2">
                      {item.heading}
                    </h4>
                    <span className="time">{item.time}</span>
                    <p className="my-2">
                      {item.bodyText}
                    </p>
                  </li>
                  <li>
                    <h4 className="mb-2">{item.heading}</h4>
                    <span className="time">{item.time}</span>
                    <p className="my-2">
                      {item.bodyText}
                    </p>
                  </li>
                </ul>
              </Col>
            ))}
          </Row>
          <Row className="mt-5" xs={6}>
            {data.map (item => (
              <Col xs={6}>
                <div className="skill pr-4 pr-sm-3 px-3 mb-4">
                  <div className="skill-progress">
                    <div className="progresss-info d-flex flex-row justify-content-between mt-2 mb-1">
                      <span>{item.nameSkill}</span>
                      <span className="text-right progress-percent">
                        {item.percent}
                      </span>
                    </div>
                    <div class="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-percent="75"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{width: '75%'}}
                      />
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </section>
      </div>
      <Testimonial/>
    </section>
  );
};

export default Resume;
