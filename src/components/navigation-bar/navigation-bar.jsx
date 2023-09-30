import { Navbar, Container, Row, Col, Nav, Image } from "react-bootstrap";
import Logo from '../../images/logo.png';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
export const NavigationBar = ({ user, onLoggedOut }) => {
	const [theme, setTheme] = useState(
		localStorage.getItem('theme') || 'light'
	  );
	const toggleTheme = () => {
		if (theme === 'light') {
		  setTheme('dark');
		} else {
		  setTheme('light');
		}
	  };
	
	
	  useEffect(() => {
		document.body.className = theme;
		// document.querySelectorAll('body *').className = theme;
	  }, [theme]);
	return (
		<Navbar id="navigation" className="bg-nav-light" bg="dark" color="light" expand="lg">
			<Container className="navigation">
				<Navbar.Brand className="text-success p-2" as={Link} to="/">
					<Image width="100px" height="auto" className="img-responsive" alt="logo" src={Logo} />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav " />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="justify-content-end w-100">
						{!user && (
							<> <Row>

      

        </Row>

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
								<Nav.Link>
								<button className="text-light bg-dark nav-link-hover toggle-nav" style={{outline: "none", border: "none"}} onClick={()=>{toggleTheme()}}>{theme==='light'? (<FontAwesomeIcon size="lg" beatFade icon={faMoon} style={{"--fa-animation-iteration-count": "2"}}/>) : (<FontAwesomeIcon beatFade size="lg" icon={faSun} style={{"--fa-animation-iteration-count": "2"}}/>)}</button>
							</Nav.Link>
							</>
						)}

					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
