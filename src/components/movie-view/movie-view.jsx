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
import rottenTomatoes from '../../images/rotten-tomatoes.svg';

export const MovieView = ({ movies }) => {
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
    <div className="">
      <Card className="bg-primary" >
        <Card.Img className='h-100 card text-bg-dark mb-3' variant={top} src={movie.ImagePath} />

        <Card.Body className="" >
          <Card.Title id="card-title" className="text-center fs-5 text-success pb-3 pt-3">{movie.Title}, {movie.ReleaseDate ? movie.ReleaseDate.slice(0, 4) : "No data yet"}, {movie.Genre.Name}</Card.Title>
          <Card.Title id="card-info" className="pt-3 pb-3" secondary-color="text-secondary "><img src={info} style={{ width: "30px", height: "22px", "marginRight": "8px" }} /> </Card.Title>
          <Card.Title id="card-info" className="pb-3" secondary-color="text-secondary ">{movie.Description}</Card.Title>
          <Card.Title id="card-info" className="pb-3" secondary-color="text-secondary "><img src={clock} style={{ width: "30px", height: "26px", "marginRight": "8px" }} /> {movie.Duration ? movie.Duration : "No data yet"}</Card.Title>
          <Card.Title id="card-info" className="pb-2" secondary-color="text-secondary ">{movie.Genre.Description}</Card.Title>
          <Card.Subtitle id="card-subtitle" className="mb-2 pt-3"><img src={director} style={{ width: "30px", height: "26px", "marginRight": "8px" }} /> {movie.Director.Name}, {movie.Director.Birth ? movie.Director.Birth : null} - {movie.Director.Death ? movie.Director.Death : "Present"}</Card.Subtitle>
          {/* // style={{color: "#238a47"}}  */}
          <Card.Title id="card-info" className="pb-1 pt-3" secondary-color="text-secondary ">{movie.Director.Bio}</Card.Title><br />
          <Card.Subtitle id="card-subtitle" className="title-color mb-2 text-info pt-0"><img src={actors} style={{ width: "30px", height: "26px", "marginRight": "8px" }} /> </Card.Subtitle>
          <Card.Title id="card-info" className="pt-3 pb-2" secondary-color="text-secondary">{movie.Actors.length > 0 ? movie.Actors.map(a => <>{a}<br /></>) : "No data yet"}</Card.Title>
          <Card.Subtitle id="card-subtitle" className="mb-2 pt-3"><img src={imdb} style={{ width: "30px", height: "26px", "marginRight": "8px" }} /> {movie.IMDbRating ? movie.IMDbRating : "No data yet"}</Card.Subtitle>
          <Card.Subtitle id="card-subtitle" className="mb-2 pt-3"><img src={rottenTomatoes} style={{ width: "30px", height: "28px", "marginRight": "8px" }} /> {movie.Rating ? movie.Rating : "No data yet"}</Card.Subtitle>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header className="text-success">Did you know?</Accordion.Header>
              <Accordion.Body>
                <Card.Title id="card-info" className="" secondary-color="text-secondary pb-3"><ol>{movie.InterestingFacts.length > 0 ? movie.InterestingFacts.map(i => <li className="tvser-li-hover pt-3 pb-3">{i}<br /></li>) : "No data yet"} </ol></Card.Title>

              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <Alert

            className="mb-3 mt-3 pt-3 text-center text-white " style={{ background: "#19854e" }}>Watch the official trailer</Alert>
          <ReactPlayer className="m-auto w-auto" controls

            url={movie.Trailer}>
          </ReactPlayer>
          <br />

          <Link to={`/movies`}>
            <Button className="pl-5 pr-5 w-25" style={{ background: "white", color: "black" }}>Back</Button>
          </Link>
        </Card.Body>
        <hr />
      </Card>

      <div>
        <div>
          <Alert

            className="mb-3 mt-3 pt-3 text-center text-white " style={{ background: "#19854e" }}>You may also like</Alert>
        </div>
        <Row className=''>
          {similarMovies(movie.Genre.Name).map((movie) => (
            <Col className="mt-3" md={6} xl={4} lg={4} sm={12} xs={12}>
              <Card className='h-100 card text-bg-primary mb-3' >
                <Card.Img className='w-100' variant='top' src={movie.ImagePath} />
                <Card.Body>
                  <Card.Title id="card-subtitle" className="text-success text-center w-100 pb-3 pt-3">{movie.Title} {"(" + movie.ReleaseDate.slice(0, 4) + ")"}</Card.Title>

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
              <Card className='h-100 card text-bg-primary mb-3' >
                <Card.Img className='w-100' variant='top' src={movie.ImagePath} />
                <Card.Body>
                  <Card.Title id="card-subtitle" className="text-success text-center w-100 pb-3 pt-3">{movie.Title} {"(" + movie.ReleaseDate.slice(0, 4) + ")"}</Card.Title>

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
            <Card className='h-100 card text-bg-primary mb-3' >
              <Card.Img className='w-100' variant='top' src={movie.ImagePath} />
              <Card.Body>
                <Card.Title id="card-subtitle" className="text-success text-center w-100 pb-3 pt-3">{movie.Title} {"(" + movie.ReleaseDate.slice(0, 4) + ")"}</Card.Title>

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
            <Card className='h-100 card text-bg-primary mb-3' >
              <Card.Img className='w-100' variant='top' src={movie.ImagePath} />
              <Card.Body>
                <Card.Title id="card-subtitle" className="text-success text-center w-100 pb-3 pt-3">{movie.Title} {"(" + movie.ReleaseDate.slice(0, 4) + ")"}</Card.Title>

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
              <Card className='h-100 card text-bg-primary mb-3' >
                <Card.Img className='w-100' variant='top' src={movie.ImagePath} />
                <Card.Body>
                  <Card.Title id="card-subtitle" className="text-success text-center w-100 pb-3 pt-3">{movie.Title} {"(" + movie.ReleaseDate.slice(0, 4) + ")"}</Card.Title>

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
            <Card className='h-100 card text-bg-primary mb-3' >
              <Card.Img className='w-100' variant='top' src={movie.ImagePath} />
              <Card.Body>
                <Card.Title id="card-subtitle" className="text-success text-center w-100 pb-3 pt-3">{movie.Title} {"(" + movie.ReleaseDate.slice(0, 4) + ")"}</Card.Title>

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
            <Card className='h-100 card text-bg-primary mb-3' >
              <Card.Img className='w-100' variant='top' src={movie.ImagePath} />
              <Card.Body>
                <Card.Title id="card-subtitle" className="text-success text-center w-100 pb-3 pt-3">{movie.Title} {"(" + movie.ReleaseDate.slice(0, 4) + ")"}</Card.Title>

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
        <Button className="pl-5 pr-5 mt-4 w-25" style={{ background: "white", color: "black" }}>Back</Button>
      </Link>
    </div>


  );
};