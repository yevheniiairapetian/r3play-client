import { useState } from 'react';
import PropTypes from 'prop-types';
import { ScrollToTop } from '../ScrollToTop/scroll-to-top';
import { Button, Card, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faRegular, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ActorCard = ({ actor, user, token, setUser }) => {
  // const [isFavorite, setIsFavorite] = useState(
  //   user.FavoriteMovies.includes(movie._id)
  // );
  // const [isWatched, setIsWatched] = useState(
  //   user.WatchedMovies.includes(movie._id)
  // );
  // const [showFailedFetchModal, setShowFailedFetchModal] = useState(false);
  // const [showAddedMovieModal, setShowAddedMovieModal] = useState(false);
  // const [showRemovedMovieModal, setShowRemovedMovieModal] = useState(false);
  // const [showAddedWatchedMovieModal, setShowAddedWatchedMovieModal] = useState(false);
  // const [showRemovedWatchedMovieModal, setShowRemovedWatchedMovieModal] = useState(false);
  // const handleShowFailedFetchModal = () => setShowFailedFetchModal(true);
  // const handleShowAddedMovieModal = () => setShowAddedMovieModal(true);
  // const handleShowRemovedMovieModal = () => setShowRemovedMovieModal(true);
  // const handleShowAddedWatchedMovieModal = () => setShowAddedWatchedMovieModal(true);
  // const handleShowRemovedWatchedMovieModal = () => setShowRemovedWatchedMovieModal(true);
  // const handleCloseFailedFetchModal = () => setShowFailedFetchModal(false);
  // const handleCloseAddedMovieModal = () => setShowAddedMovieModal(false);
  // const handleCloseRemovedMovieModal = () => setShowRemovedMovieModal(false);
  // const handleCloseAddedWatchedMovieModal = () => setShowAddedWatchedMovieModal(false);
  // const handleCloseRemovedWatchedMovieModal = () => setShowRemovedWatchedMovieModal(false);
  // const addFavoriteMovie = () => {
  //   fetch(
  //     `https://r3play-934f9ea5664d.herokuapp.com/users/${user.Username}/favorites/movies/${movie._id}`,
  //     {
  //       method: 'POST',
  //       headers: { Authorization: `Bearer ${token}` }
  //     }
  //   )
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       } else {
  //         handleShowFailedFetchModal();
  //         return false;
  //       }
  //     })
  //     .then((user) => {
  //       if (user) {
  //         localStorage.setItem("user", JSON.stringify(user)); // updating user on local storage
  //         setUser(user); // updating the react application
  //         setIsFavorite(true);
  //       }
  //     })
  //     .catch((e) => {
  //       handleShowFailedFetchModal();
  //     });
  // };

  // const addWatchedMovie = () => {
  //   fetch(
  //     `https://r3play-934f9ea5664d.herokuapp.com/users/${user.Username}/watched/movies/${movie._id}`,
  //     {
  //       method: 'POST',
  //       headers: { Authorization: `Bearer ${token}` }
  //     }
  //   )
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       } else {
  //         handleShowFailedFetchModal();
  //         return false;
  //       }
  //     })
  //     .then((user) => {
  //       if (user) {
  //         localStorage.setItem("user", JSON.stringify(user)); // updating user on local storage
  //         setUser(user); // updating the react application
  //         setIsWatched(true);
  //       }
  //     })
  //     .catch((e) => {
  //       handleShowFailedFetchModal();
  //     });
  // };

  // const removeFavoriteMovie = () => {
  //   fetch(
  //     `https://r3play-934f9ea5664d.herokuapp.com/users/${user.Username}/favorites/movies/${movie._id}`,
  //     {
  //       method: 'DELETE',
  //       headers: { Authorization: `Bearer ${token}` }
  //     }
  //   )
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       } else {
  //         handleShowFailedFetchModal();
  //         return false;
  //       }
  //     })
  //     .then((user) => {
  //       if (user) {
  //         localStorage.setItem("user", JSON.stringify(user)); // updating user on local storage
  //         setUser(user); // updating the react application
  //         setIsFavorite(false);
  //       }
  //     })
  //     .catch((e) => {
  //       handleShowFailedFetchModal();
  //     });
  // };

  // const removeWatchedMovie = () => {
  //   fetch(
  //     `https://r3play-934f9ea5664d.herokuapp.com/users/${user.Username}/watched/movies/${movie._id}`,
  //     {
  //       method: 'DELETE',
  //       headers: { Authorization: `Bearer ${token}` }
  //     }
  //   )
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       } else {
  //         handleShowFailedFetchModal();
  //         return false;
  //       }
  //     })
  //     .then((user) => {
  //       if (user) {
  //         localStorage.setItem("user", JSON.stringify(user)); // updating user on local storage
  //         setUser(user); // updating the react application
  //         setIsWatched(false);
  //       }
  //     })
  //     .catch((e) => {
  //       handleShowFailedFetchModal();
  //     });
  // };

  return (
    <div className="card-container fs-5">

      <Card id="card" className='item card mb-3' >

        <Card.Img className='w-100' variant='top' src={actor.ImagePath} />
        {/* <div className="like-button">
          {isFavorite ? (
            <FontAwesomeIcon icon={faHeart} size="lg" beatFade style={{ color: "#24AB51", "--fa-animation-iteration-count": "2", cursor:"pointer" }}
              onClick={() => { removeFavoriteMovie(); handleShowRemovedMovieModal() }} />


          ) : (

            <FontAwesomeIcon icon={faHeart} style={{ color: "#fff", cursor:"pointer" }} size="lg"
              onClick={() => { addFavoriteMovie(); handleShowAddedMovieModal() }} />

          )}
        </div>
        <div className="watched-button">
          {isWatched ? (
            <span style={{ color: "#24AB51", cursor:"pointer" }} onClick={() => { removeWatchedMovie(); handleShowRemovedWatchedMovieModal() }}
            >Watched ✓
              
            </span>

          ) : (
            <span style={{ color: "#ffd", cursor:"pointer" }} onClick={() => { addWatchedMovie(); handleShowAddedWatchedMovieModal() }}
            >Watch +
              
            </span>
          )}
        </div> */}
        <Card.Body>

          <Card.Title id="card-title" className="item-title text-center fs-6 pb-3 pt-3">{actor.Name}
          </Card.Title>
          <Card.Title className="item-info text-center pb-1" >{actor.Birth ? actor.Birth : null } - {actor.Death ? actor.Death : "Present" }
            {/* , 
            {movie.ReleaseDate.slice(0, 4)} */}
            </Card.Title>
            <Card.Title className="item-info text-center pb-1" >
            {actor.Occupation.length > 0 ? actor.Occupation.map(o => <>{o}<br /></>) : "No data yet"}
            
            {/* , 
            {movie.ReleaseDate.slice(0, 4)} */}
            </Card.Title>

          <div className="mt-4 text-center justify-content-around align-items-center">

            <Link to={`/actors/${actor._id}`}>
              <Button className='info-button fs-6 pl-5 pr-5 w-100' variant='outline-light'>More</Button>
            </Link>
          </div>
        </Card.Body>


      </Card>
      {/* <Modal
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

        className="favorite-modal" show={showAddedMovieModal} onHide={handleCloseAddedMovieModal}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className="login-modal-body">
          <FontAwesomeIcon className="modal-info-icon" icon={faCircleInfo} fade style={{ color: "#1f8c49", }} size="lg" />

          Added to faves</Modal.Body>
        <Button className="got-it-button text-dark bg-white" onClick={handleCloseAddedMovieModal}>Got it!</Button>

      </Modal>

      <Modal

        className="favorite-modal" show={showRemovedMovieModal} onHide={handleCloseRemovedMovieModal}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className="login-modal-body">
          <FontAwesomeIcon className="modal-info-icon" icon={faCircleInfo} fade style={{ color: "#1f8c49", }} size="lg" />

          Removed from faves</Modal.Body>
        <Button className="got-it-button text-dark bg-white" onClick={handleCloseRemovedMovieModal}>Got it!</Button>
      </Modal>




      <Modal

        className="favorite-modal" show={showAddedWatchedMovieModal} onHide={handleCloseAddedWatchedMovieModal}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className="login-modal-body">
          <FontAwesomeIcon className="modal-info-icon" icon={faCircleInfo} fade style={{ color: "#1f8c49", }} size="lg" />

          Added to watched</Modal.Body>
        <Button className="got-it-button text-dark bg-white" onClick={handleCloseAddedWatchedMovieModal}>Got it!</Button>

      </Modal>

      <Modal

        className="favorite-modal" show={showRemovedWatchedMovieModal} onHide={handleCloseRemovedWatchedMovieModal}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className="login-modal-body">
          <FontAwesomeIcon className="modal-info-icon" icon={faCircleInfo} fade style={{ color: "#1f8c49", }} size="lg" />

          Removed from watched</Modal.Body>
        <Button className="got-it-button text-dark bg-white" onClick={handleCloseRemovedWatchedMovieModal}>Got it!</Button>
      </Modal> */}
    </div>
  );
};


ActorCard.propTypes = {
  actor: PropTypes.shape({
    id: PropTypes.string,
    Name: PropTypes.string.isRequired,
    Bio: PropTypes.string,
    Birth: PropTypes.string,
      Death: PropTypes.string,
      Birthplace: PropTypes.string,
      Nationality: PropTypes.string,
    // ,
    // Description: PropTypes.string.isRequired,
    // Genre: PropTypes.shape({
    //   Name: PropTypes.string.isRequired,
    //   Description: PropTypes.string.isRequired
    }),
    // Director: PropTypes.shape({
    //   Name: PropTypes.string.isRequired,
    //   Bio: PropTypes.string.isRequired,
    //   Birth: PropTypes.string,
    //   Death: PropTypes.string
    // }),
    ImagePath: PropTypes.string,
    // Featured: PropTypes.bool,
    // InterestingFacts: PropTypes.array,
    Occupation: PropTypes.array,
    NotableWorks: PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
      ReleaseDate: PropTypes.string,
      Rating: PropTypes.string,
      IMDbRating: PropTypes.string,
      Duration: PropTypes.string
    }),
    AllWorks: PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
      ReleaseDate: PropTypes.string,
      Rating: PropTypes.string,
      IMDbRating: PropTypes.string,
      Duration: PropTypes.string
    }),

    Spouses: PropTypes.array,
    InterestingFacts: PropTypes.array,
    Citations: PropTypes.array,
    Nicknames: PropTypes.array,
    YearsActive: PropTypes.string,
    Trailer: PropTypes.string,
    Website: PropTypes.string,
    // ReleaseDate: PropTypes.string,
    // Duration: PropTypes.string,
    // IMDbRating: PropTypes.string
  // }).isRequired,
};