import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavigationBar = ({ user, onLoggedOut }) => {
	return (
		<Navbar bg="dark" color="light" expand="lg">
			<Container>
				<Navbar.Brand className="text-success p-2" as={Link} to="/">
					R3PLAY APP
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav " />
				<Navbar.Collapse id="basic-navbar-nav" >
					<Nav>
						{!user && (
							<>

								<Nav.Link className="text-light" as={Link} to='/'>
									Home
								</Nav.Link>
								<Nav.Link className="text-light" as={Link} to='/profile'>
									My Profile
								</Nav.Link>

								<Nav.Link className="text-light" as={Link} to='/login'>
									Login
								</Nav.Link>
								<Nav.Link className="text-light" as={Link} to='/signup'>
									Signup
								</Nav.Link>
								<Nav.Link className="text-light" onClick={onLoggedOut}>Logout</Nav.Link>
							</>
						)}

					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
