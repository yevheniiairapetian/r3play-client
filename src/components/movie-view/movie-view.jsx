import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Card, Col, Row, Card } from "react-bootstrap";
import ReactPlayer from "react-player";
import Accordion from 'react-bootstrap/Accordion';
import React from 'react';
import Alert from 'react-bootstrap/Alert';
import imdb from '../../images/imdb.svg';
import director from '../../images/director.svg';
import clock from '../../images/clock.svg';
import actors from '../../images/actors.svg';
import info from '../../images/info.svg';
import sword from '../../images/sword.svg';
import rottenTomatoes from '../../images/rotten-tomatoes.svg';
import Rating from "react-rating";
import { useState } from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MovieView = ({ movies, token }) => {
 
  
  const { movieId } = useParams();
  const movie = movies.find((m) => m._id === movieId);
  const similarMovies = (genreName) =>
    movies.filter((m) => m.Genre.Name == genreName && m._id !== movieId);
  const similarDirector = (directorName) =>
    movies.filter((m) => m.Director.Name == directorName && m._id !== movieId);
  const similarRating = (movieRating) =>
    movies.filter((m) => m.Rating == movieRating && m._id !== movieId);
  const similarIMDBRating = (movieIMDBRating) =>
    movies.filter((m) => m.IMDbRating == movieIMDBRating && m._id !== movieId);
  const sameDate = (Date) =>
    movies.filter((m) => m.ReleaseDate == Date && m._id !== movieId);
  const sameDuration = (Duration) =>
    movies.filter((m) => m.Duration == Duration && m._id !== movieId);
  const sameActors = (Actors) => movies.filter(m => m._id !== movieId && Actors.some(actor => m.Actors.includes(actor)));
  


  return (
    <div className="container-profile">
      <Card className="item-view" >
        <Card.Img className='h-100 card mb-3' variant={top} src={movie.ImagePath} />
        {/* <strong>Example 3</strong>
      <Rating
        fractions={2}
        
        stop={10}
        initialRating={rate}
        onClick={()=>{rateMovie()}}
      /> */}
      {/* <p>Rating: { */}
      {/* rate */}
      {/* }</p> */}
      <Card.Body className="" >
          <Card.Title id="card-title" className="item-title text-center fs-5 pb-3 pt-3">{movie.Title}, {movie.ReleaseDate ? movie.ReleaseDate.slice(0, 4) : "No data yet"}, {movie.Genre.Name}</Card.Title>
          <Card.Title id="card-info" className="item-title pt-3 pb-3" ><img className="image-info" src={info} style={{ width: "30px", height: "22px", "marginRight": "8px" }} />Info</Card.Title>
          <Card.Title id="card-info" className="item-view-info pb-3" >{movie.Description}</Card.Title>
          <Card.Title id="card-info" className="item-title pt-3 pb-3" ><img className="image-clock" src={clock} style={{ width: "30px", height: "22px", "marginRight": "8px" }} />Duration</Card.Title>
          <Card.Title id="card-info" className="item-view-info pb-2" >{movie.Duration? movie.Duration : "No data yet"}</Card.Title>

          <Card.Title id="card-info" className="item-title pt-3 pb-3" ><img className="image-sword" src={sword} style={{ width: "30px", height: "22px", "marginRight": "8px" }} />Genre Info</Card.Title>

          <Card.Title id="card-info" className="item-view-info pb-2" >{movie.Genre.Description}</Card.Title>
          <Card.Title id="card-info" className="item-title pt-3 pb-3" ><img className="image-director" src={director} style={{ width: "30px", height: "22px", "marginRight": "8px" }} />Director Info</Card.Title>

          {/* <Card.Subtitle id="card-subtitle" className="item-subtitle mb-2 pt-3"><img className="image-director" src={director} style={{ width: "30px", height: "26px", "marginRight": "8px" }} /> {tvser.Director.Name}, {tvser.Director.Birth ? tvser.Director.Birth : null} - {tvser.Director.Death ? tvser.Director.Death : "Present"}</Card.Subtitle> */}
          <Card.Title id="card-info" className="item-view-info pb-1 pt-3" >{movie.Director.Bio}</Card.Title><br />
          <Card.Subtitle id="card-subtitle" className="item-title mb-2 pt-0"><img className="image-actors" src={actors} style={{ width: "30px", height: "26px", "marginRight": "8px" }} />Cast</Card.Subtitle>
          <Card.Title id="card-info" className="item-view-info pt-3 pb-2" >{movie.Actors.length > 0 ? movie.Actors.map(a => <>{a}<br /></>) : "No data yet"}</Card.Title>
          <Card.Title id="card-info" className="item-title pt-3 pb-1" ><img className="image-imdb" src={imdb} style={{ width: "30px", height: "26px", "marginRight": "8px" }} /> IMDb Rating</Card.Title>

          <Card.Subtitle id="card-subtitle" className="item-view-info mb-2 pt-3"> {movie.IMDbRating ? movie.IMDbRating : "No data yet"}</Card.Subtitle>
          <Card.Title id="card-info" className="item-title pt-3 pb-1" ><img className="image-rotten" src={rottenTomatoes} style={{ width: "30px", height: "28px", "marginRight": "8px" }} /> Rotten Tomatoes Audience Rating</Card.Title>

          <Card.Subtitle id="card-subtitle" className="item-view-info mb-3 pt-2"> {movie.Rating ? movie.Rating : "No data yet"}</Card.Subtitle>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header className="accordion-title">Did you know?</Accordion.Header>
              <Accordion.Body className="accordion-lis">
                <Card.Title id="" className="accordion-title" secondary-color="pb-3"><ol>{movie.InterestingFacts.length > 0 ? movie.InterestingFacts.map(i => <li className="p-2 accordion-lis">{i}<br /></li>) : "No data yet"} </ol></Card.Title>

              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <Alert

            className="mb-3 mt-3 pt-3 text-center text-white alert-div " style={{ background: "#19854e" }}>Watch the official trailer</Alert>
          <ReactPlayer className="m-auto w-auto" controls

            url={movie.Trailer}>
          </ReactPlayer>
          <br />

          <Link to={`/movies`}>
            <Button className="pl-5 pr-5 w-25 media-view-back-btn" style={{ background: "white", color: "black" }}>Back</Button>
          </Link>
        </Card.Body>
        <hr />
      </Card>

      <div>
        <div>
          <Alert

            className="mb-3 mt-3 pt-3 text-center text-white alert-div" style={{ background: "#19854e" }}>You may also like</Alert>
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

            className="mb-3 mt-3 pt-3 text-center text-white alert-div" style={{ background: "#19854e" }}>This director also made</Alert>
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

          className="mb-3 mt-3 pt-3 text-center text-white alert-div" style={{ background: "#19854e" }}>Same Rotten Tomatoes Audience Rating also have</Alert>
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

        className="mb-3 mt-3 pt-3 text-center text-white alert-div" style={{ background: "#19854e" }}>Same IMDb rating also have</Alert>

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

        className="mb-3 mt-3 pt-3 text-center text-white alert-div" style={{ background: "#19854e" }}>Actors from this movie also play in</Alert>
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

          className="mb-3 mt-3 pt-3 text-center text-white alert-div" style={{ background: "#19854e" }}>Released in the same year</Alert>
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

        className="mb-3 mt-3 pt-3 text-center text-white alert-div" style={{ background: "#19854e" }}>Takes around the same time to watch</Alert>

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
      </Row>



      <div>

      </div>
      <div>

      </div>
      <div>

      </div>
      <Link to={`/movies`}>
        <Button className="pl-5 pr-5 mt-2 mb-2 w-25 media-view-back-btn" style={{ background: "white", color: "black" }}>Back</Button>
      </Link>
    </div>


  );
};