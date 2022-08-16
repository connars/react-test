import '../hero/hero.scss';
import React from 'react';

import heroImg from "../hero/hero.png"




function Hero() {
    return (
        <div className="hero">
              <div className='hero-text'>
                  <h1 className="">
                    Професійна реставрація
                    меблів та інших поверхонь
                  </h1>
                  <div>
                      <button className="first_button zoom" href="http://gooogle.com" >Напишіть нам</button>
                      <a href="test" >Наші послуги</a>
                  </div>
               
              </div>
              <div className='hero-img'>
                <img src={heroImg} />
              </div>
        </div>
    );
  }
  

export default Hero;