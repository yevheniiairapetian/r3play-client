import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import React from "react";

export const UncontrolledExample = () => {
    return (
      <Carousel fade className="mb-3">
        <Carousel.Item>
          <Image className="w-100" src={"https://4.bp.blogspot.com/-3apsKyBwiqE/Vqzi45Rwj-I/AAAAAAAABUQ/lCwj83mffs8/s1600/gladiator%2B7.jpg"} text="An image showing Gladiator movie scene" /> 
          <Carousel.Caption>
            <h3 className="bg-dark pt-3 pb-3 bg-carousel carousel-caption-header">Gladiator 2 releases November 22, 2024</h3>
            <p className="bg-dark pt-3 pb-3 bg-carousel carousel-caption-paragraph">Check out more</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Image className="w-100" src={"https://www.blogography.com/photos76/MatrixRedPill.jpg"} text="An image showing Matrix movie poster" /> 
          <Carousel.Caption>
            <h3 className="bg-dark pt-3 pb-3 bg-carousel carousel-caption-header">Matrix Resurrections is out now</h3>
            <p className="bg-dark pt-3 pb-3 bg-carousel carousel-caption-paragraph">Head over to the movie to read more and watch the official trailer.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Image className="w-100" src={"https://c2.staticflickr.com/8/7133/7073627957_252f33f1a8_b.jpg"} text="An image showing Loki Season 2 poster" /> 
          <Carousel.Caption>
            <h3 className="bg-dark pt-3 pb-3 bg-carousel carousel-caption-header">Loki: Season 2 releases October 5, 2023</h3>
            <p className="bg-dark pt-3 pb-3 bg-carousel carousel-caption-paragraph">
              Check out more.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Image className="w-100" src={"https://images.wired.it/wp-content/uploads/2021/05/28123008/118588361_screenshot2021-05-20at14.21.24-1050x590.jpg"} text="An image showing Friends Reunion photo" /> 
          <Carousel.Caption>
            <h3 className="bg-dark pt-3 pb-3 bg-carousel carousel-caption-header">Friends Reunion out 2021</h3>
            <p className="bg-dark pt-3 pb-3 bg-carousel carousel-caption-paragraph">
              Check out more.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Image className="w-100" src={"https://www.film-rezensionen.de/wp-content/uploads/2007/12/The-Fast-And-The-Furious-Tokyo-Drift-Frontpage.jpg"} text="An image showing Fast and Furious: Tokyo Drift poster" /> 
          <Carousel.Caption>
            <h3 className="bg-dark pt-3 pb-3 bg-carousel carousel-caption-header">Recall the Fast and Furious: Tokyo Drift - the 3rd movie in the series</h3>
            <p className="bg-dark pt-3 pb-3 bg-carousel carousel-caption-paragraph">
              Check out more.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  