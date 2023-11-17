import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export const TVseriesCard = ({ tvseries, user, token, setUser }) => {
  const [isFavorite, setIsFavorite] = useState(
  user.FavoriteMovies.includes(tvseries._id)
  );
  const [showFailedFetchModal, setShowFailedFetchModal] = useState(false);
  const [showAddedMovieModal, setShowAddedMovieModal] = useState(false);
  const [showRemovedMovieModal, setShowRemovedMovieModal] = useState(false);
  const handleShowFailedFetchModal = () => setShowFailedFetchModal(true);
  const handleShowAddedMovieModal = () => setShowAddedMovieModal(true);
  const handleShowRemovedMovieModal = () => setShowRemovedMovieModal(true);
  const handleCloseFailedFetchModal = () => setShowFailedFetchModal(false);
  const handleCloseAddedMovieModal = () => setShowAddedMovieModal(false);
  const handleCloseRemovedMovieModal = () => setShowRemovedMovieModal(false);
  const addFavoriteTV = () => {
    fetch(
      `https://r3play-934f9ea5664d.herokuapp.com/users/${user.Username}/tvseries/${tvseries._id}`,
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
        handleShowFailedFetchModal();
      });
  };

  const removeFavoriteTV = () => {
    fetch(
      `https://r3play-934f9ea5664d.herokuapp.com/users/${user.Username}/tvseries/${tvseries._id}`,
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
        handleShowFailedFetchModal();
      });
  };

  return (
    <div className="card-container">
      <Card id="card" className='h-100 card text-bg-primary mb-3' >
        <Card.Img className='w-100' variant='top' src={tvseries.ImagePath} />
        <div className="like-button">
          {isFavorite ? (
            <FontAwesomeIcon icon={faHeart} size="xl" beatFade style={{color: "#24AB51", "--fa-animation-iteration-count": "2"}} 
            onClick={()=>{removeFavoriteTV();handleShowRemovedMovieModal()}} />
             
            
          ) : (

            <FontAwesomeIcon icon={faHeart} style={{color: "#fff"}} size="xl" 
            // style={{color:"green"}}
            onClick={()=>{addFavoriteTV(); handleShowAddedMovieModal()}} />
              
          )}
          </div>
        <Card.Body>
        <Card.Title id="card-title" className="text-success text-center fs-6 pb-3 pt-3">{tvseries.Title} 
        </Card.Title>
          <Card.Title className=" text-center pb-1" secondary-color="text-secondary">{tvseries.Genre.Name}, {tvseries.ReleaseDate.slice(0, 4)}</Card.Title>
          <div className="mt-4 text-center justify-content-around align-items-center">
          
          <Link to={`/tvseries/${tvseries._id}`}>
          <Button className='info-button fs-6 pl-5 pr-5 w-100' variant='outline-light'>More</Button>
          </Link>
          </div>
        </Card.Body>

        <Modal 
          
            className="favorite-modal" show={showAddedMovieModal} onHide={handleCloseAddedMovieModal}>
                <Modal.Header closeButton>
                    {/* <Modal.Title className="text-success">Favorites</Modal.Title> */}
                </Modal.Header>
                <Modal.Body  className="text-dark bg-white">Added to faves</Modal.Body>
                <Button className="got-it-button text-dark bg-white" onClick={handleCloseAddedMovieModal}>Got it!</Button>
              
            </Modal>

            <Modal 
          
            className="favorite-modal" show={showRemovedMovieModal} onHide={handleCloseRemovedMovieModal}>
                <Modal.Header closeButton>
                    {/* <Modal.Title className="text-success">Favorites</Modal.Title> */}
                </Modal.Header>
                <Modal.Body  className="text-dark bg-white">Removed from faves</Modal.Body>
                <Button className="got-it-button text-dark bg-white" onClick={handleCloseRemovedMovieModal}>Got it!</Button>
            </Modal>

      </Card>
      <Modal 
       className="favorite-modal"
      show={showFailedFetchModal} onHide={handleCloseFailedFetchModal}>
                <Modal.Header closeButton>
                    {/* <Modal.Title className="text-danger">Fetch</Modal.Title> */}
                </Modal.Header>
                <Modal.Body className="text-dark bg-white">An error happened. Please try again later.</Modal.Body>
                {/* <Modal.Footer> */}
                    <Button className="got-it-button text-dark bg-white" onClick={handleCloseFailedFetchModal}>Got it!</Button>

                {/* </Modal.Footer> */}
            </Modal>
    </div>
  );
};

TVseriesCard.propTypes = {
  tvseries: PropTypes.shape({
    id: PropTypes.string,
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Season: PropTypes.array,
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
    Trailer: PropTypes.string
  }).isRequired,
};