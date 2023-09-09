import {Badge} from "react-bootstrap";

export const TVseriesView = ({ tvseries, onBackClick }) => {
  return (
    <div bg-color="body-bg">
      <div>
        <img src={movie.ImagePath} />
      </div>
      <div>
        <span><Badge color="text-primary" bg="secondary p-2">Title: </Badge></span>
          <span secondary-color="text-secondary">{tvseries.Title}</span>
      </div>
      <div>
        <span><Badge color="text-primary" bg="secondary p-2">Description: </Badge></span>
          <span secondary-color="text-secondary">{tvseries.Description}</span>
      </div>
      <div>
        <span><Badge color="text-primary" bg="secondary p-2">Season: </Badge></span>
          <span secondary-color="text-secondary">{tvseries.Season}</span>
      </div>
      <div>
        <span><Badge color="text-primary" bg="secondary p-2">Duration: </Badge></span>
          <span secondary-color="text-secondary">{tvseries.Duration}</span>
      </div>
      <div>
        <span><Badge color="text-primary" bg="secondary p-2">Genre: </Badge></span>
          <span secondary-color="text-secondary">{tvseries.Genre.Name}</span><br/>
        <span><Badge color="text-primary" bg="secondary p-2">Desciption: </Badge></span>
          <span secondary-color="text-secondary">{tvseries.Genre.Description}</span>
      </div>
      <div>
        <span><Badge color="text-primary" bg="secondary p-2">Director: </Badge></span>
          <span secondary-color="text-secondary">{tvseries.Director.Name}</span><br/>
        <span><Badge color="text-primary" bg="secondary p-2">Biography: </Badge></span>
          <span secondary-color="text-secondary">{tvseries.Director.Bio}</span><br/>
        <span><Badge color="text-primary" bg="secondary p-2">Birth year: </Badge></span>
          <span secondary-color="text-secondary">{tvseries.Director.Birth}</span><br/>
          <span><Badge color="text-primary" bg="secondary p-2">Death year: </Badge></span>
          <span secondary-color="text-secondary">{tvseries.Director.Death}</span><br/>
      </div>
      <div>
        <span><Badge color="text-primary" bg="secondary p-2">Actors: </Badge></span>
          <span secondary-color="text-secondary">{tvseries.Actors.join(', ')}</span>
      </div>
      <div>
        <span><Badge color="text-primary" bg="secondary p-2">IMDb Rating: </Badge></span>
          <span secondary-color="text-secondary">{tvseries.IMDbRating}</span>
      </div>
      <div>
        <span><Badge color="text-primary" bg="secondary">Rotten Tomatoes Audience Rating: </Badge></span>
          <span secondary-color="text-secondary">{tvseries.Rating}</span>
      </div>
      <div>
        <span><Badge color="text-primary" bg="secondary p-2">Release Date: </Badge></span>
          <span secondary-color="text-secondary">{tvseries.ReleaseDate}</span>
      </div>
      <br/>
      <button class="btn btn-secondary" onClick={onBackClick}>Back to the list</button>
      <hr/>
    </div>
    
  );
  };