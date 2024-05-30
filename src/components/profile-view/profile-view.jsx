import { useState } from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { TVseriesCard } from '../tvseries-card/tvseries-card';
import { AnimeCard } from '../anime-card/anime-card';
import { Button, Col, Form, Row, Modal, Alert, Accordion, Card } from 'react-bootstrap';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ProfileView = ({ user, token, setUser, movies, tvseries, animes }) => {

	const [username, setUsername] = useState(user.Username);
	const [password, setPassword] = useState("");
	const [showWentWrongModal, setShowWentWrongModal] = useState(false);
	const [email, setEmail] = useState(user.Email);
	const [birthday, setBirthday] = useState(user.Birthday);
	const [showModal, setShowModal] = useState(false);
	const [showUpdateModal, setShowUpdateModal] = useState(false);
	const [showUpdateFailedModal, setShowUpdateFailedModal] = useState(false);
	const handleShowWentWrongModal = () => setShowWentWrongModal(true);
	const handleCloseWentWrongModal = () => setShowWentWrongModal(false);


	let resultMovies = movies.filter((movie) => user.FavoriteMovies.includes(movie._id));
	let resultTV = tvseries.filter((tvseries) => user.FavoriteMovies.includes(tvseries._id));
	let resultAnime = animes.filter((animes) => user.FavoriteMovies.includes(animes._id));

	const handleShowModal = () => setShowModal(true);
	const handleCloseModal = () => setShowModal(false);
	const handleShowUpdateModal = () => setShowUpdateModal(true);
	const handleCloseUpdateModal = () => setShowUpdateModal(false);
	const handleShowUpdateFailedModal = () => setShowUpdateFailedModal(true);
	const handleCloseUpdateFailedModal = () => setShowUpdateFailedModal(false);

	const handleSubmit = (event) => {
		event.preventDefault();

		let data = {
			Username: username,
			Email: email,
			Birthday: birthday
		};
		if (password) {
			data['Password'] = password
			data['Email'] = email
			data['Birthday'] = birthday

		}

		fetch(`https://r3play-934f9ea5664d.herokuapp.com/users/${user.Username}`, {
			method: "PUT",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`
			}
		}).then((response) => {
			if (response.ok) {
				return (handleShowUpdateModal(),
					response.json());
			} else {
				handleShowUpdateFailedModal();
			}
		}).then((data) => {
			if (data) {
				localStorage.setItem("user", JSON.stringify(data));
				setUser(data);
			}
		})
	};

	const handleDeleteUser = () => {
		fetch(`https://r3play-934f9ea5664d.herokuapp.com/users/${user.Username}`, {
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${token}`
			}
		}).then((response) => {
			if (response.ok) {
				setUser(null);
			} else {
				handleShowWentWrongModal();
			}
		})
	}

	return (

		<div className="container-profile">

			<Row className='container-profile'>
				<Alert md={4} xl={4} lg={4} sm={8} xs={10}

					className=" alert mb-3 mt-3 pt-3 text-center">My Profile</Alert>
				<Col className="m-auto mt-3" md={4} xl={4} lg={4} sm={8} xs={10}>

					<h6

						className="profile-heading  mb-3 pt-3 text-center"><span className="profile-data"> Username:</span> {username}</h6>
					<h6

						className="profile-heading mb-3 pt-3 text-center"><span className="profile-data"> Email:</span> {email}</h6>
					<h6

						className="profile-heading mb-3 pt-3 text-center"><span className="profile-data"> Birthday:</span> {birthday.slice(0, 10)}</h6>
					<p className="mb-3 pt-1 text-center"><em className="profile-tip">Don't forget to <span className="profile-tip-extra">save the changes </span>(if altered)!</em></p>




				</Col>



				<Col className="m-auto" md={4} xl={4} lg={4} sm={8} xs={10}>
					<Form className="pb-4 pt-4" onSubmit={handleSubmit} >

						<Form.Group controlId="formUsername" className='form-group pb-4'>
							<Form.Label className="form-label" >Username:</Form.Label>
							<Form.Control
								type="text"
								placeholder="Your username"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								required
							/>
						</Form.Group>

						<Form.Group controlId="formPassword" className='form-group pb-4'>
							<Form.Label className="form-label">Password:</Form.Label>
							<Form.Control
								type="password"
								placeholder="Your password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</Form.Group>

						<Form.Group controlId="formEmail" className='form-group pb-4'>
							<Form.Label className="form-label">Email:</Form.Label>
							<Form.Control
								type="email"
								placeholder="Your email address"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</Form.Group>

						<Form.Group controlId="formBirthday" className='form-group pb-4'>
							<Form.Label className="form-label">Birthday:</Form.Label>
							<Form.Control
								type="date"
								value={birthday.slice(0, 10)}
								onChange={(e) => setBirthday(e.target.value)}
								required
							/>
						</Form.Group>

						<Col>
							<Button className="form-submit-button w-100 mb-1" type="submit" onClick={handleSubmit}>Update</Button>
						</Col>

						<Col className="delete-button text-center">
							<Button variant="link" className="text-danger mt-3 mb-3" onClick={handleShowModal}>
								Delete my account
							</Button>
						</Col>


					</Form>
				</Col>
			</Row>

			<Row>
				<h5 className="favorites-heading pt-3 pb-3">You have <span className="favorites-data">{resultMovies.length > 1 || resultMovies.length == 0 ? resultMovies.length + " movies, " : resultMovies.length + " movie, "}</span><span className="favorites-data">{resultAnime.length > 1 ? resultAnime.length + " anime, " : resultAnime.length + " anime, "}</span> and <span className="favorites-data">{resultTV.length > 1 ? resultTV.length + " TV series" : resultTV.length + " TV series"} </span> in your favorites list</h5>
				<Accordion defaultActiveKey="0">
					<Accordion.Item eventKey="0">
						<Accordion.Header title="Click to expand/collapse" className="text-success text-center">My Favorites</Accordion.Header>
						<Accordion.Body className="profile-accordion-body">
							<Row id="card-info" secondary-color="text-secondary pb-3">{resultMovies.map((movie) => (

								<Col className="all-media-container mb-4" key={movie._id} md={4} xl={2} lg={3} sm={6} xs={12} >
									<MovieCard
										className="flexible-media"
										movie={movie}
										user={user}
										token={token}
										setUser={setUser}
									>
									</MovieCard>
								</Col>

							))}
								{resultTV.map((tvseries) => (

									<Col className="all-media-container mb-4" key={tvseries._id} md={4} xl={2} lg={3} sm={6} xs={12}>
										<TVseriesCard
											className="flexible-media"
											tvseries={tvseries}
											user={user}
											token={token}
											setUser={setUser}
										>
										</TVseriesCard>
									</Col>

								))}
								{resultAnime.map((animes) => (

									<Col className="all-media-container mb-4" key={animes._id} md={4} xl={2} lg={3} sm={6} xs={12}>
										<AnimeCard
											className="flexible-media"
											animes={animes}
											user={user}
											token={token}
											setUser={setUser}
										>
										</AnimeCard>
									</Col>

								))}</Row>
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>




			</Row>

			<Modal className="delete-modal" show={showModal} onHide={handleCloseModal}>
				<Modal.Header className="delete-title" closeButton>
					<Modal.Title className="">Delete my account</Modal.Title>
				</Modal.Header>
				<Modal.Body className="login-modal-body">
				<FontAwesomeIcon className="modal-info-icon" icon={faCircleInfo} fade style={{ color: "red", }} size="lg" />

					Are you sure you want to delete your account? It can't be reverted</Modal.Body>
				<Modal.Footer className="delete-footer">
					<Button className="delete-confirm text-center" onClick={handleDeleteUser}>Confirm</Button>
					<Button className="delete-cancel text-center" onClick={handleCloseModal}>Cancel</Button>
				</Modal.Footer>
			</Modal>

			<Modal className="favorite-modal" show={showUpdateModal} onHide={handleCloseUpdateModal}>
				<Modal.Header closeButton>
					{/* <Modal.Title className="text-success">Update Account</Modal.Title> */}
				</Modal.Header>
				<Modal.Body className="login-modal-body">
				<FontAwesomeIcon className="modal-info-icon" icon={faCircleInfo} fade style={{ color: "#1f8c49", }} size="lg" />

					Info was updated</Modal.Body>
				{/* <Modal.Footer> */}
					<Button className="got-it-button text-dark bg-white" onClick={handleCloseUpdateModal}>Got it!</Button>
				{/* </Modal.Footer> */}
			</Modal>

			<Modal className="update-failed-modal" show={showUpdateFailedModal} onHide={handleCloseUpdateFailedModal}>
				<Modal.Header closeButton>
					{/* <Modal.Title className="text-danger">Update Account</Modal.Title> */}
				</Modal.Header>
				<Modal.Body className="login-modal-body">
				<FontAwesomeIcon className="modal-info-icon" icon={faCircleInfo} fade style={{ color: "#ffd43b", }} size="lg" />

					Failed. Reasons: <br />1. Username is too short. <br/> 2. Username/email already taken. <br />3. Empty/invalid data entered.</Modal.Body>
				{/* <Modal.Footer> */}
					<Button className="got-it-button text-dark bg-white" onClick={handleCloseUpdateFailedModal}>Got it!</Button>
				{/* </Modal.Footer> */}
			</Modal>
			<Modal className="favorite-modal" show={showWentWrongModal} onHide={handleCloseWentWrongModal}>
				<Modal.Header closeButton>
					{/* <Modal.Title className="text-danger">Information</Modal.Title> */}
				</Modal.Header>
				<Modal.Body className="login-modal-body">
				<FontAwesomeIcon className="modal-info-icon" icon={faCircleInfo} fade style={{ color: "#ffd43b", }} size="lg" />

					Something went wrong. Please try again later</Modal.Body>
				{/* <Modal.Footer> */}
					<Button className="got-it-button text-dark bg-white" onClick={handleCloseWentWrongModal}>Got it!</Button>

				{/* </Modal.Footer> */}
			</Modal>
		</div>
	)
}