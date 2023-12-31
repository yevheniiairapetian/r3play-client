import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Card, Row, Col } from "react-bootstrap";
import ReactPlayer from "react-player";
import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Accordion from 'react-bootstrap/Accordion';
import imdb from '../../images/imdb.svg';
import director from '../../images/director.svg';
import clock from '../../images/clock.svg';
import actors from '../../images/actors.svg';
import info from '../../images/info.svg';
import rottenTomatoes from '../../images/rotten-tomatoes.svg';




export const AnimeView = ({ animes }) => {

  const { AnimeId } = useParams();
  const anim = animes.find((a) => a._id === AnimeId);
  const similarAnime = (genreName) =>
    animes.filter((a) => a.Genre.Name == genreName && a._id !== AnimeId);
  const similarAnimeDirector = (directorName) =>
    animes.filter((a) => a.Director.Name == directorName && a._id !== AnimeId);
  const similarAnimeRating = (AnimeRating) =>
    animes.filter((a) => a.Rating == AnimeRating && a._id !== AnimeId);
  const similarAnimeIMDBRating = (AnimeIMDBRating) =>
    animes.filter((a) => a.IMDbRating == AnimeIMDBRating && a._id !== AnimeId);
  const sameDuration = (Duration) =>
    animes.filter((a) => a.Duration == Duration && a._id !== AnimeId);
  const sameAnimeDate = (Date) =>
    animes.filter((a) => a.ReleaseDate == Date && a._id !== AnimeId);
  const sameAnimeActors = (Actors) => animes.filter(a => a._id !== AnimeId && Actors.some(actor => a.Actors.includes(actor)));
  return (
    <>
      <Card className="bg-primary" >
        <Card.Img className='h-100 card text-bg-dark mb-3' variant={top} src={anim.ImagePath} />

        <Card.Body className="" >
          <Card.Title id="card-title" className="text-center fs-5 text-success pb-3 pt-3">{anim.Title}, {anim.ReleaseDate ? anim.ReleaseDate.slice(0, 4) : "No data yet"}, {anim.Genre.Name}</Card.Title>
          <Card.Title id="card-info" className="pt-3 pb-3" secondary-color="text-secondary "><img src={info} style={{ width: "30px", height: "22px", "marginRight": "8px" }} /> </Card.Title>
          <Card.Title id="card-info" className="pb-3" secondary-color="text-secondary ">{anim.Description}</Card.Title>
          <Card.Title id="card-info" className="pb-3" secondary-color="text-secondary "><img src={clock} style={{ width: "30px", height: "26px", "marginRight": "8px" }} /> {anim.Duration ? anim.Duration : "No data yet"}</Card.Title>
          <Card.Title id="card-info" className="pb-2" secondary-color="text-secondary ">{anim.Genre.Description}</Card.Title>
          <Card.Subtitle id="card-subtitle" className="mb-2 pt-3"><img src={director} style={{ width: "30px", height: "26px", "marginRight": "8px" }} /> {anim.Director.Name}, {anim.Director.Birth ? anim.Director.Birth : null} - {anim.Director.Death ? anim.Director.Death : "Present"}</Card.Subtitle>
          {/* // style={{color: "#238a47"}}  */}
          <Card.Title id="card-info" className="pb-1 pt-3" secondary-color="text-secondary ">{anim.Director.Bio}</Card.Title><br />
          <Card.Subtitle id="card-subtitle" className="title-color mb-2 text-info pt-0"><img src={actors} style={{ width: "30px", height: "26px", "marginRight": "8px" }} /> </Card.Subtitle>
          <Card.Title id="card-info" className="pt-3 pb-2" secondary-color="text-secondary">{anim.Actors.length > 0 ? anim.Actors.map(a => <>{a}<br /></>) : "No data yet"}</Card.Title>
          <Card.Subtitle id="card-subtitle" className="mb-2 pt-3"><img src={imdb} style={{ width: "30px", height: "26px", "marginRight": "8px" }} /> {anim.IMDbRating ? anim.IMDbRating : "No data yet"}</Card.Subtitle>
          <Card.Subtitle id="card-subtitle" className="mb-2 pt-3"><img src={rottenTomatoes} style={{ width: "30px", height: "28px", "marginRight": "8px" }} /> {anim.Rating ? anim.Rating : "No data yet"}</Card.Subtitle>
          <Alert

            className="mb-3 mt-3 pt-3 text-center text-white " style={{ background: "#19854e" }}>Watch the official trailer</Alert>
          <ReactPlayer className="m-auto w-auto" controls

            url={anim.Trailer}>
          </ReactPlayer>
          <br />
          <div>

          </div>

          <Link to={`/anime`}>
            <Button className="pl-5 pr-5 w-25" style={{ background: "white", color: "black" }}>Back</Button>
          </Link>
        </Card.Body>
        <hr />

      </Card>


      <Alert

        className="mb-3 mt-3 pt-3 text-center text-white " style={{ background: "#19854e" }}>You may also like</Alert>

      <Row className=''>
        {similarAnime(anim.Genre.Name).map((anim) => (
          <Col className="mt-3" md={6} xl={4} lg={4} sm={12} xs={12}>
            <Card className='h-100 card text-bg-primary mb-3' >
              <Card.Img className='w-100' variant='top' src={anim.ImagePath} />
              <Card.Body>
                <Card.Title id="card-subtitle" className="text-success text-center w-100 pb-3 pt-3">{anim.Title} {"(" + anim.ReleaseDate.slice(0, 4) + ")"}</Card.Title>

                <Link to={`/animes/${anim._id}`}>
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
        {similarAnimeDirector(anim.Director.Name).map((anim) => (
          <Col className="mt-3" md={6} xl={4} lg={4} sm={12} xs={12}>
            <Card className='h-100 card text-bg-primary mb-3' >
              <Card.Img className='w-100' variant='top' src={anim.ImagePath} />
              <Card.Body>
                <Card.Title id="card-subtitle" className="text-success text-center w-100 pb-3 pt-3">{anim.Title} {"(" + anim.ReleaseDate.slice(0, 4) + ")"}</Card.Title>

                <Link to={`/animes/${anim._id}`}>
                  <Button className='info-button w-100 mt-2' variant='outline-light'>More</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Alert

        className="mb-3 mt-3 pt-3 text-center text-white " style={{ background: "#19854e" }}>Same Rotten Tomatoes Audience Rating also have</Alert>

      <Row className=''>
        {similarAnimeRating(anim.Rating).map((anim) => (
          <Col className="mt-3" md={6} xl={4} lg={4} sm={12} xs={12}>
            <Card className='h-100 card text-bg-primary mb-3' >
              <Card.Img className='w-100' variant='top' src={anim.ImagePath} />
              <Card.Body>
                <Card.Title id="card-subtitle" className="text-success text-center w-100 pb-3 pt-3">{anim.Title} {"(" + anim.ReleaseDate.slice(0, 4) + ")"}</Card.Title>

                <Link to={`/animes/${anim._id}`}>
                  <Button className='info-button w-100 mt-2' variant='outline-light'>More</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Alert

        className="mb-3 mt-3 pt-3 text-center text-white " style={{ background: "#19854e" }}>Same IMDb Rating also have</Alert>

      <Row className=''>
        {similarAnimeIMDBRating(anim.IMDbRating).map((anim) => (
          <Col className="mt-3" md={6} xl={4} lg={4} sm={12} xs={12}>
            <Card className='h-100 card text-bg-primary mb-3' >
              <Card.Img className='w-100' variant='top' src={anim.ImagePath} />
              <Card.Body>
                <Card.Title id="card-subtitle" className="text-success text-center w-100 pb-3 pt-3">{anim.Title} {"(" + anim.ReleaseDate.slice(0, 4) + ")"}</Card.Title>

                <Link to={`/animes/${anim._id}`}>
                  <Button className='info-button w-100 mt-2' variant='outline-light'>More</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Alert

        className="mb-3 mt-3 pt-3 text-center text-white " style={{ background: "#19854e" }}>Actors from this tv series also play in</Alert>
      <div>
        <Row className=''>
          {sameAnimeActors(anim.Actors).map((anim) => (
            <Col className="mt-3" md={6} xl={4} lg={4} sm={12} xs={12}>
              <Card className='h-100 card text-bg-primary mb-3' >
                <Card.Img className='w-100' variant='top' src={anim.ImagePath} />
                <Card.Body>
                  <Card.Title id="card-subtitle" className="text-success text-center w-100 pb-3 pt-3">{anim.Title} {"(" + anim.ReleaseDate.slice(0, 4) + ")"}</Card.Title>

                  <Link to={`/animes/${anim._id}`}>
                    <Button className='info-button w-100 mt-2' variant='outline-light'>More</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Alert

          className="mb-3 mt-3 pt-3 text-center text-white " style={{ background: "#19854e" }}>Released in the same year</Alert>

        <Row className=''>
          {sameAnimeDate(anim.ReleaseDate).map((anim) => (
            <Col className="mt-3" md={6} xl={4} lg={4} sm={12} xs={12}>
              <Card className='h-100 card text-bg-primary mb-3' >
                <Card.Img className='w-100' variant='top' src={anim.ImagePath} />
                <Card.Body>
                  <Card.Title id="card-subtitle" className="text-success text-center w-100 pb-3 pt-3">{anim.Title} {"(" + anim.ReleaseDate.slice(0, 4) + ")"}</Card.Title>

                  <Link to={`/animes/${anim._id}`}>
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
          {sameDuration(anim.Duration).map((anim) => (
            <Col className="mt-3" md={6} xl={4} lg={4} sm={12} xs={12}>
              <Card className='h-100 card text-bg-primary mb-3' >
                <Card.Img className='w-100' variant='top' src={anim.ImagePath} />
                <Card.Body>
                  <Card.Title id="card-subtitle" className="text-success text-center w-100 pb-3 pt-3">{anim.Title} {"(" + anim.ReleaseDate.slice(0, 4) + ")"}</Card.Title>

                  <Link to={`/animes/${anim._id}`}>
                    <Button className='info-button w-100 mt-2' variant='outline-light'>More</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Link to={`/anime`}>
          <Button className="pl-5 pr-5 mt-4 w-25" style={{ background: "white", color: "black" }}>Back</Button>
        </Link>
      </div>

    </>
  );
};