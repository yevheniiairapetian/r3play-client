import { useState } from 'react';
import PropTypes from 'prop-types';
import { ScrollToTop } from '../ScrollToTop/scroll-to-top';
import { Button, Card, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faRegular, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const GenreCard = ({ genre, user, token, setUser }) => {
  const [isFavorite, setIsFavorite] = useState(
    user.LikedGenres.includes(genre._id)
  );
 
  const [showFailedFetchModal, setShowFailedFetchModal] = useState(false);
  const [showAddedGenreModal, setShowAddedGenreModal] = useState(false);
  const [showRemovedGenreModal, setShowRemovedGenreModal] = useState(false);
  const handleShowFailedFetchModal = () => setShowFailedFetchModal(true);
  const handleShowAddedGenreModal = () => setShowAddedGenreModal(true);
  const handleShowRemovedGenreModal = () => setShowRemovedGenreModal(true);
  const handleCloseFailedFetchModal = () => setShowFailedFetchModal(false);
  const handleCloseAddedGenreModal = () => setShowAddedGenreModal(false);
  const handleCloseRemovedGenreModal = () => setShowRemovedGenreModal(false);
  const addFavoriteGenre = () => {
    fetch(
      `https://www.r3play-api.com/users/${user.Username}/likedgenre/genres/${genre._id}`,
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


  const removeFavoriteGenre = () => {
    fetch(
      `https://www.r3play-api.com/users/${user.Username}/likedgenre/genres/${genre._id}`,
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
    <div className="card-container fs-5">

      <Card id="card" className='item card mb-3' >

        <Card.Img className='w-100' variant='top' src={genre.ImagePath} />
        <div className="like-button">
          {isFavorite ? (
            <FontAwesomeIcon icon={faHeart} size="lg" beatFade style={{ color: "#24AB51", "--fa-animation-iteration-count": "2", cursor:"pointer" }}
              onClick={() => { removeFavoriteGenre(); handleShowRemovedGenreModal() }} />


          ) : (

            <FontAwesomeIcon icon={faHeart} style={{ color: "#fff", cursor:"pointer" }} size="lg"
              onClick={() => { addFavoriteGenre(); handleShowAddedGenreModal() }} />

          )}
        </div>
       
        <Card.Body>

          <Card.Title id="card-title" className="item-title text-center fs-6 pb-3 pt-3">{genre.Name}
          </Card.Title>
          

          <div className="mt-4 text-center justify-content-around align-items-center">

            <Link to={`/genres/${genre._id}`}>
              <Button className='info-button fs-6 pl-5 pr-5 w-100' variant='outline-light'>More</Button>
            </Link>
          </div>
        </Card.Body>


      </Card>
       <Modal
        className="favorite-modal"
        show={showFailedFetchModal} onHide={handleCloseFailedFetchModal}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className="login-modal-body">
          <FontAwesomeIcon className="modal-info-icon" icon={faCircleInfo} fade style={{ color: "#ffd43b", }} size="lg" />

          An error happened. Please try again later.</Modal.Body>
        <Button className="got-it-button text-dark bg-white" onClick={handleCloseFailedFetchModal}>Got it!</Button>

      </Modal>



      <Modal

        className="favorite-modal" show={showAddedGenreModal} onHide={handleCloseAddedGenreModal}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className="login-modal-body">
          <FontAwesomeIcon className="modal-info-icon" icon={faCircleInfo} fade style={{ color: "#1f8c49", }} size="lg" />

          Added to faves</Modal.Body>
        <Button className="got-it-button text-dark bg-white" onClick={handleCloseAddedGenreModal}>Got it!</Button>

      </Modal>

      <Modal

        className="favorite-modal" show={showRemovedGenreModal} onHide={handleCloseRemovedGenreModal}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className="login-modal-body">
          <FontAwesomeIcon className="modal-info-icon" icon={faCircleInfo} fade style={{ color: "#1f8c49", }} size="lg" />

          Removed from faves</Modal.Body>
        <Button className="got-it-button text-dark bg-white" onClick={handleCloseRemovedGenreModal}>Got it!</Button>
      </Modal>




   
    </div>
  );
};


GenreCard.propTypes = {
  genre: PropTypes.shape({
    id: PropTypes.string,
    Name: PropTypes.string.isRequired,
    Description: PropTypes.string,
    Subgenres: PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
      ImagePath: PropTypes.string,

      
    }),
    NotableActors: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      ImagePath: PropTypes.string.isRequired,
      Birth: PropTypes.string.isRequired,
      Death: PropTypes.string,
    }),
    
    ImagePath: PropTypes.string,
  
    Occupation: PropTypes.array,
    NotableWorks: PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
      ReleaseDate: PropTypes.string,
      Rating: PropTypes.string,
      IMDbRating: PropTypes.string,
      Duration: PropTypes.string,
      ImagePath: PropTypes.string.isRequired,

    }),
    AllWorks: PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
      ReleaseDate: PropTypes.string,
      Rating: PropTypes.string,
      IMDbRating: PropTypes.string,
      Duration: PropTypes.string,
      ImagePath: PropTypes.string.isRequired,

    }),
    InterestingFacts: PropTypes.array,
    Citations: PropTypes.array,
    Nicknames: PropTypes.array,
    Trailer: PropTypes.string,
  })
};