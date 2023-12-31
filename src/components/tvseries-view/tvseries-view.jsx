import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Card, Row, Col } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import ReactPlayer from "react-player";
import React from 'react';
import Alert from 'react-bootstrap/Alert';
import imdb from '../../images/imdb.svg';
import director from '../../images/director.svg';
import clock from '../../images/clock.svg';
import actors from '../../images/actors.svg';
import info from '../../images/info.svg';
import rottenTomatoes from '../../images/rotten-tomatoes.svg';

export const TVseriesView = ({ tvseries }) => {
  const { TVId } = useParams();
  const tvser = tvseries.find((tv) => tv._id === TVId);
  const similarTV = (genreName) =>
    tvseries.filter((tv) => tv.Genre.Name == genreName && tv._id !== TVId);
  const similarTVDirector = (directorName) =>
    tvseries.filter((tv) => tv.Director.Name == directorName && tv._id !== TVId);
  const similarTVRating = (TVRating) =>
    tvseries.filter((tv) => tv.Rating == TVRating && tv._id !== TVId);
  const similarTVIMDBRating = (TVIMDBRating) =>
    tvseries.filter((tv) => tv.IMDbRating == TVIMDBRating && tv._id !== TVId);
  const sameDate = (Date) =>
    tvseries.filter((tv) => tv.ReleaseDate == Date && tv._id !== TVId);
  const sameDuration = (Duration) =>
    tvseries.filter((tv) => tv.Duration == Duration && tv._id !== TVId);
  const sameTVActors = (Actors) => tvseries.filter(tv => tv._id !== TVId && Actors.some(actor => tv.Actors.includes(actor)));
  return (
    <>
      <Card className="bg-primary">
        <Card.Img className='h-100 card text-bg-dark mb-3' variant={top} src={tvser.ImagePath} />

        <Card.Body className="" >
          <Card.Title id="card-title" className="text-center fs-5 text-success pb-3 pt-3">{tvser.Title}, {tvser.ReleaseDate ? tvser.ReleaseDate.slice(0, 4) : "No data yet"}, {tvser.Genre.Name}</Card.Title>
          <Card.Title id="card-info" className="pt-3 pb-3" secondary-color="text-secondary "><img src={info} style={{ width: "30px", height: "22px", "marginRight": "8px" }} /> </Card.Title>
          <Card.Title id="card-info" className="pb-3" secondary-color="text-secondary ">{tvser.Description}</Card.Title>
          <Card.Title id="card-info" className="pb-3" secondary-color="text-secondary "><img src={clock} style={{ width: "30px", height: "26px", "marginRight": "8px" }} /> {tvser.Duration ? tvser.Duration : "No data yet"}</Card.Title>
          <Card.Title id="card-info" className="pb-2" secondary-color="text-secondary ">{tvser.Genre.Description}</Card.Title>
          <Card.Subtitle id="card-subtitle" className="mb-2 pt-3"><img src={director} style={{ width: "30px", height: "26px", "marginRight": "8px" }} /> {tvser.Director.Name}, {tvser.Director.Birth ? tvser.Director.Birth : null} - {tvser.Director.Death ? tvser.Director.Death : "Present"}</Card.Subtitle>
          <Card.Title id="card-info" className="pb-1 pt-3" secondary-color="text-secondary ">{tvser.Director.Bio}</Card.Title><br />
          <Card.Subtitle id="card-subtitle" className="title-color mb-2 text-info pt-0"><img src={actors} style={{ width: "30px", height: "26px", "marginRight": "8px" }} /> </Card.Subtitle>
          <Card.Title id="card-info" className="pt-3 pb-2" secondary-color="text-secondary">{tvser.Actors.length > 0 ? tvser.Actors.map(a => <>{a}<br /></>) : "No data yet"}</Card.Title>
          <Card.Subtitle id="card-subtitle" className="mb-2 pt-3"><img src={imdb} style={{ width: "30px", height: "26px", "marginRight": "8px" }} /> {tvser.IMDbRating ? tvser.IMDbRating : "No data yet"}</Card.Subtitle>
          <Card.Subtitle id="card-subtitle" className="mb-2 pt-3"><img src={rottenTomatoes} style={{ width: "30px", height: "28px", "marginRight": "8px" }} /> {tvser.Rating ? tvser.Rating : "No data yet"}</Card.Subtitle>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="text-success">Episodes:</Accordion.Header>
              <Accordion.Body>
                <Card.Title id="card-info" className="" secondary-color="text-secondary pb-3"><ol>{tvser.Season.length > 0 ? tvser.Season.map(s => <li className="p-2 tvser-li-hover">{s}</li>) : "No data yet"} </ol></Card.Title>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Alert

            className="mb-3 mt-3 pt-3 text-center text-white " style={{ background: "#19854e" }}>Watch the official trailer</Alert>
          <ReactPlayer className="m-auto w-auto" controls

            url={tvser.Trailer}>
          </ReactPlayer>
          <br />
          <div>

          </div>

          <Link to={`/tvseries`}>
            <Button className="pl-5 pr-5 w-25" style={{ background: "white", color: "black" }}>Back</Button>
          </Link>
        </Card.Body>
        <hr />

      </Card>


      <Alert

        className="mb-3 mt-3 pt-3 text-center text-white " style={{ background: "#19854e" }}>You may also like</Alert>

      <Row className=''>
        {similarTV(tvser.Genre.Name).map((tvser) => (
          <Col className="mt-3" md={6} xl={4} lg={4} sm={12} xs={12}>
            <Card className='h-100 card text-bg-primary mb-3' >
              <Card.Img className='w-100' variant='top' src={tvser.ImagePath} />
              <Card.Body>
                <Card.Title id="card-subtitle" className="text-success text-center w-100 pb-3 pt-3">{tvser.Title} {"(" + tvser.ReleaseDate.slice(0, 4) + ")"}</Card.Title>

                <Link to={`/tvseries/${tvser._id}`}>
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
        {similarTVDirector(tvser.Director.Name).map((tvser) => (
          <Col className="mt-3" md={6} xl={4} lg={4} sm={12} xs={12}>
            <Card className='h-100 card text-bg-primary mb-3' >
              <Card.Img className='w-100' variant='top' src={tvser.ImagePath} />
              <Card.Body>
                <Card.Title id="card-subtitle" className="text-success text-center w-100 pb-3 pt-3">{tvser.Title} {"(" + tvser.ReleaseDate.slice(0, 4) + ")"}</Card.Title>

                <Link to={`/tvseries/${tvser._id}`}>
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
        {similarTVRating(tvser.Rating).map((tvser) => (
          <Col className="mt-3" md={6} xl={4} lg={4} sm={12} xs={12}>
            <Card className='h-100 card text-bg-primary mb-3' >
              <Card.Img className='w-100' variant='top' src={tvser.ImagePath} />
              <Card.Body>
                <Card.Title id="card-subtitle" className="text-success text-center w-100 pb-3 pt-3">{tvser.Title} {"(" + tvser.ReleaseDate.slice(0, 4) + ")"}</Card.Title>

                <Link to={`/tvseries/${tvser._id}`}>
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
        {similarTVIMDBRating(tvser.IMDbRating).map((tvser) => (
          <Col className="mt-3" md={6} xl={4} lg={4} sm={12} xs={12}>
            <Card className='h-100 card text-bg-primary mb-3' >
              <Card.Img className='w-100' variant='top' src={tvser.ImagePath} />
              <Card.Body>
                <Card.Title id="card-subtitle" className="text-success text-center w-100 pb-3 pt-3">{tvser.Title} {"(" + tvser.ReleaseDate.slice(0, 4) + ")"}</Card.Title>

                <Link to={`/tvseries/${tvser._id}`}>
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
          {sameTVActors(tvser.Actors).map((tvser) => (
            <Col className="mt-3" md={6} xl={4} lg={4} sm={12} xs={12}>
              <Card className='h-100 card text-bg-primary mb-3' >
                <Card.Img className='w-100' variant='top' src={tvser.ImagePath} />
                <Card.Body>
                  <Card.Title id="card-subtitle" className="text-success text-center w-100 pb-3 pt-3">{tvser.Title} {"(" + tvser.ReleaseDate.slice(0, 4) + ")"}</Card.Title>

                  <Link to={`/tvseries/${tvser._id}`}>
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
          {sameDate(tvser.ReleaseDate).map((tvser) => (
            <Col className="mt-3" md={6} xl={4} lg={4} sm={12} xs={12}>
              <Card className='h-100 card text-bg-primary mb-3' >
                <Card.Img className='w-100' variant='top' src={tvser.ImagePath} />
                <Card.Body>
                  <Card.Title id="card-subtitle" className="text-success text-center w-100 pb-3 pt-3">{tvser.Title} {"(" + tvser.ReleaseDate.slice(0, 4) + ")"}</Card.Title>

                  <Link to={`/tvseries/${tvser._id}`}>
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
          {sameDuration(tvser.Duration).map((tvser) => (
            <Col className="mt-3" md={6} xl={4} lg={4} sm={12} xs={12}>
              <Card className='h-100 card text-bg-primary mb-3' >
                <Card.Img className='w-100' variant='top' src={tvser.ImagePath} />
                <Card.Body>
                  <Card.Title id="card-subtitle" className="text-success text-center w-100 pb-3 pt-3">{tvser.Title} {"(" + tvser.ReleaseDate.slice(0, 4) + ")"}</Card.Title>

                  <Link to={`/tvseries/${tvser._id}`}>
                    <Button className='info-button w-100 mt-2' variant='outline-light'>More</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Link to={`/tvseries`}>
          <Button className="pl-5 mt-4 pr-5 w-25" style={{ background: "white", color: "black" }}>Back</Button>
        </Link>
      </div>

    </>
  );
};