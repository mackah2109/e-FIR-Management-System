import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import organisation from '../images/organisational.png';
import gazete from '../images/gazete.png';
import ngazete from '../images/ngazete.png';
import './organisational.css';

function Organisational() {
  return (
    <>
        <Navbar/>
        <div className='organisational'>
            <h1>Organisational Setup for Uttar Pradesh Police
            </h1>
            <img src={organisation} alt='organisation'/>

            <h1>Ranks of law enforcement in Uttar Pradesh</h1>
            <h2><u>Indian Police Service gazetted officers rank insignia</u></h2>
            <div className='gazette'>
            <img src={gazete} alt="Gazetted officers" />
            </div>

            <h2><u>Indian Police non-gazetted officers rank insignia</u></h2>
            <div className='gazette'>
            <img src={ngazete} alt="Non-Gazetted officers" />
            </div>
            
        </div>
        <Footer/>
    </>
  )
}

export default Organisational
