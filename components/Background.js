import React, { useState,useEffect } from "react";
import Marquee from "react-fast-marquee";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { slider } from "./Slider";
import './background.css'
import { Link } from 'react-router-dom';

function Background() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = slider.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log("prev");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);



  return (
    <>
      <div className="slider">
        <FaArrowAltCircleLeft className="arrow prev" onClick={prevSlide}/>
        <FaArrowAltCircleRight className="arrow next" onClick={nextSlide}/>

        <button className="police_unit police"><b>
          Police Unit </b>
        </button>

        <a href="https://uppolice.gov.in/site/writereaddata/siteContent/tshq/202109171107082263PoliceStationList.pdf" 
        className="police_unit pscode" target="_blank">
        <b>PS Codes for e-Court</b></a>

        {slider.map((slide, index) => {
          return (
            <div
              className={index == currentSlide ? "slide current" : "slide"}
              key={index}
            >
              {index == currentSlide && (
                <>
                  <img src={slide.image} alt="slide" />
                  <div className="contentss">
                    <h2>{slide.heading}</h2>
                    <hr className="hr"/>
                    <p>{slide.desc}</p>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      <div className="body">
        <h1 className="wel">Welcome.....</h1>

        <div className="move">
          <Marquee direction="right" speed="100" pauseOnHover="true">
            <h2>For FIR Registeration, Click on Public button</h2>
          </Marquee>
        </div>

        <div className="firstbtn">
          <button>Immediate Contact</button>
          <button>Missing Person</button>
          <button>News</button>
        </div>
        <div className="secondbtn">
          <button>Admin</button>
          <button>Police</button>
          <Link to="/public"><button>Public</button></Link>
          
        </div>
      </div>
    </>
  );
}

export default Background;
