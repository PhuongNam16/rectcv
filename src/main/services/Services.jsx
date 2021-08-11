import React,{useState} from 'react';
import {Card, Col, Row} from 'react-bootstrap';
import {AiOutlineDatabase, DiResponsive,FiCoffee,BsHeart,IoRocketOutline, BsLayers} from 'react-icons/all';
import './Services.css';
const Services = () => {
  const [cardItem, setcardItem] = useState([
    {
      id: '1',
      icon: <AiOutlineDatabase/>,
      title : "Development",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      id: '2',
      icon: <DiResponsive/>,
      title : "Responsive",
      content: "It is a long established fact that a reader will be distracted by the readable content"
    },
    {
      id: '3',
      icon: <FiCoffee/>,
      title : "UI/UX Design",
      content: "There are many variations of passages of Lorem Ipsum available, but the majority"
    },
    {
      id: '4',
      icon: <BsLayers/>,
      title : "User Friendly",
      content: "Contrary to popular belief, Lorem Ipsum is not simply random text."
    },
    {
      id: '5',
      icon: <BsHeart/>,
      title : "Lonely",
      content: "It is a long established fact that a reader will be distracted"
    },
    {
      id: '6',
      icon: <IoRocketOutline/>,
      title : "Bootstrap 4",
      content: "Lorem ipsum dolor sit amet, consetetur"
    },

  ])
  return (
    <section className="services background_gpattern">
      <div className="container justify-content-between flex-column h-100">
        <div className="section-title">
          <Row>
            <Col xs={12}>
              <div className="text-left">
                <h2 className="text_background">
                  What I Do {' '}
                  <span className="heading_background">Services</span>
                </h2>
                <p class="m-0">
                  It is a long established fact that a reader will be distracted by the readable content
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="section-content">
          <Row xs={1} md={3} className="g-4">
            {cardItem.map ((item) => (
              <Col>
                <Card className="services-sigle text-center p-5">
                  <span className ="services-icon">{item.icon}</span>
                  <Card.Body>
                    <Card.Title style ={{color:"#F0F0F0"}}>{item.title}</Card.Title>
                    <Card.Text style ={{color:"#F0F0F0"}}>
                      {item.content}
                    </Card.Text>
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

export default Services;
