import React from 'react';
import "./Banner.css";
const Banner = () => {
  return (
    <header
    className="preview-banner-area"
    >
        <div className="container">
            <div className="box-container">
                <div className="h-ins m-auto">
                    <div className="logo-area">
                        <h1 className="text-center">Rect<span>CV</span></h1>
                    </div>
                    <div className="desciption">
                    <p class="text-center">Personal Bootstrap 4 HTML Template</p>
                    </div>
                    <div class="btnarea text-center">
                        <a href="https://themeforest.net/item/rectcv-personal-bootstrap-4-html-template/26951744" class="btn btn-primary">Buy Now</a>
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
};

export default Banner;
