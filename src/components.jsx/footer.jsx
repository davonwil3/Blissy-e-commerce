import React, { useState } from "react";
import ButtonUI from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Carousel from 'react-bootstrap/Carousel';
import Blog from './blog';
import FooterRender from './footer-render';

function Footer() {
  return (
    <div>
      <div className="flex-container" id="subscribe">
        <div className="flex-container sub-ad">
          <p className="sub-text">
            Subscribe now get
            <p className="sub-price">50% </p>
            off a purchase
          </p>
          <input type="text" class="text-box text-sub" placeholder="Email*"></input>
          <Box ml="8%" mt="2%" mb="4%">
            <ButtonUI variant="contained" color="secondary" p={4}>
              Subscribe
            </ButtonUI>
          </Box>
        </div>
      </div>
      <div className="flex-container " id="blog">
        <div className="title-style"></div>
        <p className="blog-t">Our Blog</p>
        <div className="title-style"></div>
        <div className="break"></div>
        <p>See our latest blog posts</p>
        <div className="break"></div>
        <div className="flex-container margin">
          <Carousel id="blog-carousel">
            <Carousel.Item>
              <div className="flex-container blog-row">
                <Blog
                  title=" Blissy has the best selection of dresses"
                  source="/images/dress-col.jpg"
                  date="March 09"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,."
                />
                <Blog
                  title=" Blissy will be adding a shoe collection"
                  source="/images/shoes.jpg"
                  date="May 15"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,."
                  class="remove2"
                />
                <Blog
                  title="Summer sale 20% off"
                  source="/images/summer.jpg"
                  date="July 23"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,."
                  class="remove"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="flex-container blog-row">
                <Blog
                  title="kids collection coming in october"
                  source="/images/kids.jpg"
                  date="September 08"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,."
                />
                <Blog
                  title="check out Blissy's urban wear"
                  source="/images/urban.jpg"
                  date="February 01"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,."
                  class="remove2"
                />
                <Blog
                  title="Look great at work "
                  source="/images/buisness.jpg"
                  date="January 11"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,."
                  class="remove"
                />
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <FooterRender />
    </div>
  );
}

export default Footer;
