import { Navbar, Container, Nav, Image } from "react-bootstrap";
import Logo from '../../images/logo.png';
import { Link } from "react-router-dom";

export const NavigationBar = ({ user, onLoggedOut }) => {
	return (
		<Navbar bg="dark" color="light" expand="lg">
			<Container>
				<Navbar.Brand className="text-success p-2" as={Link} to="/">
					<Image width="100px" height="auto" className="img-responsive" alt="logo" src={Logo} />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav " />
				<Navbar.Collapse id="basic-navbar-nav" >
					<Nav className="justify-content-end w-100">
						{!user && (
							<>

								<Nav.Link className="text-light nav-link-color nav-link-hover" as={Link} to='/'>
									Home
								</Nav.Link>
								<Nav.Link className="text-light nav-link-color nav-link-hover" as={Link} to='/profile'>
									My Profile
								</Nav.Link>

								<Nav.Link className="text-light nav-link-color nav-link-hover" as={Link} to='/login'>
									Login
								</Nav.Link>
								<Nav.Link className="text-light nav-link-color nav-link-hover" as={Link} to='/signup'>
									Signup
								</Nav.Link>
								<Nav.Link className="text-light nav-link-color nav-link-hover" onClick={onLoggedOut}>Logout</Nav.Link>
							</>
						)}

					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
