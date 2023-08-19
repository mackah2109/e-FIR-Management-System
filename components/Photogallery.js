import React from "react";
import "./photogallery.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import images from "../images/photo/images.jpeg";
import img from "../images/photo/img.jpeg";
import img1 from "../images/photo/img1.jpeg";
import img2 from "../images/photo/img2.jpeg";
import img3 from "../images/photo/img3.jpeg";
import img4 from "../images/photo/img4.jpeg";
import img5 from "../images/photo/img5.jpeg";
import img6 from "../images/photo/img6.jpeg";
import img7 from "../images/photo/img7.jpeg";
import img8 from "../images/photo/img8.jpeg";
import img9 from "../images/photo/img9.jpeg";
import img10 from "../images/photo/img10.jpg";
import img11 from "../images/photo/img11.jpg";
import img12 from "../images/photo/img12.jpeg";
import img13 from "../images/photo/img13.jpeg";


function Photogallery() {
  return (
    <>
      <Navbar />
      <div className="images">
        <div className="pho">
          <img src={images} />
          <img src={img} />
          <img src={img1} />
        </div>
        <div className="pho">
          <img src={img2} />
          <img src={img3} />
          <img src={img4} />
        </div>
        <div className="pho">
          <img src={img5} />
          <img src={img6} />
          <img src={img7} />
        </div>
        <div className="pho">
          <img src={img8}/>
          <img src={img9}/>
          <img src={img10}/>
        </div>
        <div className="pho">
          <img src={img11}/>
          <img src={img12}/>
          <img src={img13}/>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Photogallery;
