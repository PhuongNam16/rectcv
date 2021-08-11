import React from 'react'
import {AiFillGithub, FaFacebookF, FaPinterestP, FaTumblr, GrLinkedinOption} from 'react-icons/all';
import "./Footer.css";
const Footer = () => {
    return (
        <footer className="horizontal-footer shadow-footer">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-12">
              <div className="text-center">
                <ul className="social-icons list-inline mt-5">
                  <li className="list-inline-item">
                    <a href="#">
                      <FaFacebookF/>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                    <GrLinkedinOption/>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                    <FaPinterestP/>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                    <AiFillGithub/>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                    <FaTumblr/>
                    </a>
                  </li>
                </ul>
                <p className="copyright-text mt-3 mb-5">2021 ©. RectCV Template. Developed and Designed by <b>themesuccess</b></p>
              </div>
            </div>
          </div> 
        </div>
      </footer>
    )
}

export default Footer
