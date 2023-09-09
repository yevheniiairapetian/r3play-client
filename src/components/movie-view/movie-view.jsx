  import {Badge} from "react-bootstrap";
  export const MovieView = ({ movie, onBackClick }) => {
    return (
      <div bg-color="body-bg">
        <div>
          <img src={movie.ImagePath} />
        </div>
        <div>
          <span><Badge color="text-primary" bg="secondary" className="pl-3 pr-3 pt-3 pb-3">Title: </Badge></span>
            <span className="pl-3 title-color" secondary-color="text-secondary">{movie.Title}</span>
        </div>
        <div>
          <span><Badge color="text-primary" bg="secondary" className="pl-3 pr-3 pt-3 pb-3">Description: </Badge></span>
            <span className="pl-3" secondary-color="text-secondary">{movie.Description}</span>
        </div>
        <div>
          <span><Badge color="text-primary" bg="secondary" className="pl-3 pr-3 pt-3 pb-3">Duration: </Badge></span>
            <span className="pl-3" secondary-color="text-secondary">{movie.Duration}</span>
        </div>
        <div>
          <span><Badge color="text-primary" bg="secondary" className="pl-3 pr-3 pt-3 pb-3">Genre: </Badge></span>
            <span className="pl-3" secondary-color="text-secondary">{movie.Genre.Name}</span><br/>
          <span><Badge color="text-primary" bg="secondary" className="pl-3 pr-3 pt-3 pb-3">Desciption: </Badge></span>
            <span className="pl-3" secondary-color="text-secondary">{movie.Genre.Description}</span>
        </div>
        <div>
          <span><Badge color="text-primary" bg="secondary" className="pl-3 pr-3 pt-3 pb-3">Director: </Badge></span>
            <span className="pl-3" secondary-color="text-secondary">{movie.Director.Name}</span><br/>
          <span><Badge color="text-primary" bg="secondary" className="pl-3 pr-3 pt-3 pb-3">Biography: </Badge></span>
            <span className="pl-3" secondary-color="text-secondary">{movie.Director.Bio}</span><br/>
          <span><Badge color="text-primary" bg="secondary" className="pl-3 pr-3 pt-3 pb-3">Birth year: </Badge></span>
            <span className="pl-3" secondary-color="text-secondary">{movie.Director.Birth}</span><br/>
            <span><Badge color="text-primary" bg="secondary" className="pl-3 pr-3 pt-3 pb-3">Death year: </Badge></span>
            <span className="pl-3" secondary-color="text-secondary">{movie.Director.Death}</span><br/>
        </div>
        <div>
          <span><Badge color="text-primary" bg="secondary" className="pl-3 pr-3 pt-3 pb-3">Actors: </Badge></span>
            <span className="pl-3" secondary-color="text-secondary">{movie.Actors.join(', ')}</span>
        </div>
        <div>
          <span><Badge color="text-primary" bg="secondary" className="pl-3 pr-3 pt-3 pb-3">IMDb Rating: </Badge></span>
            <span className="pl-3" secondary-color="text-secondary">{movie.IMDbRating}</span>
        </div>
        <div>
          <span><Badge color="text-primary" bg="secondary">Rotten Tomatoes Audience Rating: </Badge></span>
            <span className="pl-3" secondary-color="text-secondary">{movie.Rating}</span>
        </div>
        <div>
          <span><Badge color="text-primary" bg="secondary" className="pl-3 pr-3 pt-3 pb-3">Release Date: </Badge></span>
            <span className="pl-3" secondary-color="text-secondary">{movie.ReleaseDate}</span>
        </div>
        <br/>
        <button class="btn btn-secondary" onClick={onBackClick}>Back to the list</button>
        <hr/>
      </div>
      
    );
  };
  
  