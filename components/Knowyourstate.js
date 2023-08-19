import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./knowyourstate.css";
import main from "../images/up/main.jpeg";
import img1 from "../images/up/img1.jpeg";
import img2 from "../images/up/img2.jpeg";
import img3 from "../images/up/img3.jpeg";
import agra from "../images/up/taj.jpeg";
import vara from "../images/up/vara.jpeg";
import ayodhya from "../images/up/ayodhya.jpeg";
import allahabad from "../images/up/allahabad.jpeg";
import dhudwa from "../images/up/dhudwa.jpeg";
import fatehpur from "../images/up/fatehpur.jpeg";
import jhashi from "../images/up/jhashi.jpeg";
import lucknow from "../images/up/lucknow.jpeg";
import mathura from "../images/up/mathura.jpeg";
import sarnath from "../images/up/sarnath.jpeg";
import vrinda from "../images/up/vrinda.jpeg";
import hastinapur from "../images/up/hastinapur.jpeg";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

function Knowyourstate() {
  const slider = [
    { image: main },
    { image: img1 },
    { image: img2 },
    { image: img3 },
  ];
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
      <Navbar />
      <div className="knowyour">
        <div className="slidesup">
          <FaArrowAltCircleLeft
            className="arrowup prevup"
            onClick={prevSlide}
          />
          <FaArrowAltCircleRight
            className="arrowup nextup"
            onClick={nextSlide}
          />

          {slider.map((slide, index) => {
            return (
              <div
                className={
                  index == currentSlide ? "slideup currentup" : "slideup"
                }
                key={index}
              >
                {index == currentSlide && (
                  <>
                    <img src={slide.image} alt="slideup" />
                  </>
                )}
              </div>
            );
          })}
        </div>

        <h1>UTTAR PRADRESH</h1>
        <p>
          <b>
            Uttar Pradesh, the heart of India, is a land of epics, holy rivers,
            ancient cities and pilgrimage. In modern times, it is emerging as a
            driver of the nation's economy with its network of expressways,
            industrial corridors, international airports, centers of educational
            and medical excellence, and an exporter of indigenous products.
            Since the times of Lord Rama, Lord Krishna, Gautam Buddha and Lord
            Mahavira, the state has been the center of cultural and intellectual
            brilliance. Today, with its robust infrastructure and a proactive
            leadership, the state offers the most investor friendly environment
            for a better future for its people and the entire country.
          </b>
        </p>

        <h2>Details about Uttar Pradesh</h2>
        <p>
          {" "}
          Uttar Pradesh is a state in northern India. With over 240 million
          inhabitants, it is the most populated state in India as well as the
          most populous country subdivision in the world. It was established in
          1950 after India had become a republic. It was a successor to the
          United Provinces (UP) during the period of the Dominion of India
          (1947–1950), which in turn was a successor to the United Provinces
          (UP) established in 1935, and eventually of the United Provinces of
          Agra and Oudh established in 1902 during the British Raj. The state is
          divided into 18 divisions and 75 districts, with the state capital
          being Lucknow, and Prayagraj serving as the judicial capital. On 9
          November 2000, a new state, Uttaranchal (now Uttarakhand), was created
          from Uttar Pradesh's western Himalayan hill region. The two major
          rivers of the state, the Ganges and its tributary Yamuna, meet at the
          Triveni Sangam in Allahabad, a Hindu pilgrimage site. Other notable
          rivers are Gomti and Saryu. The forest cover in the state is 6.1 per
          cent of the state's geographical area. The cultivable area is 82 per
          cent of total geographical area and net area sown is 68.5 per cent of
          cultivable area. The state is bordered by Rajasthan to the west,
          Haryana, Himachal Pradesh and Delhi to the northwest, Uttarakhand and
          an international border with Nepal to the north, Bihar to the east,
          Madhya Pradesh to the south, and touches the states of Jharkhand and
          Chhattisgarh to the southeast. It covers 240,928 km2 (93,023 sq mi),
          equal to 7.3% of the total area of India, and is the fourth-largest
          Indian state by area. Though long known for sugar production, the
          state's economy is now dominated by the services industry. The service
          sector comprises travel and tourism, hotel industry, real estate,
          insurance and financial consultancies. The economy of Uttar Pradesh is
          the third-largest state economy in India with ₹18.63 lakh crore
          (US$230 billion) in gross domestic product and a per capita GSDP of
          ₹68,810 (US$860). President's rule has been imposed in Uttar Pradesh
          ten times since 1968, for different reasons and for a total of 1,700
          days. The state has currently three international airports – Chaudhary
          Charan Singh International Airport (Lucknow), Lal Bahadur Shastri
          Airport (Varanasi) and Kushinagar International Airport (Kushinagar).
          Prayagraj Junction is the headquarters of the North Central Railway
          and Gorakhpur Railway Station serves as the headquarters of the North
          Eastern Railway. The High Court of the state is located in Allahabad.
          The state contributes 80 seats and 31 seats to the lower house Lok
          Sabha and the upper house Rajya Sabha, respectively. Inhabitants of
          the state are called either Awadhi, Bagheli, Bhojpuri (Purvanchali),
          Braji, Bundeli, Kannauji, or Rohilkhandi depending upon their region
          of origin. Hinduism is practised by more than three-fourths of the
          population, with Islam being the next largest religious group. Hindi
          is the most widely spoken language and is also the official language
          of the state, along with Urdu. Uttar Pradesh was home to most of the
          mainstream political entities that have existed in ancient and
          medieval India including the Maurya Empire, Harsha Empire, Gupta
          Empire, Pala Empire, Delhi Sultanate, Mughal Empire as well as many
          other empires. At the time of Indian independence movement in the
          early 20th century, there were three major princely states in Uttar
          Pradesh – Ramgadi, Rampur and Benares. The state houses several holy
          Hindu temples and pilgrimage centres. Along with several historical,
          natural, and religious tourist destinations, including Agra, Aligarh,
          Ayodhya, Kushinagar, Mathura, Prayagraj, Varanasi and Vrindavan, Uttar
          Pradesh is also home to three World Heritage sites.
        </p>

        <p>
          <b>
            Uttar Pradesh is divided into 75 districts under these 18 divisions:
            <br />
          </b>
          1. Saharanpur
          <br />
          2. Moradabad
          <br />
          3. Bareilly
          <br />
          4. Meerut
          <br />
          5. Aligarh
          <br />
          6. Agra
          <br />
          7. Devipatan
          <br />
          8. Basti
          <br />
          9. Gorakhpur
          <br />
          10. Kanpur
          <br />
          11. Lucknow
          <br />
          12. Faizabad
          <br />
          13. Azamgarh
          <br />
          14. Jhansi
          <br />
          15. Chitrakoot
          <br />
          16. Prayagraj
          <br />
          17. Varanasi
          <br />
          18. Mirzapur
          <br />
          <br />
        </p>

        <h1>Tourist Places in Uttar Pradesh</h1>
        <div id="tourist">
          <div className="tourist">
            <img src={agra} alt="Agra" />
            <img src={vara} alt="Varanasi" />
            <img src={ayodhya} alt="Ayodhya" />
          </div>
          <div className="touristplace">
            <ul>
                <li><b>Agra</b></li>
                <li><b>Varanasi</b></li>
                <li><b>Ayodhya</b></li>
            </ul>
          </div>
          <div className="tourist">
            <img src={allahabad} alt="Allahabad" />
            <img src={dhudwa} alt="Dhudhwa" />
            <img src={fatehpur} alt="Fatehpur" />
          </div>
          <div className="touristplace1">
            <ul>
                <li><b>Allahabad</b></li>
                <li className="dhudhwa"><b>Dudhwa National Park</b></li>
                <li className="fateh"><b>Fatehpur Sikri</b></li>
            </ul>
          </div>
          <div className="tourist">
            <img src={vrinda} alt="Vrindavan" />
            <img src={hastinapur} alt="Hastinapur" />
            <img src={jhashi} alt="Jhashi" />
          </div>
          <div className="touristplace2">
            <ul>
                <li><b>Vrindavan</b></li>
                <li><b>Hastinapur</b></li>
                <li><b>Jhansi</b></li>
            </ul>
          </div>
          <div className="tourist">
            <img src={lucknow} alt="Lucknow" />
            <img src={mathura} alt="Mathura" />
            <img src={sarnath} alt="Sarnath" />
          </div>
          <div className="touristplace3">
            <ul>
                <li><b>Lucknow</b></li>
                <li><b>Mathura</b></li>
                <li><b>Sarnath</b></li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Knowyourstate;
