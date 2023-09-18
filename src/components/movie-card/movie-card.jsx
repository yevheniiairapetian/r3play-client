import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const MovieCard = ({ movie, user, token, setUser }) => {
  const [isFavorite, setIsFavorite] = useState(
    user.FavoriteMovies.includes(movie._id)
  );

  const addFavoriteMovie = () => {
    fetch(
      `https://r3play-934f9ea5664d.herokuapp.com/users/${user.Username}/movies/${movie._id}`,
      {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` }
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert('Failed');
          return false;
        }
      })
      .then((user) => {
        if (user) {
          localStorage.setItem("user", JSON.stringify(user)); // updating user on local storage
          setUser(user); // updating the react application
          setIsFavorite(true);
        }
      })
      .catch((e) => {
        alert(e);
      });
  };

  const removeFavoriteMovie = () => {
    fetch(
      `https://r3play-934f9ea5664d.herokuapp.com/users/${user.Username}/movies/${movie._id}`,
      {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert('Failed');
          return false;
        }
      })
      .then((user) => {
        if (user) {
          localStorage.setItem("user", JSON.stringify(user)); // updating user on local storage
          setUser(user); // updating the react application
          setIsFavorite(false);
        }
      })
      .catch((e) => {
        alert(e);
      });
  };

  return (
    <>
      <Card className='h-100 card text-bg-dark mb-3' >
        <Card.Img className='w-100' variant='top' src={movie.ImagePath} />
        <Card.Body>
        <Card.Title className="text-success text-center pb-3">{movie.Title}</Card.Title>
        <Card.Subtitle className="title-color mb-2 text-info pt-3">Genre: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{movie.Genre.Name}</Card.Title>
          <Card.Subtitle className="title-color mb-2 text-info pt-3">Release Date: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{movie.ReleaseDate.slice(0, 4)}</Card.Title>
          <Card.Subtitle className="title-color mb-2 text-info pt-3">Desciption: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{movie.Description}</Card.Title><br/>
          {isFavorite ? (
            <Button variant='danger' className="w-100" onClick={removeFavoriteMovie}>
              Remove from favorites
            </Button>
          ) : (
            <Button className="bg-success w-100" onClick={addFavoriteMovie}>
              Add to favorites
            </Button>
          )}
        </Card.Body>

        <Card.Body>
          <Link to={`/movies/${movie._id}`}>
            <Button className='info-button w-100' variant='outline-light'>More Info</Button>
          </Link>
        </Card.Body>

      </Card>
    </>
  );
};


MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string,
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
};