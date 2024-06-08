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
import Rating from "react-rating";
import { useState } from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ActorView = ({ actors, token }) => {
 
  
  const { actorId } = useParams();
  const actor = actors.find((a) => a._id === actorId);
  // const similarMovies = (genreName) =>
  //   movies.filter((m) => m.Genre.Name == genreName && m._id !== movieId);
  // const similarDirector = (directorName) =>
  //   movies.filter((m) => m.Director.Name == directorName && m._id !== movieId);
  // const similarRating = (movieRating) =>
  //   movies.filter((m) => m.Rating == movieRating && m._id !== movieId);
  // const similarIMDBRating = (movieIMDBRating) =>
  //   movies.filter((m) => m.IMDbRating == movieIMDBRating && m._id !== movieId);
  // const sameDate = (Date) =>
  //   movies.filter((m) => m.ReleaseDate == Date && m._id !== movieId);
  // const sameDuration = (Duration) =>
  //   movies.filter((m) => m.Duration == Duration && m._id !== movieId);
  // const sameActors = (Actors) => movies.filter(m => m._id !== movieId && Actors.some(actor => m.Actors.includes(actor)));
  


  return (
    <div className="container-profile">
      <Card className="item-view" >
      
        <Card.Img className='h-100 card mb-3' variant={top} src={actor.ImagePath ? actor.ImagePath : "https://th.bing.com/th/id/OIP.ggX8e6U3YzyhPvp8qGZtQwHaHa?rs=1&pid=ImgDetMain" }
 />
        
        <Card.Body className="" >
          <Card.Title id="card-title" className="item-title text-center fs-5 pb-3 pt-3">{actor.Name}
            {/* , 
            {movie.ReleaseDate ? movie.ReleaseDate.slice(0, 4) : "No data yet"}, {movie.Genre.Name} */}
            </Card.Title>
          <Card.Title id="card-info" className="item-info pt-3 pb-3" ><img className="image-info" src={info} style={{ width: "30px", height: "22px", "marginRight": "8px" }} /> </Card.Title>
          <Card.Title id="card-info" className="item-view-info pb-3">{actor.Bio}</Card.Title>
          <Card.Title id="card-info" className="item-title pb-3"><img className="image-clock" src={clock} style={{ width: "30px", height: "26px", "marginRight": "8px" }} /> {actor.Birth ? actor.Birth : "No data yet" } - {actor.Death ? actor.Death : "Present" }</Card.Title>
           <Card.Title id="card-info" className="item-view-info pb-2">Occupation</Card.Title>
           <Card.Title id="card-info" className="item-title pb-3">{actor.Occupation.length > 0 ? actor.Occupation.map(occupation => <>{occupation}<br /></>) : "No data yet"}
           </Card.Title>
           <Card.Title id="card-info" className="item-view-info pb-2">Birthplace</Card.Title>
           <Card.Title id="card-info" className="item-title pb-3">
           {actor.Birthplace ? actor.Birthplace : "No data yet" }
           </Card.Title>
           <Card.Title id="card-info" className="item-view-info pb-2">Nationality</Card.Title>
           <Card.Title id="card-info" className="item-title pb-3">
           {actor.Nationality ? actor.Nationality : "No data yet" }
           </Card.Title>
           <Card.Title id="card-info" className="item-view-info pb-2">Nicknames</Card.Title>
           <Card.Title id="card-info" className="item-title pb-3">
           {actor.Nicknames.length > 0 ? actor.Nicknames.map(nick => <>{nick}<br /></>) : "No data yet"}
           </Card.Title>
           <Card.Title id="card-info" className="item-view-info pb-2">Years Active</Card.Title>
           <Card.Title id="card-info" className="item-title pb-3">
           {actor.YearsActive ? actor.YearsActive : "No data yet" }
           </Card.Title>
           <Card.Title id="card-info" className="item-info pt-3 pb-2" >Notable Works</Card.Title>

           <Card.Title id="card-info" className="item-view-info pb-1 pt-3" >{actor.NotableWorks.Title}</Card.Title><br />
           <Card.Title id="card-info" className="item-info pt-3 pb-3" ><img className="image-info" src={info} style={{ width: "30px", height: "22px", "marginRight": "8px" }} /></Card.Title>

          <Card.Title id="card-info" className="item-view-info pt-3 pb-2" >{actor.NotableWorks.Description}</Card.Title>
          <Card.Title id="card-info" className="item-title pb-3"><img className="image-clock" src={clock} style={{ width: "30px", height: "26px", "marginRight": "8px" }} /> {actor.NotableWorks.ReleaseDate ? actor.NotableWorks.ReleaseDate : "No data yet"}</Card.Title>

          {/* <Card.Title id="card-info" className="item-view-info pb-1 pt-3" >{actor.NotableWorks.ReleaseDate}</Card.Title><br /> */}
          <Card.Subtitle id="card-subtitle" className="item-view-info mb-2 pt-3"><img className="image-rotten" src={rottenTomatoes} style={{ width: "30px", height: "28px", "marginRight": "8px" }} /> 
         
          {actor.NotableWorks.Rating ? actor.NotableWorks.Rating : "No data yet"}</Card.Subtitle>

          {/* <Card.Title id="card-info" className="item-view-info pt-3 pb-2" >{actor.NotableWorks.Rating}</Card.Title> */}
          <Card.Subtitle id="card-subtitle" className="item-view-info mb-2 pt-3"><img className="image-imdb" src={imdb} style={{ width: "30px", height: "26px", "marginRight": "8px" }} /> {actor.NotableWorks.IMDbRating ? actor.NotableWorks.IMDbRating : "No data yet"}</Card.Subtitle>

          {/* <Card.Title id="card-info" className="item-view-info pb-1 pt-3" >{actor.NotableWorks.IMDbRating}</Card.Title><br /> */}
          <Card.Title id="card-info" className="item-title pb-3 pt-3"><img className="image-clock" src={clock} style={{ width: "30px", height: "26px", "marginRight": "8px" }} /> {actor.NotableWorks.Duration ? actor.NotableWorks.Duration : "No data yet"}</Card.Title>






          <Card.Title id="card-info" className="item-info pt-3 pb-2" >Other Works</Card.Title>

<Card.Title id="card-info" className="item-view-info pb-1 pt-3" >{actor.AllWorks.Title}</Card.Title><br />
<Card.Title id="card-info" className="item-info pt-3 pb-3" ><img className="image-info" src={info} style={{ width: "30px", height: "22px", "marginRight": "8px" }} /></Card.Title>

<Card.Title id="card-info" className="item-view-info pt-3 pb-2" >{actor.AllWorks.Description}</Card.Title>
<Card.Title id="card-info" className="item-title pb-3"><img className="image-clock" src={clock} style={{ width: "30px", height: "26px", "marginRight": "8px" }} /> {actor.AllWorks.ReleaseDate ? actor.AllWorks.ReleaseDate : "No data yet"}</Card.Title>

{/* <Card.Title id="card-info" className="item-view-info pb-1 pt-3" >{actor.NotableWorks.ReleaseDate}</Card.Title><br /> */}
<Card.Subtitle id="card-subtitle" className="item-view-info mb-2 pt-3"><img className="image-rotten" src={rottenTomatoes} style={{ width: "30px", height: "28px", "marginRight": "8px" }} /> 

{actor.AllWorks.Rating ? actor.AllWorks.Rating : "No data yet"}</Card.Subtitle>

{/* <Card.Title id="card-info" className="item-view-info pt-3 pb-2" >{actor.NotableWorks.Rating}</Card.Title> */}
<Card.Subtitle id="card-subtitle" className="item-view-info mb-2 pt-3"><img className="image-imdb" src={imdb} style={{ width: "30px", height: "26px", "marginRight": "8px" }} /> {actor.AllWorks.IMDbRating ? actor.AllWorks.IMDbRating : "No data yet"}</Card.Subtitle>

{/* <Card.Title id="card-info" className="item-view-info pb-1 pt-3" >{actor.NotableWorks.IMDbRating}</Card.Title><br /> */}
<Card.Title id="card-info" className="item-title pb-3 pt-3"><img className="image-clock" src={clock} style={{ width: "30px", height: "26px", "marginRight": "8px" }} /> {actor.AllWorks.Duration ? actor.AllWorks.Duration : "No data yet"}</Card.Title>






          {/* <Card.Title id="card-info" className="item-view-info pt-3 pb-2" >{actor.NotableWorks.Duration}</Card.Title> */}

           <Card.Title id="card-info" className="item-view-info pb-2">Spouses</Card.Title>
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

           <Card.Title id="card-info" className="item-view-info pb-2">Official Website</Card.Title>
           {/* <Card.Title id="card-info" className="item-title pb-1"> */}
           {/* <a href={actor.Website} target="_blank"></a> */}
           {/* </Card.Title> */}
           <Link className="item-title pb-2" to={actor.Website} target="_blank">
           {actor.Website}
          </Link>
           {/* <Card.Subtitle id="card-subtitle" className="item-subtitle mb-2 pt-3"><img className="image-director" src={director} style={{ width: "30px", height: "26px", "marginRight": "8px" }} /> {movie.Director.Name}, {movie.Director.Birth ? movie.Director.Birth : null} - {movie.Director.Death ? movie.Director.Death : "Present"}</Card.Subtitle>  */}
          {/* // style={{color: "#238a47"}}  */}
           {/* <Card.Title id="card-info" className="item-view-info pb-1 pt-3" >{movie.Director.Bio}</Card.Title><br />
          <Card.Subtitle id="card-subtitle" className="item-subtitle mb-2 pt-0"><img className="image-actors" src={actors} style={{ width: "30px", height: "26px", "marginRight": "8px" }} /> </Card.Subtitle>
          <Card.Title id="card-info" className="item-view-info pt-3 pb-2" >{movie.Actors.length > 0 ? movie.Actors.map(a => <>{a}<br /></>) : "No data yet"}</Card.Title>
          <Card.Subtitle id="card-subtitle" className="item-view-info mb-2 pt-3"><img className="image-imdb" src={imdb} style={{ width: "30px", height: "26px", "marginRight": "8px" }} /> {movie.IMDbRating ? movie.IMDbRating : "No data yet"}</Card.Subtitle>
          <Card.Subtitle id="card-subtitle" className="item-view-info mb-2 pt-3"><img className="image-rotten" src={rottenTomatoes} style={{ width: "30px", height: "28px", "marginRight": "8px" }} /> {movie.Rating ? movie.Rating : "No data yet"}</Card.Subtitle> */}
          
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