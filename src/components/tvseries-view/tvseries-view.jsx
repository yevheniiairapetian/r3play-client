import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Card, Row, Col } from "react-bootstrap";
import ReactPlayer from "react-player";
import React from 'react';
import Alert from 'react-bootstrap/Alert';

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
    const sameTVActors = (Actors) => tvseries.filter(tv => tv._id !== TVId && Actors.some(actor => tv.Actors.includes(actor)));
  return (
    <>
      <Card className="bg-primary">
        <Card.Img className='h-100 card text-bg-dark mb-3' variant={top} src={tvser.ImagePath} />

        <Card.Body className="card-bg-color">
          <Card.Title className="text-white bg-success text-center pb-3 pt-3">{tvser.Title}</Card.Title>
          <Card.Subtitle className="title-color mb-2 text-info pt-3">Release Date: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{tvser.ReleaseDate ? tvser.ReleaseDate.slice(0, 4) : "No data yet"}</Card.Title>
          <Card.Subtitle className=" mb-2 text-info pt-3">Episodes: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3"><ol>{tvser.Season.length > 0 ? tvser.Season.map(s => <li className="p-2 tvser-li-hover">{s}</li>) : "No data yet"} </ol></Card.Title>
          <Card.Subtitle className=" mb-2 text-info pt-3">Description: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{tvser.Description}</Card.Title>


          <Card.Subtitle className="title-color mb-2 text-info pt-3"> Duration: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{tvser.Duration ? tvser.Duration : "No data yet"}</Card.Title>


          <Card.Subtitle className="title-color mb-2 text-info pt-3">Genre: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{tvser.Genre.Name}</Card.Title><br />
          <Card.Subtitle className="title-color mb-2 text-info pt-3">Desciption: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{tvser.Genre.Description}</Card.Title>


          <Card.Subtitle className="title-color mb-2 text-info pt-3">Director: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{tvser.Director.Name}</Card.Title><br />
          <Card.Subtitle className="title-color mb-2 text-info pt-3">Biography: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{tvser.Director.Bio}</Card.Title><br />
          <Card.Subtitle className="title-color mb-2 text-info pt-3">{tvser.Director.Name}'s Birth year: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{tvser.Director.Birth ? tvser.Director.Birth : "No data"}</Card.Title><br />
          <Card.Subtitle className="title-color mb-2 text-info pt-3">{tvser.Director.Name}'s Death year: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{tvser.Director.Death ? tvser.Director.Death : "No data"}</Card.Title><br />


          <Card.Subtitle className="title-color mb-2 text-info pt-3">Actors: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{tvser.Actors.length > 0 ? tvser.Actors.map(a => <>{a}<br /></>) : "No data yet"}</Card.Title>


          <Card.Subtitle className="title-color mb-2 text-info pt-3">IMDb Rating: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{tvser.IMDbRating ? tvser.IMDbRating : "No data yet"}</Card.Title>


          <Card.Subtitle className="title-color mb-2 text-info pt-3">Rotten Tomatoes Audience Rating: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{tvser.Rating ? tvser.Rating : "No data yet"}</Card.Title>
          <Alert
         
         className="bg-warning mb-3 pt-3 text-center">Watch the official trailer</Alert>
          <ReactPlayer className="m-auto w-auto" controls

            url={tvser.Trailer}>
          </ReactPlayer>
          <br />
          <div>

          </div>

          <Link to={`/`}>
            <Button className="bg-success p-2 w-100">Back to the list</Button>
          </Link>
        </Card.Body>
        <hr />

      </Card>


      <Alert
         
         className="bg-warning mb-3 pt-3 text-center">You may also like</Alert>
      
      <Row className=''>
              {similarTV(tvser.Genre.Name).map((tvser) => (
                <Col className="mt-3" md={6} xl={4} lg={4} sm={12} xs={10}>
                <Card className='h-100 card text-bg-primary mb-3' >
        <Card.Img className='w-100' variant='top' src={tvser.ImagePath} />
        <Card.Body>
        <Card.Title className="text-success text-center bg-dark w-100 pb-3 pt-3">{tvser.Title} {"("+tvser.ReleaseDate.slice(0, 4)+")"}</Card.Title>
              
        <Link to={`/tvseries/${tvser._id}`}>
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
              {similarTVDirector(tvser.Director.Name).map((tvser) => (
                <Col className="mt-3" md={6} xl={4} lg={4} sm={12} xs={10}>
                <Card className='h-100 card text-bg-primary mb-3' >
        <Card.Img className='w-100' variant='top' src={tvser.ImagePath} />
        <Card.Body>
        <Card.Title className="text-success text-center bg-dark w-100 pb-3 pt-3">{tvser.Title} {"("+tvser.ReleaseDate.slice(0, 4)+")"}</Card.Title>
              
        <Link to={`/tvseries/${tvser._id}`}>
            <Button className='info-button w-100 mt-2' variant='outline-light'>Read More</Button>
          </Link>
              </Card.Body>
              </Card>
              </Col>
              ))}
            </Row>

            <Alert
         
         className="bg-warning mb-3 pt-3 text-center">Same Rotten Tomatoes Audience Rating also have</Alert>
      
            <Row className=''>
              {similarTVRating(tvser.Rating).map((tvser) => (
                <Col className="mt-3" md={6} xl={4} lg={4} sm={12} xs={10}>
                <Card className='h-100 card text-bg-primary mb-3' >
        <Card.Img className='w-100' variant='top' src={tvser.ImagePath} />
        <Card.Body>
        <Card.Title className="text-success text-center bg-dark w-100 pb-3 pt-3">{tvser.Title} {"("+tvser.ReleaseDate.slice(0, 4)+")"}</Card.Title>
              
        <Link to={`/tvseries/${tvser._id}`}>
            <Button className='info-button w-100 mt-2' variant='outline-light'>Read More</Button>
          </Link>
              </Card.Body>
              </Card>
              </Col>
              ))}
            </Row>

            <Alert
         
         className="bg-warning mb-3 pt-3 text-center">Same IMDb Rating also have</Alert>
      
            <Row className=''>
              {similarTVIMDBRating(tvser.IMDbRating).map((tvser) => (
                <Col className="mt-3" md={6} xl={4} lg={4} sm={12} xs={10}>
                <Card className='h-100 card text-bg-primary mb-3' >
        <Card.Img className='w-100' variant='top' src={tvser.ImagePath} />
        <Card.Body>
        <Card.Title className="text-success text-center bg-dark w-100 pb-3 pt-3">{tvser.Title} {"("+tvser.ReleaseDate.slice(0, 4)+")"}</Card.Title>
              
        <Link to={`/tvseries/${tvser._id}`}>
            <Button className='info-button w-100 mt-2' variant='outline-light'>Read More</Button>
          </Link>
              </Card.Body>
              </Card>
              </Col>
              ))}
            </Row>

            <Alert
         
         className="bg-warning mb-3 pt-3 text-center">Actors from this tv series also play in</Alert>
      <div>
            <Row className=''>
              {sameTVActors(tvser.Actors).map((tvser) => (
                <Col className="mt-3" md={6} xl={4} lg={4} sm={12} xs={10}>
                <Card className='h-100 card text-bg-primary mb-3' >
        <Card.Img className='w-100' variant='top' src={tvser.ImagePath} />
        <Card.Body>
        <Card.Title className="text-success text-center bg-dark w-100 pb-3 pt-3">{tvser.Title} {"("+tvser.ReleaseDate.slice(0, 4)+")"}</Card.Title>
              
        <Link to={`/tvseries/${tvser._id}`}>
            <Button className='info-button w-100 mt-2' variant='outline-light'>Read More</Button>
          </Link>
              </Card.Body>
              </Card>
              </Col>
              ))}
            </Row>

            <Alert
         
         className="bg-warning mb-3 pt-3 text-center">Release in the same year</Alert>
      
            <Row className=''>
              {sameDate(tvser.ReleaseDate).map((tvser) => (
                <Col className="mt-3" md={6} xl={4} lg={4} sm={12} xs={10}>
                <Card className='h-100 card text-bg-primary mb-3' >
        <Card.Img className='w-100' variant='top' src={tvser.ImagePath} />
        <Card.Body>
        <Card.Title className="text-success text-center bg-dark w-100 pb-3 pt-3">{tvser.Title} {"("+tvser.ReleaseDate.slice(0, 4)+")"}</Card.Title>
              
        <Link to={`/tvseries/${tvser._id}`}>
            <Button className='info-button w-100 mt-2' variant='outline-light'>Read More</Button>
          </Link>
              </Card.Body>
              </Card>
              </Col>
              ))}
            </Row>

    </div>

</>
  );
};