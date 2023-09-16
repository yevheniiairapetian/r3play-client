import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Badge, Button, Row, Col } from "react-bootstrap";

  export const MovieView = ({movies}) => {
    const {movieId} = useParams();
    const movie = movies.find((m) => m._id === movieId);
    
    return (
      <div>
      <div bg-color="body-bg">
        <div>
          <img src={movie.ImagePath} />
        </div>
        <div>
          <span className="title-color"><Badge  color="text-primary" bg="secondary p-2">Title: </Badge></span>
            <span className="text-success">{movie.Title}</span>
        </div>
        <div>
          <span><Badge color="text-primary" bg="secondary p-2">Description: </Badge></span>
            <span secondary-color="text-secondary">{movie.Description}</span>
        </div>
        <div>
          <span><Badge color="text-primary" bg="secondary p-2">Duration: </Badge></span>
            <span secondary-color="text-secondary">{movie.Duration}</span>
        </div>
        <div>
          <span><Badge color="text-primary" bg="secondary p-2">Genre: </Badge></span>
            <span secondary-color="text-secondary">{movie.Genre.Name}</span><br/>
          <span><Badge color="text-primary" bg="secondary p-2">Desciption: </Badge></span>
            <span secondary-color="text-secondary">{movie.Genre.Description}</span>
        </div>
        <div>
          <span><Badge color="text-primary" bg="secondary p-2">Director: </Badge></span>
            <span secondary-color="text-secondary">{movie.Director.Name}</span><br/>
          <span><Badge color="text-primary" bg="secondary p-2">Biography: </Badge></span>
            <span secondary-color="text-secondary">{movie.Director.Bio}</span><br/>
          <span><Badge color="text-primary" bg="secondary p-2">Birth year: </Badge></span>
            <span secondary-color="text-secondary">{movie.Director.Birth}</span><br/>
            <span><Badge color="text-primary" bg="secondary p-2">Death year: </Badge></span>
            <span secondary-color="text-secondary">{movie.Director.Death}</span><br/>
        </div>
        <div>
          <span><Badge color="text-primary" bg="secondary p-2">Actors: </Badge></span>
            <span secondary-color="text-secondary">{movie.Actors.join(', ')}</span>
        </div>
        <div>
          <span><Badge color="text-primary" bg="secondary p-2">IMDb Rating: </Badge></span>
            <span secondary-color="text-secondary">{movie.IMDbRating}</span>
        </div>
        <div>
          <span><Badge color="text-primary" bg="secondary">Rotten Tomatoes Audience Rating: </Badge></span>
            <span secondary-color="text-secondary">{movie.Rating}</span>
        </div>
        <div>
          <span><Badge color="text-primary" bg="secondary p-2">Release Date: </Badge></span>
            <span secondary-color="text-secondary">{movie.ReleaseDate}</span>
        </div>
        <br/>
        <Link to={`/`}>
        <button className="text-secondary bg-success p-2">Back to the list</button>
        </Link>
        <hr/>
      </div>
      <div>
      
      </div>
      <div>
      
      </div>
      <div>
      
      </div>
      <div>
      
      </div>
      </div>
      
      
    );
  };