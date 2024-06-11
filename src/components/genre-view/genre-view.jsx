import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Card, Col, Row, Card } from "react-bootstrap";
import ReactPlayer from "react-player";
import Accordion from 'react-bootstrap/Accordion';
import React from 'react';
import Alert from 'react-bootstrap/Alert';
import europeanBadge from '../../images/european-name-badge.svg';
import work from '../../images/work.svg';
import sign from '../../images/signature.svg';
import globe from '../../images/globe.svg';
import repeat from '../../images/repeat.svg';
import familyBadge from '../../images/family-restroom.svg';
import flag from '../../images/flag.svg';
import imdb from '../../images/imdb.svg';
import director from '../../images/director.svg';
import clock from '../../images/clock-2.svg';
import actors from '../../images/actors.svg';
import info from '../../images/info.svg';
import rottenTomatoes from '../../images/rotten-tomatoes.svg';
import Rating from "react-rating";
import { useState } from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const GenreView = ({ genres, token }) => {

  const { genreId } = useParams();
  const genre = genres.find((g) => g._id === genreId);

  const notableWorks = (notableWork) =>
    genres.filter((n) => n.NotableWorks.Title == notableWork);

  const allWorks = (allWork) =>
    genres.filter((a) => a.AllWorks.Title == allWork);

  const subGenres = (sub) =>
    genres.filter((s) => s.SubGenres.Title == sub);


  return (
    <div className="container-profile">
      <Card className="item-view" >

        <Card.Img className='h-100 card mb-3' variant={top} src={genre.ImagePath ? genre.ImagePath : "https://th.bing.com/th/id/OIP.ggX8e6U3YzyhPvp8qGZtQwHaHa?rs=1&pid=ImgDetMain"}
        />

        <Card.Body className="" >
          <Card.Title id="card-title" className="item-title text-center fs-5 pb-3 pt-3">{genre.Name}
             
            {/* {movie.ReleaseDate ? movie.ReleaseDate.slice(0, 4) : "No data yet"}, {movie.Genre.Name} */}
          </Card.Title>
          <Card.Title id="card-info" className="item-info pt-3 pb-3" ><img className="image-info" src={info} style={{ width: "30px", height: "22px", "marginRight": "8px" }} />Info</Card.Title>
          <Card.Title id="card-info" className="item-view-info pb-3">{genre.Description}</Card.Title>
          
        

           <Accordion className='pt-4'>
            <Accordion.Item eventKey="0">
              <Accordion.Header className="accordion-title">Did you know?</Accordion.Header>
              <Accordion.Body className="accordion-lis">
                <Card.Title id="" className="accordion-title" secondary-color="pb-3"><ol>{genre.InterestingFacts.length > 0 ? genre.InterestingFacts.map(fact => <li className="p-2 accordion-lis">{fact}<br /></li>) : "No data yet"} </ol></Card.Title>

              </Accordion.Body>
            </Accordion.Item>
          </Accordion>


          <Alert

            className="mb-3 mt-3 pt-3 text-center text-white alert-div" style={{ background: "#19854e" }}>Watch a related video</Alert>
          <ReactPlayer className="m-auto w-auto" controls

            url={genre.Trailer}>
          </ReactPlayer>

          {/*
          

           */}
          <br />

          <Link to={`/genres`}>
            <Button className="pl-5 pr-5 w-25 media-view-back-btn" style={{ background: "white", color: "black" }}>Back</Button>
          </Link>
        </Card.Body>
        <hr />
      </Card>


      <div>
        <Alert

          className="mb-3 mt-3 pt-3 text-center text-white alert-div" style={{ background: "#19854e" }}>Notable Works</Alert>
      </div>
      <Row className=''>

        {notableWorks(genre.NotableWorks.Title).map((actor) => (
          <Col className="mt-3" md={6} xl={4} lg={4} sm={12} xs={12}>
            <Card className=' card item mb-3' >
              <Card.Img className='w-100' variant='top' src={actor.NotableWorks.ImagePath} />
              <Card.Body>
                <Card.Title id="item-subtitle" className="item-title text-center w-100 pb-3 pt-3">{actor.NotableWorks.Title}</Card.Title>
                <Card.Subtitle id="card-subtitle" className="item-info text-center">{actor.NotableWorks.ReleaseDate ? actor.NotableWorks.ReleaseDate : "No data yet"}</Card.Subtitle>


              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      


      <div>
        <Alert

          className="mb-3 mt-3 pt-3 text-center text-white alert-div" style={{ background: "#19854e" }}>Other Works</Alert>
      </div>
      <Row className=''>
      
        {allWorks(genre.AllWorks.Title).map((actor) => (
          <Col className="mt-3" md={6} xl={4} lg={4} sm={12} xs={12}>
            <Card className=' card item mb-3' >
              <Card.Img className='w-100' variant='top' src={actor.AllWorks.ImagePath} />
              <Card.Body>
                <Card.Title id="item-subtitle" className="item-title text-center w-100 pb-3 pt-3">{actor.AllWorks.Title}</Card.Title>
                <Card.Subtitle id="card-subtitle" className="item-info text-center">{actor.AllWorks.ReleaseDate ? actor.AllWorks.ReleaseDate : "No data yet"}</Card.Subtitle>

               
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>


      <div>
        <Alert

          className="mb-3 mt-3 pt-3 text-center text-white alert-div" style={{ background: "#19854e" }}>Subgenres</Alert>
      </div>

      <Row className=''>

        {subGenres(genre.SubGenres.Title).map((actor) => (
          <Col className="mt-3" md={6} xl={4} lg={4} sm={12} xs={12}>
            <Card className=' card item mb-3' >
              <Card.Img className='w-100' variant='top' src={actor.SubGenres.ImagePath} />
              <Card.Body>
                <Card.Title id="item-subtitle" className="item-title text-center w-100 pb-3 pt-3">{actor.SubGenres.Title}</Card.Title>


              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      



      <div>

      </div>
      <div>

      </div>
      <div>

      </div>
      
      <Link to={`/genres`}>
            <Button className="pl-5 pr-5 mt-2 mb-2 w-25 media-view-back-btn" style={{ background: "white", color: "black" }}>Back</Button>
          </Link>
        
    </div>


  );
};