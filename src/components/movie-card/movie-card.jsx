import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export const MovieCard = ({ movie, user, token, setUser }) => {
  const [isFavorite, setIsFavorite] = useState(
    user.FavoriteMovies.includes(movie._id)
  );
  const [showFailedFetchModal, setShowFailedFetchModal] = useState(false);
  const handleShowFailedFetchModal = () => setShowFailedFetchModal(true);
  const handleCloseFailedFetchModal = () => setShowFailedFetchModal(false);
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
          handleShowFailedFetchModal();
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
          handleShowFailedFetchModal();
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
      <Card className='h-100 card text-bg-primary mb-3' >
        <Card.Img className='w-100' variant='top' src={movie.ImagePath} />
        <Card.Body>
        <Card.Title className="text-success text-center bg-dark w-100 pb-3 pt-3">{movie.Title} {"("+movie.ReleaseDate.slice(0, 4)+")"}</Card.Title>
        <Card.Subtitle className="title-color mb-2 text-info pt-3">Genre: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{movie.Genre.Name}</Card.Title>
          <Card.Subtitle className="title-color mb-2 text-info pt-3">Release Date: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{movie.ReleaseDate.slice(0, 4)}</Card.Title>
          <Card.Subtitle className="title-color mb-2 text-info pt-3">Desciption: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{movie.Description}</Card.Title><br/>
          <div className="d-flex justify-content-around align-items-center">
          {isFavorite ? (
            <FontAwesomeIcon icon={faHeart} size="xl" beatFade style={{color: "#24AB51", "--fa-animation-iteration-count": "2"}} onClick={removeFavoriteMovie} />
             
            
          ) : (
            <FontAwesomeIcon icon={faHeart} size="xl" style={{color:"#ffffff", }} onClick={addFavoriteMovie} />
              
          )}
          <Link to={`/movies/${movie._id}`}>
            <Button className='info-button p4-5 pr-4' variant='outline-light'>Read More</Button>
          </Link>
          </div>
        </Card.Body>


      </Card>
      <Modal show={showFailedFetchModal} onHide={handleCloseFailedFetchModal}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-danger">Fetch</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-warning">Failed to add/remove. Please try again later.</Modal.Body>
                <Modal.Footer>
                    <Button className="bg-success" onClick={handleCloseFailedFetchModal}>OK</Button>

                </Modal.Footer>
            </Modal>
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