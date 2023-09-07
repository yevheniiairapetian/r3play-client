  import {Badge} from "react-bootstrap";
  export const MovieView = ({ movie, onBackClick }) => {
    return (
      <div className="text-primary">
        <div>
          <img src={movie.ImagePath} />
        </div>
        <div>
          <span><Badge bg="secondary p-2">Title: </Badge></span>
            <span>{movie.Title}</span>
        </div>
        <div>
          <span><Badge bg="secondary p-2">Description: </Badge></span>
            <span>{movie.Description}</span>
        </div>
        <div>
          <span><Badge bg="secondary p-2">Duration: </Badge></span>
            <span>{movie.Duration}</span>
        </div>
        <div>
          <span><Badge bg="secondary p-2">Genre: </Badge></span>
            <span>{movie.Genre.Name}</span><br/>
          <span><Badge bg="secondary p-2">Desciption: </Badge></span>
            <span>{movie.Genre.Description}</span>
        </div>
        <div>
          <span><Badge bg="secondary p-2">Director: </Badge></span>
            <span>{movie.Director.Name}</span><br/>
          <span><Badge bg="secondary p-2">Biography: </Badge></span>
            <span>{movie.Director.Bio}</span><br/>
          <span><Badge bg="secondary p-2">Birth year: </Badge></span>
            <span>{movie.Director.Birth}</span><br/>
            <span><Badge bg="secondary p-2">Death year: </Badge></span>
            <span>{movie.Director.Death}</span><br/>
        </div>
        <div>
          <span><Badge bg="secondary p-2">Actors: </Badge></span>
            <span>{movie.Actors.join(', ')}</span>
        </div>
        <div>
          <span><Badge bg="secondary p-2">IMDb Rating: </Badge></span>
            <span>{movie.IMDbRating}</span>
        </div>
        <div>
          <span><Badge bg="secondary">Rotten Tomatoes Audience Rating: </Badge></span>
            <span>{movie.Rating}</span>
        </div>
        <div>
          <span><Badge bg="secondary p-2">Release Date: </Badge></span>
            <span>{movie.ReleaseDate}</span>
        </div>
        <br/>
        <button class="btn btn-secondary" onClick={onBackClick}>Back to movies list</button>
        <hr/>
      </div>
      
    );
  };
  
  