import { useState } from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { Button, Col, Form, Row, Modal } from 'react-bootstrap';


export const ProfileView = ({ user, token, setUser, movies }) => {

	const [username, setUsername] = useState(user.Username);
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState(user.Email);
	const [birthday, setBirthday] = useState(user.Birthday);
	const [showModal, setShowModal] = useState(false);
	const [showUpdateModal, setShowUpdateModal] = useState(false);
	const [showUpdateFailedModal, setShowUpdateFailedModal] = useState(false);
	

	let result = movies.filter((movie) => user.FavoriteMovies.includes(movie._id));

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
			handleShowUpdateModal();
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
				return response.json();
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
				alert("something went wrong.")
			}
		})
	}

	return (
		<>

			<Row>
				<Col >
					<Form className="pb-4 pt-4" onSubmit={handleSubmit} >
						<h3 className='text-success text-center pt-4 pb-2'>My Profile</h3>
						<Form.Group controlId="formUsername" className='form-group pb-4'>
							<Form.Label>Username:</Form.Label>
							<Form.Control
								type="text"
								placeholder="Your username"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								required
							/>
						</Form.Group>

						<Form.Group controlId="formPassword" className='form-group pb-4'>
							<Form.Label>Password:</Form.Label>
							<Form.Control
								type="password"
								placeholder="Your password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</Form.Group>

						<Form.Group controlId="formEmail" className='form-group pb-4'>
							<Form.Label>Email:</Form.Label>
							<Form.Control
								type="email"
								placeholder="Your email address"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</Form.Group>

						<Form.Group controlId="formBirthday" className='form-group pb-4'>
							<Form.Label>Birthday:</Form.Label>
							<Form.Control
								type="date"
								value={birthday.slice(0, 10)}
								onChange={(e) => setBirthday(e.target.value)}
								required
							/>
						</Form.Group>

					</Form>
				</Col>
			</Row>

			<Row>
				<Col>
					<Button className="bg-success w-100 mb-1" type="submit" onClick={handleSubmit}>Save changes</Button>
				</Col>
			</Row>

			<Row >
				<Col className="delete-button text-center">
					<Button variant="link" className="text-danger" onClick={handleShowModal}>
						Delete my account
					</Button>
				</Col>
			</Row>

			<Row>
				<Col>
					<h3 className="text-success pt-4 pb-4 text-center">Favorite movies:</h3>
				</Col>
			</Row>
			<Row >
				{result.map((movie) => (
					<Col key={movie._id} md={6}>
						<MovieCard
							movie={movie}
							user={user}
							token={token}
							setUser={setUser}
						>
						</MovieCard>
					</Col>
				))}
			</Row>

			<Modal show={showModal} onHide={handleCloseModal}>
				<Modal.Header closeButton>
					<Modal.Title className="text-danger">Delete my account</Modal.Title>
				</Modal.Header>
				<Modal.Body className="text-warning">Are you sure you want to delete your account? It can't be reverted</Modal.Body>
				<Modal.Footer>
					<Button className="bg-success" onClick={handleDeleteUser}>Yes</Button>
					<Button className="bg-danger" onClick={handleCloseModal}>No</Button>
				</Modal.Footer>
			</Modal>

			<Modal show={showUpdateModal} onHide={handleCloseUpdateModal}>
				<Modal.Header closeButton>
					<Modal.Title className="text-danger">Update Account</Modal.Title>
				</Modal.Header>
				<Modal.Body className="text-warning">Successfully updated user details</Modal.Body>
				<Modal.Footer>
					<Button className="bg-success" onClick={handleCloseUpdateModal}>OK</Button>
				</Modal.Footer>
			</Modal>

			<Modal show={showUpdateFailedModal} onHide={handleCloseUpdateFailedModal}>
				<Modal.Header closeButton>
					<Modal.Title className="text-danger">Update Account</Modal.Title>
				</Modal.Header>
				<Modal.Body className="text-warning">Failed. The defined user already exists. Please choose another username</Modal.Body>
				<Modal.Footer>
					<Button className="bg-success" onClick={handleCloseUpdateFailedModal}>OK</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}