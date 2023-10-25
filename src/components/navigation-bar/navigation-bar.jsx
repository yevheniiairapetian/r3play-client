import { Navbar, Container, Row, Col, Nav, Image } from "react-bootstrap";

import Logo from '../../images/logo.png';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faHouse, faUserPlus, faUser, faCircleLeft, faRightToBracket, faSun } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
export const NavigationBar = ({ user, onLoggedOut }) => {
	const [active, setActive] = useState("true");
	const handleToggle = () => {
		setActive(!active);
	};
	const [theme, setTheme] = useState(
		localStorage.getItem('theme') || 'light'
	);

	const toggleTheme = () => {
		if (theme === 'light') {
			document.getElementById('navigation').setAttribute('data-bs-theme', 'dark')
			setTheme('dark');
		} else {
			setTheme('light');
			document.getElementById('navigation').setAttribute('data-bs-theme', 'light')
		}
	};


	useEffect(() => {
		document.body.className = theme;
		// document.querySelectorAll('body *').className = theme;
	}, [theme]);
	return (

		<Navbar id="navigation" className={active ? "bg-light text-info" : "bg-dark"} data-bs-theme="light" expand="lg">
			<Container className="navigation">
				<Navbar.Brand className="text-success p-2" as={Link} to="/">
					<Image width="100px" height="auto" className="img-responsive" alt="logo" src={Logo} />
				</Navbar.Brand>
				<Navbar.Toggle id="collapse-button" aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="justify-content-end w-100 ">
						{user && (
							<>

								<Nav.Link className="" as={Link} to='/'>
									<FontAwesomeIcon size="lg" icon={faHouse} style={{ color: "#238A47", }} /> <span style={{ color: "#238A47", }} className="links">Home</span>
								</Nav.Link>
								<Nav.Link className="" as={Link} to='/profile'>
									<FontAwesomeIcon size="lg" icon={faUser} style={{ color: "#238A47", }} />  <span style={{ color: "#238A47", }} className="links">{user.Username}</span>
								</Nav.Link>
								<Nav.Link>
									<button title="Click to change the theme" className="toggle-nav" style={{ outline: "none", border: "none" }} onClick={() => { toggleTheme(), handleToggle() }}>{theme === 'light' ? (<FontAwesomeIcon size="lg" beatFade icon={faMoon} style={{ "--fa-animation-iteration-count": "2" }} />) : (<FontAwesomeIcon beatFade size="lg" icon={faSun} style={{ "--fa-animation-iteration-count": "2" }} />)}<span className="links">Theme</span></button>
								</Nav.Link>
								<Nav.Link size="lg" className="" onClick={onLoggedOut}><FontAwesomeIcon icon={faCircleLeft} style={{ color: "#238A47", }} />  <span style={{ color: "#238A47", }} className="links">Logout</span></Nav.Link>
							</>
						)}
						{!user && (
							<>
								<Nav.Link className="" as={Link} to='/login'>
									<FontAwesomeIcon size="lg" icon={faRightToBracket} style={{ color: "#238A47", }} />  <span style={{ color: "#238A47", }} className="links">Login</span>
								</Nav.Link>
								<Nav.Link className="" as={Link} to='/signup'>
									<FontAwesomeIcon size="lg" icon={faUserPlus} style={{ color: "#238A47", }} />  <span style={{ color: "#238A47", }} className="links">Sign up</span>
								</Nav.Link>
								<Nav.Link>
									<button title="Click to change the theme" className="toggle-nav" style={{ outline: "none", border: "none" }} onClick={() => { toggleTheme(), handleToggle() }}>{theme === 'light' ? (<FontAwesomeIcon size="lg" beatFade icon={faMoon} style={{ "--fa-animation-iteration-count": "2" }} />) : (<FontAwesomeIcon beatFade size="lg" icon={faSun} style={{ "--fa-animation-iteration-count": "2" }} />)}<span className="links">Theme</span></button>
								</Nav.Link>
							</>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
