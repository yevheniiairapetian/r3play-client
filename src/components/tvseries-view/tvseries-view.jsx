export const TVseriesView = ({ tvseries, onBackClick }) => {
    return (
      <div className="text-primary">
        <div>
          <img src={tvseries.ImagePath} />
        </div>
        <div>
          <span><Badge bg="secondary p-2">Title: </Badge></span>
            <span>{tvseries.Title}</span>
        </div>
        <div>
          <span><Badge bg="secondary p-2">Description: </Badge></span>
            <span>{tvseries.Description}</span>
        </div>
        <div>
          <span><Badge bg="secondary p-2">Season: </Badge></span>
            <span>{tvseries.Season}</span>
        </div>
        <div>
          <span><Badge bg="secondary p-2">Duration: </Badge></span>
            <span>{tvseries.Duration}</span>
        </div>
        <div>
          <span><Badge bg="secondary p-2">Genre: </Badge></span>
            <span>{tvseries.Genre.Name}</span><br/>
          <span><Badge bg="secondary p-2">Desciption: </Badge></span>
            <span>{movie.Genre.Description}</span>
        </div>
        <div>
          <span><Badge bg="secondary p-2">Director: </Badge></span>
            <span>{tvseries.Director.Name}</span><br/>
          <span><Badge bg="secondary p-2">Biography: </Badge></span>
            <span>{tvseries.Director.Bio}</span><br/>
          <span><Badge bg="secondary p-2">Birth year: </Badge></span>
            <span>{tvseries.Director.Birth}</span><br/>
            <span><Badge bg="secondary p-2">Death year: </Badge></span>
            <span>{tvseries.Director.Death}</span><br/>
        </div>
        <div>
          <span><Badge bg="secondary p-2">Actors: </Badge></span>
            <span>{tvseries.Actors.join(', ')}</span>
        </div>
        <div>
          <span><Badge bg="secondary p-2">IMDb Rating: </Badge></span>
            <span>{tvseries.IMDbRating}</span>
        </div>
        <div>
          <span><Badge bg="secondary">Rotten Tomatoes Audience Rating: </Badge></span>
            <span>{tvseries.Rating}</span>
        </div>
        <div>
          <span><Badge bg="secondary p-2">Release Date: </Badge></span>
            <span>{tvseries.ReleaseDate}</span>
        </div>
        <br/>
        <button class="btn btn-secondary" onClick={onBackClick}>Back to movies list</button>
        <hr/>
      </div>
    );
  };