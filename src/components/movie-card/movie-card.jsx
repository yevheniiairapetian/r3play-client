import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";


export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <Card className="h-100" onClick={() => { onMovieClick(movie); }}>
      <Card.Img src={movie.ImagePath} />
      <Card.Body>
        <Card.Title className="bg-secondary p-2">{movie.Title}</Card.Title>
        <Card.Text className="text-primary">{movie.Description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired
    }),
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