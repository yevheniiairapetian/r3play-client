import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import React from "react";

export const UncontrolledExample = () => {
    return (
      <Carousel fade className="mb-3">
        <Carousel.Item>
          <Image className="w-100" src={"https://images.everyeye.it/img-articoli/il-gladiatore-2-ritorno-colosseo-stagione-nostalgia-v7-44236.jpg"} text="An image showing Gladiator movie scene" /> 
          <Carousel.Caption>
            <h3 className="bg-dark pt-3 pb-3 bg-carousel carousel-caption-header">Gladiator 2 releases November 22, 2024</h3>
            <p className="bg-dark pt-3 pb-3 bg-carousel carousel-caption-paragraph">Check out more</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Image className="w-100" src={"https://image.tmdb.org/t/p/original/fNG7i7RqMErkcqhohV2a6cV1Ehy.jpg"} text="An image showing Matrix movie poster" /> 
          <Carousel.Caption>
            <h3 className="bg-dark pt-3 pb-3 bg-carousel carousel-caption-header">Matrix Resurrections is out now</h3>
            <p className="bg-dark pt-3 pb-3 bg-carousel carousel-caption-paragraph">Head over to the movie to read more and watch the official trailer.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Image className="w-100" src={"https://img.olhardigital.com.br/wp-content/uploads/2021/05/Loki-1.jpg"} text="An image showing Loki Season 2 poster" /> 
          <Carousel.Caption>
            <h3 className="bg-dark pt-3 pb-3 bg-carousel carousel-caption-header">Loki: Season 2 releases October 5, 2023</h3>
            <p className="bg-dark pt-3 pb-3 bg-carousel carousel-caption-paragraph">
              Check out more.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Image className="w-100" src={"https://www.rollingstone.com/wp-content/uploads/2021/05/FRIENDS-REUNION_Key-Art-Final_Vertical_PR1.jpg"} text="An image showing Friends Reunion photo" /> 
          <Carousel.Caption>
            <h3 className="bg-dark pt-3 pb-3 bg-carousel carousel-caption-header">Friends Reunion out 2021</h3>
            <p className="bg-dark pt-3 pb-3 bg-carousel carousel-caption-paragraph">
              Check out more.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Image className="w-100" src={"https://www.theworkprint.com/wp-content/uploads/2015/03/The-Fast-and-the-Furious-Tokyo-Drift-2006-poster.jpg"} text="An image showing Fast and Furious: Tokyo Drift poster" /> 
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
  