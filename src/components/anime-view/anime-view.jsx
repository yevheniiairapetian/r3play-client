import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Card, Row, Col } from "react-bootstrap";
import ReactPlayer from "react-player";
import React from 'react';
import Alert from 'react-bootstrap/Alert';

export const AnimeView = ({ anime }) => {
  const { AnimeId } = useParams();
  const anim = anime.find((a) => a._id === AnimeId);
  const similarAnime = (genreName) =>
    anime.filter((a) => a.Genre.Name == genreName && a._id !== AnimeId);
  const similarAnimeDirector = (directorName) =>
    anime.filter((a) => a.Director.Name == directorName && a._id !== AnimeId);
    const similarAnimeRating = (AnimeRating) =>
    anime.filter((a) => a.Rating == AnimeRating && a._id !== AnimeId);
    const sameAnimeDate = (Date) =>
    anime.filter((a) => a.ReleaseDate == Date && a._id !== AnimeId);
    const sameAnimeActors = (Actors) => anime.filter(a => a._id !== AnimeId && Actors.some(actor => a.Actors.includes(actor)));
  return (
    <>
      <Card className="bg-primary">
        <Card.Img className='h-100 card text-bg-dark mb-3' variant={top} src={anim.ImagePath} />

        <Card.Body className="card-bg-color">
          <Card.Title className="text-white bg-success text-center pb-3 pt-3">{anim.Title}</Card.Title>
          <Card.Subtitle className="title-color mb-2 text-info pt-3">Release Date: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{anim.ReleaseDate ? anim.ReleaseDate.slice(0, 4) : "No data yet"}</Card.Title>
          <Card.Subtitle className=" mb-2 text-info pt-3">Episodes: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3"><ol>{anim.Season.length > 0 ? anim.Season.map(s => <li className="p-2 tvser-li-hover">{s}</li>) : "No data yet"} </ol></Card.Title>
          <Card.Subtitle className=" mb-2 text-info pt-3">Description: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{anim.Description}</Card.Title>


          <Card.Subtitle className="title-color mb-2 text-info pt-3"> Duration: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{anim.Duration ? anim.Duration : "No data yet"}</Card.Title>


          <Card.Subtitle className="title-color mb-2 text-info pt-3">Genre: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{anim.Genre.Name}</Card.Title><br />
          <Card.Subtitle className="title-color mb-2 text-info pt-3">Desciption: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{anim.Genre.Description}</Card.Title>


          <Card.Subtitle className="title-color mb-2 text-info pt-3">Director: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{anim.Director.Name}</Card.Title><br />
          <Card.Subtitle className="title-color mb-2 text-info pt-3">Biography: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{anim.Director.Bio}</Card.Title><br />
          <Card.Subtitle className="title-color mb-2 text-info pt-3">{anim.Director.Name}'s Birth year: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{anim.Director.Birth ? anim.Director.Birth : "No data"}</Card.Title><br />
          <Card.Subtitle className="title-color mb-2 text-info pt-3">{anim.Director.Name}'s Death year: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{anim.Director.Death ? anim.Director.Death : "No data"}</Card.Title><br />


          <Card.Subtitle className="title-color mb-2 text-info pt-3">Actors: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{anim.Actors.length > 0 ? anim.Actors.map(a => <>{a}<br /></>) : "No data yet"}</Card.Title>


          <Card.Subtitle className="title-color mb-2 text-info pt-3">IMDb Rating: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{anim.IMDbRating ? anim.IMDbRating : "No data yet"}</Card.Title>


          <Card.Subtitle className="title-color mb-2 text-info pt-3">Rotten Tomatoes Audience Rating: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{anim.Rating ? anim.Rating : "No data yet"}</Card.Title>
          <Alert
         
         className="bg-warning mb-3 pt-3 text-center">Watch the official trailer</Alert>
          <ReactPlayer className="m-auto w-auto" controls

            url={anim.Trailer}>
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
              {similarAnime(anim.Genre.Name).map((anim) => (
                <Col className="mt-3" md={6} xl={4} lg={4} sm={12} xs={10}>
                <Card className='h-100 card text-bg-primary mb-3' >
        <Card.Img className='w-100' variant='top' src={anim.ImagePath} />
        <Card.Body>
        <Card.Title className="text-success text-center bg-dark w-100 pb-3 pt-3">{anim.Title} {"("+anim.ReleaseDate.slice(0, 4)+")"}</Card.Title>
              
        <Link to={`/anime/${anim._id}`}>
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
              {similarAnimeDirector(anim.Director.Name).map((anim) => (
                <Col className="mt-3" md={6} xl={4} lg={4} sm={12} xs={10}>
                <Card className='h-100 card text-bg-primary mb-3' >
        <Card.Img className='w-100' variant='top' src={anim.ImagePath} />
        <Card.Body>
        <Card.Title className="text-success text-center bg-dark w-100 pb-3 pt-3">{anim.Title} {"("+anim.ReleaseDate.slice(0, 4)+")"}</Card.Title>
              
        <Link to={`/anime/${anim._id}`}>
            <Button className='info-button w-100 mt-2' variant='outline-light'>Read More</Button>
          </Link>
              </Card.Body>
              </Card>
              </Col>
              ))}
            </Row>

            <Alert
         
         className="bg-warning mb-3 pt-3 text-center">Same rating also have</Alert>
      
            <Row className=''>
              {similarAnimeRating(anim.Rating).map((anim) => (
                <Col className="mt-3" md={6} xl={4} lg={4} sm={12} xs={10}>
                <Card className='h-100 card text-bg-primary mb-3' >
        <Card.Img className='w-100' variant='top' src={anim.ImagePath} />
        <Card.Body>
        <Card.Title className="text-success text-center bg-dark w-100 pb-3 pt-3">{anim.Title} {"("+anim.ReleaseDate.slice(0, 4)+")"}</Card.Title>
              
        <Link to={`/anime/${anim._id}`}>
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
              {sameAnimeActors(anim.Actors).map((anim) => (
                <Col className="mt-3" md={6} xl={4} lg={4} sm={12} xs={10}>
                <Card className='h-100 card text-bg-primary mb-3' >
        <Card.Img className='w-100' variant='top' src={anim.ImagePath} />
        <Card.Body>
        <Card.Title className="text-success text-center bg-dark w-100 pb-3 pt-3">{anim.Title} {"("+anim.ReleaseDate.slice(0, 4)+")"}</Card.Title>
              
        <Link to={`/anime/${anim._id}`}>
            <Button className='info-button w-100 mt-2' variant='outline-light'>Read More</Button>
          </Link>
              </Card.Body>
              </Card>
              </Col>
              ))}
            </Row>

            <Alert
         
         className="bg-warning mb-3 pt-3 text-center">Same rating also have</Alert>
      
            <Row className=''>
              {sameAnimeDate(anim.ReleaseDate).map((anim) => (
                <Col className="mt-3" md={6} xl={4} lg={4} sm={12} xs={10}>
                <Card className='h-100 card text-bg-primary mb-3' >
        <Card.Img className='w-100' variant='top' src={anim.ImagePath} />
        <Card.Body>
        <Card.Title className="text-success text-center bg-dark w-100 pb-3 pt-3">{anim.Title} {"("+anim.ReleaseDate.slice(0, 4)+")"}</Card.Title>
              
        <Link to={`/anime/${anim._id}`}>
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