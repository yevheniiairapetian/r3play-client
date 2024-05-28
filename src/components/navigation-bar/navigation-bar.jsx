import { Navbar, Container, Row, Col, Modal, Nav, Image, Button } from "react-bootstrap";
import useSound from 'use-sound';
import Logo from '../../images/logo.png';
import { Link } from "react-router-dom";
import useDarkMode from "./../../hooks/useDarkMode";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faBell, faCircleInfo, faLightbulb, faMoon } from '@fortawesome/free-solid-svg-icons';
import { faMoon, faHouseChimney, faFilm, faTv, faRobot, faUserPlus, faUser, faCircleLeft, faRightToBracket, faSun } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import Click from './src/click.wav';

export const NavigationBar = ({ user, onLoggedOut }) => {
	const [showDarkModal, setShowDarkModal] = useState(false);
	const [showLightModal, setShowLightModal] = useState(false);
	const handleShowLightModal = () => setShowLightModal(true);
	const handleShowDarkModal = () => setShowDarkModal(true);
	const handleCloseLightModal = () => setShowLightModal(false);
	const handleCloseDarkModal = () => setShowDarkModal(false);
	const ClickButton = () => {
		const [play] = useSound(Click);
		return <Button className="info-sound-click-button" onClick={() => { play(); setVisible(!visible) }}></Button>;
	};
	const ClickThemeDark = () => {
		const [play] = useSound(Click);
		return <button className="toggle_btn pl-3" onClick={() => { play();setDarkMode(!isDarkMode); handleShowLightModal(); setExpanded(false) }}>

			<FontAwesomeIcon className="sun" 
			// title={t("themeSwitcherLightHint")} 
			icon={faLightbulb} beatFade style={{ color: "#FFD43B", "--fa-animation-iteration-count": "2" }} />
		</button>
		// onClick={() => {setVisible(!visible)}}
	};
	const ClickThemeLight = () => {
		const [play] = useSound(Click);
		return <button className="toggle_btn pl-3" onClick={() => { play();setDarkMode(!isDarkMode); handleShowDarkModal(); setExpanded(false) }}>
			<FontAwesomeIcon className="moon" 
			// title={t("themeSwitcherDarkHint")} 
			icon={faLightbulb} beatFade style={{ color: "#000000", color: "#000000", "--fa-animation-iteration-count": "2" }} />
		</button>
		// onClick={() => {setVisible(!visible)}}
	};
	const [isDarkMode, setDarkMode] = useDarkMode();
	const [active, setActive] = useState("true");
	const [expanded, setExpanded] = useState(false);

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
<>
		<Navbar id="navigation" className="navigation" data-bs-theme="light" expand="lg">
			<Container className="navigation">
				<Navbar.Brand className="p-2" as={Link} to="/">
					<Image width="100px" height="auto" className="logo img-responsive" alt="logo" src={Logo} />
				</Navbar.Brand>
				<Navbar.Toggle id="collapse-button" aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="justify-content-end w-100 ">
						{user && (
							<>

								<Nav.Link className="navbar-icons" as={Link} to='/'>
									<FontAwesomeIcon  className="" size="lg" icon={faHouseChimney} /> <span className="navbar-icons-span">Home</span>
								</Nav.Link>
								<Nav.Link className="navbar-icons" as={Link} to='/movies'>
									<FontAwesomeIcon size="lg" icon={faFilm} /> <span className="navbar-icons-span">Movies</span>
								</Nav.Link>
								<Nav.Link className="navbar-icons" as={Link} to='/tvseries'>
									<FontAwesomeIcon className="" size="lg" icon={faTv} /> <span className="navbar-icons-span">TV Series</span>
								</Nav.Link>
								<Nav.Link className="navbar-icons" as={Link} to='/anime'>
									<FontAwesomeIcon className="" size="lg" icon={faRobot} /> <span className="navbar-icons-span">Anime</span>
								</Nav.Link>
								<Nav.Link className="navbar-icons" as={Link} to='/profile'>
									<FontAwesomeIcon className="" size="lg" icon={faUser} />  <span className="navbar-icons-span">{user.Username}</span>
								</Nav.Link>
								<Nav.Link>
									
							{isDarkMode ? (
								<ClickThemeDark />) : (
								<ClickThemeLight />

							)}
							
								</Nav.Link>
								<Nav.Link className="navbar-icons" onClick={onLoggedOut}><FontAwesomeIcon icon={faCircleLeft} />  <span className="navbar-icons-span">Logout</span></Nav.Link>
							</>
						)}
						{!user && (
							<>
								<Nav.Link className="" as={Link} to='/login'>
									<FontAwesomeIcon className="navbar-icons" size="lg" icon={faRightToBracket} />  <span className="navbar-icons-span">Login</span>
								</Nav.Link>
								<Nav.Link className="" as={Link} to='/signup'>
									<FontAwesomeIcon className="navbar-icons" size="lg" icon={faUserPlus} />  <span className="navbar-icons-span">Sign up</span>
								</Nav.Link>
								<Nav.Link>
									
							{isDarkMode ? (
								<ClickThemeDark />) : (
								<ClickThemeLight />

							)}
							
								</Nav.Link>
							</>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
		<Modal

		className="favorite-modal" show={showDarkModal} onHide={handleCloseDarkModal}>
		<Modal.Header closeButton>
			{/* <Modal.Title className="text-success">Favorites</Modal.Title> */}
		</Modal.Header>
		<Modal.Body className="text-light bg-dark dark-modal-body"><FontAwesomeIcon className="modal-info-icon" icon={faCircleInfo} fade style={{ color: "#1f8c49", }} size="lg" />
		{/* {t("darkModalMessage")} */}
		Welcome to the dark side!
		</Modal.Body>

		<Button 
		// title={t("modalHint")} 
		className="got-it-button text-light bg-success dark-modal-button" onClick={handleCloseDarkModal}>
			{/* {t("modalConfirm")} */}
			Gotcha!
			</Button>

	</Modal>

	<Modal

		className="favorite-modal" show={showLightModal} onHide={handleCloseLightModal}>
		<Modal.Header closeButton>
			{/* <Modal.Title className="text-success">Favorites</Modal.Title> */}
		</Modal.Header>
		<Modal.Body className="text-dark bg-light"><FontAwesomeIcon className="modal-info-icon" icon={faCircleInfo} fade style={{ color: "#1f8c49", }} size="lg" />
		{/* {t("lightModalMessage")} */}
Welcome to the light side!
		</Modal.Body>

		<Button 
		// title={t("modalHint")} 
		className="got-it-button light-modal-button" onClick={handleCloseLightModal}>
			{/* {t("modalConfirm")} */}
			Gotcha!
			</Button>
	</Modal>

</>
	);
};
