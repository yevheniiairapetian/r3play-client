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

export const ActorView = ({ actors, token }) => {

  const { actorId } = useParams();
  const actor = actors.find((a) => a._id === actorId);

  const notableWorks = (notableWork) =>
    actors.filter((a) => a.NotableWorks.Title == notableWork);

  const allWorks = (allWork) =>
    actors.filter((a) => a.AllWorks.Title == allWork);


  return (
    <div className="container-profile">
      <Card className="item-view" >

        <Card.Img className='h-100 card mb-3' variant={top} src={actor.ImagePath ? actor.ImagePath : "https://th.bing.com/th/id/OIP.ggX8e6U3YzyhPvp8qGZtQwHaHa?rs=1&pid=ImgDetMain"}
        />

        <Card.Body className="" >
          <Card.Title id="card-title" className="item-title text-center fs-5 pb-3 pt-3">{actor.Name}
            {/* , 
            {movie.ReleaseDate ? movie.ReleaseDate.slice(0, 4) : "No data yet"}, {movie.Genre.Name} */}
          </Card.Title>
          <Card.Title id="card-info" className="item-info pt-3 pb-3" ><img className="image-info" src={info} style={{ width: "30px", height: "22px", "marginRight": "8px" }} /> </Card.Title>
          <Card.Title id="card-info" className="item-view-info pb-3">{actor.Bio}</Card.Title>
          <Card.Title id="card-info" className="item-view-info pb-3"><img className="image-clock" src={clock} style={{ width: "30px", height: "26px", "marginRight": "8px" }} />Age</Card.Title>

          <Card.Title id="card-info" className="item-title pb-3">{actor.Birth ? actor.Birth : "No data yet"} - {actor.Death ? actor.Death : "Present"}
          </Card.Title>

          <Card.Title id="card-info" className="item-view-info pb-3"><img className="image-work" src={work} style={{ width: "30px", height: "26px", "marginRight": "8px" }} />Occupation</Card.Title>

          <Card.Title id="card-info" className="item-title pb-3">{actor.Occupation.length > 0 ? actor.Occupation.map(occupation => <>{occupation}<br /></>) : "No data yet"}
          </Card.Title>
          <Card.Title id="card-info" className="item-view-info pb-3"><img className="image-birthplace" src={europeanBadge} style={{ width: "30px", height: "26px", "marginRight": "8px" }} />Birthplace</Card.Title>

          <Card.Title id="card-info" className="item-title pb-3">
            {actor.Birthplace ? actor.Birthplace : "No data yet"}
          </Card.Title>
          <Card.Title id="card-info" className="item-view-info pb-3"><img className="image-flag" src={flag} style={{ width: "30px", height: "26px", "marginRight": "8px" }} />Nationality</Card.Title>

          <Card.Title id="card-info" className="item-title pb-3">
            {actor.Nationality ? actor.Nationality : "No data yet"}
          </Card.Title>
          <Card.Title id="card-info" className="item-view-info pb-3"><img className="image-signature" src={sign} style={{ width: "30px", height: "26px", "marginRight": "8px" }} />Nicknames</Card.Title>

          <Card.Title id="card-info" className="item-title pb-3">
            {actor.Nicknames.length > 0 ? actor.Nicknames.map(nick => <>{nick}<br /></>) : "No data yet"}
          </Card.Title>
          <Card.Title id="card-info" className="item-view-info pb-3"><img className="image-repeat" src={repeat} style={{ width: "30px", height: "26px", "marginRight": "8px" }} />Years Active</Card.Title>

          <Card.Title id="card-info" className="item-title pb-3">
            {actor.YearsActive ? actor.YearsActive : "No data yet"}
          </Card.Title>


          {/* <Card.Title id="card-info" className="item-view-info pt-3 pb-2" >{actor.NotableWorks.Duration}</Card.Title> */}
          <Card.Title id="card-info" className="item-view-info pb-3"><img className="image-family-restroom" src={familyBadge} style={{ width: "30px", height: "26px", "marginRight": "8px" }} />Spouses </Card.Title>

          <Card.Title id="card-info" className="item-view-info pb-2"></Card.Title>
          <Card.Title id="card-info" className="item-title pb-3">
            {actor.Spouses.length > 0 ? actor.Spouses.map(spouse => <>{spouse}<br /></>) : "No data yet"}
          </Card.Title>

          <Accordion className='pb-4'>
            <Accordion.Item eventKey="0">
              <Accordion.Header className="accordion-title">Famous Quotes</Accordion.Header>
              <Accordion.Body className="accordion-lis">
                <Card.Title id="" className="accordion-title" secondary-color="pb-3"><ol>{actor.Citations.length > 0 ? actor.Citations.map(quote => <li className="p-2 accordion-lis">{quote}<br /></li>) : "No data yet"} </ol></Card.Title>

              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Card.Title id="card-info" className="item-view-info pb-3"><img className="image-globe" src={globe} style={{ width: "30px", height: "26px", "marginRight": "8px" }} />Official Website</Card.Title>

          <Link className="item-info pb-2" to={actor.Website} target="_blank">
            {actor.Website}
          </Link>

          <Accordion className='pt-4'>
            <Accordion.Item eventKey="0">
              <Accordion.Header className="accordion-title">Did you know?</Accordion.Header>
              <Accordion.Body className="accordion-lis">
                <Card.Title id="" className="accordion-title" secondary-color="pb-3"><ol>{actor.InterestingFacts.length > 0 ? actor.InterestingFacts.map(fact => <li className="p-2 accordion-lis">{fact}<br /></li>) : "No data yet"} </ol></Card.Title>

              </Accordion.Body>
            </Accordion.Item>
          </Accordion>


          <Alert

            className="mb-3 mt-3 pt-3 text-center text-white " style={{ background: "#19854e" }}>Watch a related video</Alert>
          <ReactPlayer className="m-auto w-auto" controls

            url={actor.Trailer}>
          </ReactPlayer>

          {/*
          

           */}
          <br />

          <Link to={`/actors`}>
            <Button className="pl-5 pr-5 w-25" style={{ background: "white", color: "black" }}>Back</Button>
          </Link>
        </Card.Body>
        <hr />
      </Card>


      <div>
        <Alert

          className="mb-3 mt-3 pt-3 text-center text-white " style={{ background: "#19854e" }}>Notable Works</Alert>
      </div>
      <Row className=''>

        {notableWorks(actor.NotableWorks.Title).map((actor) => (
          <Col className="mt-3" md={6} xl={4} lg={4} sm={12} xs={12}>
            <Card className=' card item mb-3' >
              <Card.Img className='w-100' variant='top' src={actor.NotableWorks.ImagePath} />
              <Card.Body>
                <Card.Title id="item-subtitle" className="item-title text-center w-100 pb-3 pt-3">{actor.NotableWorks.Title}  {"(" + actor.NotableWorks.ReleaseDate + ")"}</Card.Title>
                <Card.Subtitle id="card-subtitle" className="item-info text-center">{actor.NotableWorks.Genre}</Card.Subtitle>


              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>


      <div>
        <Alert

          className="mb-3 mt-3 pt-3 text-center text-white " style={{ background: "#19854e" }}>Other Works</Alert>
      </div>
      <Row className=''>
        {/* {similarMovies(movie.Genre.Name).map((movie) => (
            <Col className="mt-3" md={6} xl={4} lg={4} sm={12} xs={12}>
              <Card className=' card item mb-3' >
                <Card.Img className='w-100' variant='top' src={movie.ImagePath} />
                <Card.Body>
                  <Card.Title id="item-subtitle" className="item-info text-center w-100 pb-3 pt-3">{movie.Title} {"(" + movie.ReleaseDate.slice(0, 4) + ")"}</Card.Title>

                  <Link to={`/movies/${movie._id}`}>
                    <Button className='info-button w-100 mt-2' variant='outline-light'>More</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))} */}
        {allWorks(actor.AllWorks.Title).map((actor) => (
          <Col className="mt-3" md={6} xl={4} lg={4} sm={12} xs={12}>
            <Card className=' card item mb-3' >
              <Card.Img className='w-100' variant='top' src={actor.AllWorks.ImagePath} />
              <Card.Body>
                <Card.Title id="item-subtitle" className="item-title text-center w-100 pb-3 pt-3">{actor.AllWorks.Title}  {"(" + actor.AllWorks.ReleaseDate + ")"}</Card.Title>
                <Card.Subtitle id="card-subtitle" className="item-info text-center">{actor.AllWorks.Genre}</Card.Subtitle>

                {/* <Link to={`/movies/${movie._id}`}>
        <Button className='info-button w-100 mt-2' variant='outline-light'>More</Button>
      </Link> */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* <div>
        <div>
          <Alert

            className="mb-3 mt-3 pt-3 text-center text-white " style={{ background: "#19854e" }}>You may also like</Alert>
        </div>
        <Row className=''>
          {similarMovies(movie.Genre.Name).map((movie) => (
            <Col className="mt-3" md={6} xl={4} lg={4} sm={12} xs={12}>
              <Card className=' card item mb-3' >
                <Card.Img className='w-100' variant='top' src={movie.ImagePath} />
                <Card.Body>
                  <Card.Title id="item-subtitle" className="item-info text-center w-100 pb-3 pt-3">{movie.Title} {"(" + movie.ReleaseDate.slice(0, 4) + ")"}</Card.Title>

                  <Link to={`/movies/${movie._id}`}>
                    <Button className='info-button w-100 mt-2' variant='outline-light'>More</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div>
          <Alert

            className="mb-3 mt-3 pt-3 text-center text-white " style={{ background: "#19854e" }}>This director also made</Alert>
        </div>
        <Row className=''>
          {similarDirector(movie.Director.Name).map((movie) => (
            <Col className="mt-3" md={6} xl={4} lg={4} sm={12} xs={12}>
              <Card className=' card item mb-3' >
                <Card.Img className='w-100' variant='top' src={movie.ImagePath} />
                <Card.Body>
                  <Card.Title id="card-subtitle" className="item-info text-center w-100 pb-3 pt-3">{movie.Title} {"(" + movie.ReleaseDate.slice(0, 4) + ")"}</Card.Title>

                  <Link to={`/movies/${movie._id}`}>
                    <Button className='info-button w-100 mt-2' variant='outline-light'>More</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Alert

          className="mb-3 mt-3 pt-3 text-center text-white " style={{ background: "#19854e" }}>Same Rotten Tomatoes Audience Rating also have</Alert>
      </div>
      <Row className=''>
        {similarRating(movie.Rating).map((movie) => (
          <Col className="mt-3" md={6} xl={4} lg={4} sm={12} xs={12}>
            <Card className=' card item mb-3' >
              <Card.Img className='w-100' variant='top' src={movie.ImagePath} />
              <Card.Body>
                <Card.Title id="card-subtitle" className="item-info text-center w-100 pb-3 pt-3">{movie.Title} {"(" + movie.ReleaseDate.slice(0, 4) + ")"}</Card.Title>

                <Link to={`/movies/${movie._id}`}>
                  <Button className='info-button w-100 mt-2' variant='outline-light'>More</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Alert

        className="mb-3 mt-3 pt-3 text-center text-white " style={{ background: "#19854e" }}>Same IMDb rating also have</Alert>

      <Row className=''>
        {similarIMDBRating(movie.IMDbRating).map((movie) => (
          <Col className="mt-3" md={6} xl={4} lg={4} sm={12} xs={12}>
            <Card className=' card item mb-3' >
              <Card.Img className='w-100' variant='top' src={movie.ImagePath} />
              <Card.Body>
                <Card.Title id="card-subtitle" className="item-info text-center w-100 pb-3 pt-3">{movie.Title} {"(" + movie.ReleaseDate.slice(0, 4) + ")"}</Card.Title>

                <Link to={`/movies/${movie._id}`}>
                  <Button className='info-button w-100 mt-2' variant='outline-light'>More</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>


      <Alert

        className="mb-3 mt-3 pt-3 text-center text-white " style={{ background: "#19854e" }}>Actors from this movie also play in</Alert>
      <div>
        <Row className=''>
          {sameActors(movie.Actors).map((movie) => (
            <Col className="mt-3" md={6} xl={4} lg={4} sm={12} xs={12}>
              <Card className=' card item mb-3' >
                <Card.Img className='w-100' variant='top' src={movie.ImagePath} />
                <Card.Body>
                  <Card.Title id="card-subtitle" className="item-info text-center w-100 pb-3 pt-3">{movie.Title} {"(" + movie.ReleaseDate.slice(0, 4) + ")"}</Card.Title>

                  <Link to={`/movies/${movie._id}`}>
                    <Button className='info-button w-100 mt-2' variant='outline-light'>More</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Alert

          className="mb-3 mt-3 pt-3 text-center text-white " style={{ background: "#19854e" }}>Released in the same year</Alert>
      </div>
      <Row className=''>
        {sameDate(movie.ReleaseDate).map((movie) => (
          <Col className="mt-3" md={6} xl={4} lg={4} sm={12} xs={12}>
            <Card className=' card item mb-3' >
              <Card.Img className='w-100' variant='top' src={movie.ImagePath} />
              <Card.Body>
                <Card.Title id="card-subtitle" className="item-info text-center w-100 pb-3 pt-3">{movie.Title} {"(" + movie.ReleaseDate.slice(0, 4) + ")"}</Card.Title>

                <Link to={`/movies/${movie._id}`}>
                  <Button className='info-button w-100 mt-2' variant='outline-light'>More</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Alert

        className="mb-3 mt-3 pt-3 text-center text-white " style={{ background: "#19854e" }}>Takes around the same time to watch</Alert>

      <Row className=''>
        {sameDuration(movie.Duration).map((movie) => (
          <Col className="mt-3" md={6} xl={4} lg={4} sm={12} xs={12}>
            <Card className=' card item mb-3' >
              <Card.Img className='w-100' variant='top' src={movie.ImagePath} />
              <Card.Body>
                <Card.Title id="card-subtitle" className="item-info text-center w-100 pb-3 pt-3">{movie.Title} {"(" + movie.ReleaseDate.slice(0, 4) + ")"}</Card.Title>

                <Link to={`/movies/${movie._id}`}>
                  <Button className='info-button w-100 mt-2' variant='outline-light'>More</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row> */}



      <div>

      </div>
      <div>

      </div>
      <div>

      </div>
      {/* <Link to={`/movies`}>
        <Button className="pl-5 pr-5 mt-4 w-25" style={{ background: "white", color: "black" }}>Back</Button>
      </Link> */}
    </div>


  );
};