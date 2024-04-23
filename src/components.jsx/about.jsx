import React, { useState } from "react";
import ButtonUI from '@material-ui/core/Button';
import NavRender from './nav';
import FooterRender from './footer-render'

function About() {


  return (
    <div>
      <div className="flex-container " id="about-page">
        <NavRender />

        <div className="flex-container about-content">
          <div className="flex-container aboutpicMain-container">
            <img src="/images/dreads.jpg" className="aboutpic-main" />
          </div>

          <div className="flex-container about-description">
            <h1>Who we are</h1>
            <p>About Blissy: <br />
Welcome to Blissy, your premier destination for contemporary and classic fashion. Founded in the vibrant heart of New York City in 2015, Blissy has grown from a passionate vision into a flourishing online destination, serving customers who cherish style, quality, and creativity.<br />

At Blissy, we believe that fashion is a way to express yourself boldly and uniquely. That’s why we offer an extensive range of clothing for both women and men, designed to fit every lifestyle and occasion. Whether you're searching for the perfect business attire, a casual weekend outfit, or something special for a night out, Blissy has something for everyone. <br />

Our Mission <br /> 

Our mission is simple: to empower you to look and feel your best. We do this by providing high-quality, accessible fashion that highlights your individuality and enhances your life. Every piece in our collection is selected with care and consideration, ensuring that it not only meets but exceeds the expectations of our discerning clientele. <br />

Our Products <br />

Blissy’s product range includes everything from sophisticated dresses and suits to laid-back tees and jeans. Our women’s collection features elegant designs, vibrant prints, and comfortable basics that stay on trend season after season. For men, we offer everything from sharp tailoring to relaxed streetwear, all crafted with the same attention to detail and quality.

We are particularly proud of our commitment to sustainable fashion. We work closely with suppliers who share our ethos of environmental responsibility, using recycled materials and eco-friendly practices wherever possible. <br/>

Join Us on Our Journey <br />

Explore our latest collections online and follow us on Instagram, Facebook, and Twitter for your daily dose of fashion inspiration. At Blissy, we’re excited about what the future holds and we look forward to sharing our fashion journey with you. Be bold, be brave, be you—be Blissy.

Thank you for choosing us for your fashion needs. We are committed to providing you with the best possible experience, each time and every time</p>
          </div>
        </div>
      </div>
      <FooterRender />
    </div>
  )
}


export default About;
