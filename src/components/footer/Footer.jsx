import React from 'react'
import "./Footer.css"
import { AiFillHeart } from 'react-icons/all';
const Footer = () => {
    return (
        <footer>
        <div className="footer">
            <p className="text-center m-auto">
            Designed and Developed with 
            <AiFillHeart style={{color : "#f07f81", fontSize :'20px'}}/>
            by
            <a href="" style={{color :"#f07f81", marginLeft :'5px'}}>themesuccess</a>
            </p>
        </div>

        </footer>
    )
}

export default Footer
