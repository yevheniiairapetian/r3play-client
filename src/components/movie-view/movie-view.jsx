import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import {ScrollToTop} from '../ScrollToTop/scroll-to-top';
import { Button, Card, Col, Row, Card } from "react-bootstrap";
import ReactPlayer from "react-player";
import React from 'react';
import Alert from 'react-bootstrap/Alert';

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();
  const movie = movies.find((m) => m._id === movieId);
  const similarMovies = (genreName) =>
    movies.filter((m) => m.Genre.Name == genreName && m._id !== movieId);
  const similarDirector = (directorName) =>
    movies.filter((m) => m.Director.Name == directorName && m._id !== movieId);
    const similarRating = (movieRating) =>
    movies.filter((m) => m.Rating == movieRating && m._id !== movieId);
    const sameActors = (Actors) => movies.filter(m => m._id !== movieId && Actors.some(actor => m.Actors.includes(actor)));
  return (
    <>
      <Card className="bg-primary">
        <Card.Img className='h-100 card text-bg-dark mb-3' variant={top} src={movie.ImagePath} />

        <Card.Body>
          <Card.Title className="bg-success text-white text-center pb-3 pt-3">{movie.Title}</Card.Title>
          <Card.Subtitle className="title-color mb-2 text-info pt-3">Release Date: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{movie.ReleaseDate ? movie.ReleaseDate.slice(0, 4) : "No data yet"}</Card.Title>

          <Card.Subtitle className=" mb-2 text-info pt-3">Description: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{movie.Description}</Card.Title>


          <Card.Subtitle className="title-color mb-2 text-info pt-3"> Duration: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{movie.Duration ? movie.Duration : "No data yet"}</Card.Title>


          <Card.Subtitle className="title-color mb-2 text-info pt-3">Genre: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{movie.Genre.Name}</Card.Title><br />
          <Card.Subtitle className="title-color mb-2 text-info pt-3">Desciption: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{movie.Genre.Description}</Card.Title>


          <Card.Subtitle className="title-color mb-2 text-info pt-3">Director: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{movie.Director.Name}</Card.Title><br />
          <Card.Subtitle className="title-color mb-2 text-info pt-3">Biography: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{movie.Director.Bio}</Card.Title><br />
          <Card.Subtitle className="title-color mb-2 text-info pt-3">{movie.Director.Name}'s Birth year: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{movie.Director.Birth ? movie.Director.Birth : "No data"}</Card.Title><br />
          <Card.Subtitle className="title-color mb-2 text-info pt-3">{movie.Director.Name}'s Death year: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{movie.Director.Death ? movie.Director.Death : "No data"}</Card.Title><br />


          <Card.Subtitle className="title-color mb-2 text-info pt-3">Actors: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{movie.Actors.length > 0 ? movie.Actors.map(a => <>{a}<br /></>) : "No data yet"}</Card.Title>


          <Card.Subtitle className="title-color mb-2 text-info pt-3">IMDb Rating: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{movie.IMDbRating ? movie.IMDbRating : "No data yet"}</Card.Title>


          <Card.Subtitle className="title-color mb-2 text-info pt-3">Rotten Tomatoes Audience Rating: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{movie.Rating ? movie.Rating : "No data yet"}</Card.Title>
          <Alert
         
         className="bg-warning mb-3 pt-3 text-center">Watch the official trailer</Alert>
          <ReactPlayer className="m-auto w-auto" controls

            url={movie.Trailer}>
          </ReactPlayer>
          <br />

          <Link to={`/`}>
            <Button className="bg-success p-2 w-100">Back to the list</Button>
          </Link>
        </Card.Body>
        <hr />
      </Card>

      <div>
      <div>
      <Alert
         
         className="bg-warning mb-3 pt-3 text-center">You may also like</Alert>
      </div>
      <Row className=''>
              {similarMovies(movie.Genre.Name).map((movie) => (
                <Col className="mt-3" md={6} xl={4} lg={4} sm={12} xs={10}>
                <Card className='h-100 card text-bg-primary mb-3' >
        <Card.Img className='w-100' variant='top' src={movie.ImagePath} />
        <Card.Body>
        <Card.Title className="text-success text-center bg-dark w-100 pb-3 pt-3">{movie.Title} {"("+movie.ReleaseDate.slice(0, 4)+")"}</Card.Title>
              
        <Link to={`/movies/${movie._id}`}>
            <Button className='info-button w-100 mt-2' variant='outline-light'>Read More</Button>
          </Link>
              </Card.Body>
              </Card>
              </Col>
              ))}
            </Row>
            <div>
      <Alert
         
         className="bg-warning mb-3 pt-3 text-center">This director also made</Alert>
      </div>
            <Row className=''>
              {similarDirector(movie.Director.Name).map((movie) => (
                <Col className="mt-3" md={6} xl={4} lg={4} sm={12} xs={10}>
                <Card className='h-100 card text-bg-primary mb-3' >
        <Card.Img className='w-100' variant='top' src={movie.ImagePath} />
        <Card.Body>
        <Card.Title className="text-success text-center bg-dark w-100 pb-3 pt-3">{movie.Title} {"("+movie.ReleaseDate.slice(0, 4)+")"}</Card.Title>
              
        <Link to={`/movies/${movie._id}`}>
            <Button className='info-button w-100 mt-2' variant='outline-light'>Read More</Button>
          </Link>
              </Card.Body>
              </Card>
              </Col>
              ))}
            </Row>

            <Alert
         
         className="bg-warning mb-3 pt-3 text-center">Same rating also have</Alert>
      </div>
            <Row className=''>
              {similarRating(movie.Rating).map((movie) => (
                <Col className="mt-3" md={6} xl={4} lg={4} sm={12} xs={10}>
                <Card className='h-100 card text-bg-primary mb-3' >
        <Card.Img className='w-100' variant='top' src={movie.ImagePath} />
        <Card.Body>
        <Card.Title className="text-success text-center bg-dark w-100 pb-3 pt-3">{movie.Title} {"("+movie.ReleaseDate.slice(0, 4)+")"}</Card.Title>
              
        <Link to={`/movies/${movie._id}`}>
            <Button className='info-button w-100 mt-2' variant='outline-light'>Read More</Button>
          </Link>
              </Card.Body>
              </Card>
              </Col>
              ))}
            </Row>

            <Alert
         
         className="bg-warning mb-3 pt-3 text-center">Actors from this movie also play in</Alert>
      <div>
            <Row className=''>
              {sameActors(movie.Actors).map((movie) => (
                <Col className="mt-3" md={6} xl={4} lg={4} sm={12} xs={10}>
                <Card className='h-100 card text-bg-primary mb-3' >
        <Card.Img className='w-100' variant='top' src={movie.ImagePath} />
        <Card.Body>
        <Card.Title className="text-success text-center bg-dark w-100 pb-3 pt-3">{movie.Title} {"("+movie.ReleaseDate.slice(0, 4)+")"}</Card.Title>
              
        <Link to={`/movies/${movie._id}`}>
            <Button className='info-button w-100 mt-2' variant='outline-light'>Read More</Button>
          </Link>
              </Card.Body>
              </Card>
              </Col>
              ))}
            </Row>
      </div>
      <div>

      </div>
      <div>

      </div>
      <div>

      </div>
    </>


  );
};