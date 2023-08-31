import PropTypes from "prop-types";

export const MovieCard = ({ movie, onMovieClick }) => {
    return (
      <div
        onClick={() => {
          onMovieClick(movie);
        }}
      >
        {movie.Title}
      </div>
    );
  };
  
  MovieCard.propTypes = {
    movie: PropTypes.shape({
      id: PropTypes.string.isRequired,
      Title: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
      Genre: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired}),
      Director: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        Bio: PropTypes.string.isRequired,
        Birth: PropTypes.string,
        Death: PropTypes.string 
      }),
      ImagePath: PropTypes.string,
      Featured: PropTypes.bool,
      Actors: PropTypes.array,
      Rating: PropTypes.string,
      ReleaseDate: PropTypes.string,
      Duration: PropTypes.string,
      IMDbRating: PropTypes.string
}).isRequired,
    onMovieClick: PropTypes.func.isRequired
  };