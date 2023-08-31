

  export const MovieView = ({ movie, onBackClick }) => {
    return (
      <div>
        <div>
          <img src={movie.ImagePath} />
        </div>
        <div>
          <span>Title: </span>
            <span>{movie.Title}</span>
        </div>
        <div>
          <span>Description: </span>
            <span>{movie.Description}</span>
        </div>
        <div>
          <span>Duration: </span>
            <span>{movie.Duration}</span>
        </div>
        <div>
          <span>Genre: </span>
            <span>{movie.Genre.Name}</span><br/>
          <span>Desciption: </span>
            <span>{movie.Genre.Description}</span>
        </div>
        <div>
          <span>Director: </span>
            <span>{movie.Director.Name}</span><br/>
          <span>Biography: </span>
            <span>{movie.Director.Bio}</span><br/>
          <span>Birth year: </span>
            <span>{movie.Director.Birth}</span><br/>
            <span>Death year: </span>
            <span>{movie.Director.Death}</span><br/>
        </div>
        <div>
          <span>Actors: </span>
            <span>{movie.Actors.join(', ')}</span>
        </div>
        <div>
          <span>IMDb Rating: </span>
            <span>{movie.IMDbRating}</span>
        </div>
        <div>
          <span>Rotten Tomatoes Audience Rating: </span>
            <span>{movie.Rating}</span>
        </div>
        <div>
          <span>Release Date: </span>
            <span>{movie.ReleaseDate}</span>
        </div>

        <button onClick={onBackClick}>Back to movies list</button>
      </div>
    );
  };
  
  