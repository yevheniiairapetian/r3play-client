

  export const MovieView = ({ movie, onBackClick }) => {
    return (
      <div>
        <div>
          <img src={movie.image} />
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
          <span>Birth: </span>
            <span>{movie.Director.Birth}</span>
        </div>
        <div>
          <span>Actors: </span>
            <span>{movie.Actors.join(', ')}</span>
        </div>
        <div>
          <span>Featured: </span>
            <span>{String(movie.Featured)}</span>
        </div>
        <div>
          <span>Rating: </span>
            <span>{movie.Rating}</span>
        </div>
        <div>
          <span>Release Date: </span>
            <span>{movie.ReleaseDate}</span>
        </div>

        <button onClick={onBackClick}>Back to list</button>
      </div>
    );
  };
  
  