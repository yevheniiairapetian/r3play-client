import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Card } from "react-bootstrap";
import ReactPlayer from "react-player";
import React from 'react';
import Alert from 'react-bootstrap/Alert';

export const TVseriesView = ({ tvseries }) => {
  const { TVId } = useParams();
  const tvser = tvseries.find((tv) => tv._id === TVId);

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



    </>


  );
};