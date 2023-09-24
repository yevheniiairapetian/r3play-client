import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Card } from "react-bootstrap";
import ReactPlayer from "react-player";
import React from 'react';

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();
  const movie = movies.find((m) => m._id === movieId);

  return (
    <>
      <Card>
        <Card.Img className='h-100 card text-bg-dark mb-3' variant={top} src={movie.ImagePath} />

        <Card.Body className="card-bg-color">
          <Card.Subtitle className="title-color text-center mb-2 text-info pt-3">Title:</Card.Subtitle>
          <Card.Title className="text-success text-center pb-3">{movie.Title}</Card.Title>
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
          <Card.Title secondary-color="text-secondary pb-3">{movie.Actors.join(', ')}</Card.Title>


          <Card.Subtitle className="title-color mb-2 text-info pt-3">IMDb Rating: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{movie.IMDbRating ? movie.IMDbRating : "No data yet"}</Card.Title>


          <Card.Subtitle className="title-color mb-2 text-info pt-3">Rotten Tomatoes Audience Rating: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{movie.Rating ? movie.Rating : "No data yet"}</Card.Title>
          <Card.Subtitle className="title-color mb-3 text-info pt-3">Watch the official trailer: </Card.Subtitle>
          <ReactPlayer className="m-auto" controls

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