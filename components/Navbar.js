import React, { useState, useEffect, useRef } from "react";
import "./navbar.css";
import logo from "../images/logo.png";
import { FaYoutube, FaTwitter, FaFacebook, FaAngleDown } from "react-icons/fa";
import img1 from "../images/112.jpeg";
import fire from "../images/fire.png";
import ambu from "../images/ambulance.jpeg";
import women from "../images/women.png";
import child from "../images/child.png";
import traffic from "../images/traffic.jpeg";
import cyber from "../images/cyber.jpeg";
import cm from "../images/cm.png";
import photo from "../images/photo.jpeg";
import video from "../images/video.jpeg";

function Navbar() {
  function showAlert(link) {
    const confirm = window.confirm(
      "You are about to leave this website.....This cannot be held responsible for the content of this websites."
    );
    if (confirm == true) {
      //window.location.href=link;
      window.open(link, "_blank");
    }
  }
  const [isOpen, setisOpen] = useState(false);
  const [iisOpen, setIsOpen] = useState(false);
  const [gOpen, setGOpen] = useState(false);

  const toggledrop = () => {
    setisOpen(!isOpen);
  };
  const toggledropd = () => {
    setIsOpen(!iisOpen);
  };
  const toggledropg = () => {
    setGOpen(!gOpen);
  };
  let menuRef = useRef(null);

  useEffect(() => {
    let handler = (event) => {
      if (
        menuRef &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setisOpen(false);
        setIsOpen(false);
        setGOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <>
      <nav className="navigation">
        <img src={logo} alt="MITANG" />
        <ul>
          <li><a href="/">Home</a></li>
          <li>
            <a href="#" onClick={toggledropd}>
              About Us <FaAngleDown className="angle" />
            </a>
            {iisOpen && (
              <div className="dropdown1" ref={menuRef}>
                <li><a href="/general-info">
                  <b>General Information</b></a>
                </li>
                <hr />
                <li><a href="/organisational-setup">
                  <b>Organisational Setup for <span>Uttar Pradesh Police</span></b></a>
                </li>
                <hr />
                <li><a href="/police-school">
                  <b>Police Modern School</b></a>
                </li>
                <hr />
                <li><a>
                  <b>Police Guest House</b></a>
                </li>
                <hr />
                <li><a href="/know-your-state">
                  <b>Know Your State</b></a>
                </li>
                <hr />
                <li><a href="https://uppolice.gov.in/site/writereaddata/siteContent/RTI/202008031111405028RTI_Rules%202015.pdf" target="_blank">
                  <b>Right to Information</b></a>
                </li>
              </div>
            )}
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#" onClick={toggledrop}>
              Helpline
              <FaAngleDown className="angle" />
            </a>
            {isOpen && (
              <div className="dropdown2" ref={menuRef}>
                <div className="drophelp">
                  <img src={img1} alt="112"/>
                  <img src={fire} alt="101" />
                  <img src={ambu} alt="108" />
                  <img src={women} alt="1090" />
                </div>
                <div className="drophelp">
                  <img src={child} alt="1098" />
                  <img src={cyber} alt="1930" />
                  <img src={traffic} alt="1095" />
                  <img src={cm} alt="1076" />
                </div>
              </div>
            )}
          </li>
          <li>
            <a href="#" onClick={toggledropg}>Gallery <FaAngleDown className="angle"/></a>
            {gOpen &&(
                <div className="dropdown3" ref={menuRef}>
                    <a href="/photo-gallery"><img src={photo} alt="photo"/><br/><h4>Photo</h4></a>
                    <a href="#"><img src={video} alt="video"/><br/><h4>Video</h4></a>
                </div>
            )}
          </li>
        </ul>
        <ul className="icon">
          <li>
            <FaYoutube
              onClick={() =>
                showAlert(
                  "https://www.youtube.com/channel/UCU6wKyV1ToMUSzAVQDLUaig"
                )
              }
            />
          </li>
          <li>
            <FaTwitter
              onClick={() => showAlert("https://twitter.com/uppolice/")}
            />
          </li>
          <li>
            <FaFacebook
              onClick={() => showAlert("https://www.facebook.com/uppolice/")}
            />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
