export const MovieView = ({ movie, onBackClick }) => {
    return (
      <div>
        <div>
          <img src={movie.image} />
        </div>
        <div>
          <span>Title: </span>
          <span>{movie.title}</span>
        </div>
        <div>
          <span>Description: </span>
          <span>{movie.description}</span>
        </div>
        <div>
          <span>Genre: </span>
          <span>{movie.genre.name}</span>
          <span>Desciption: </span>
          <span>{movie.genre.description}</span>
        </div>
        <div>
          <span>Director: </span>
          <span>{movie.director.name}</span>
          <span>Biography: </span>
          <span>{movie.director.bio}</span>
          <span>Birth: </span>
          <span>{movie.director.birth}</span>
        </div>
        <div>
          <span>Actors: </span>
          <span>{movie.actors}</span>
        </div>
        <div>
          <span>Featured: </span>
          <span>{movie.featured}</span>
        </div>
        <div>
          <span>Rating: </span>
          <span>{movie.rating}</span>
        </div>
        <div>
          <span>Release Date: </span>
          <span>{movie.releaseDate}</span>
        </div>

        <button onClick={onBackClick}>Back to list</button>
      </div>
    );
  };
  