import React from 'react';
import Typed from 'react-typed';
import './Home.css';
const Home = () => {
  return (
      <section className="header-wraper text-center" bg="dark" id="home">
        <div className="main-info text-center container">
          <p>
            {' '}I'm{' '}
            <Typed
              className="typed-text mb-4"
              strings={['Graphic Designer', 'Web Development']}
              typedSpeed={100}
              backSpeed={100}
              loop
            />
          </p>
          <div id="parallax-scene">
            <div className="heading-zone mb-4">
              <h1>Kevin Miller</h1>
            </div>
          </div>
          <a href="#about" className="btn btn-primary">Learn More</a>
          <div className="scroll-down">
            <a href="#about">
              <div className="scroll-title">Scroll Down</div>
              <div className="scroll-mouse">
            <div className="well"></div>
          </div>
            </a>
          </div>
        </div>
      </section>
  );
};

export default Home;
