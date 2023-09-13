import {Badge} from "react-bootstrap";

  export const MovieView = ({movie, onBackClick, movies}) => {
    let similarMovies = [];
    let sameDirector = [];
    let sameActors = [];
    let sameRating = [];

    if (movies && movie) {
      similarMovies = movies.filter((m) => m.id !== movie.id && m.Genre.Name === movie.Genre.Name);
      sameDirector = movies.filter((m) => m.id !== movie.id && m.Director.Name === movie.Director.Name);
      sameActors = movies.filter((m) => m.id !== movie.id && movie.Actors.some((actor) => m.Actors.includes(actor)));
      sameRating = movies.filter((m) => m.id !== movie.id && m.Rating === movie.Rating);
    }


    return (
      <div>
      <div bg-color="body-bg">
        <div>
          <img src={movie.ImagePath} />
        </div>
        <div>
          <span className="title-color"><Badge  color="text-primary" bg="secondary p-2">Title: </Badge></span>
            <span secondary-color="text-secondary">{movie.Title}</span>
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
        <button class="btn btn-secondary" onClick={onBackClick}>Back to the list</button>
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