import React from 'react';
import { Nav, Col, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faHouseChimney, faFilm, faTv, faRobot, faUserPlus, faUser, faCircleLeft, faRightToBracket, faSun } from '@fortawesome/free-solid-svg-icons';
import {
  MDBFooter,
  MDBContainer,
} from 'mdb-react-ui-kit';

export const Footer = () => {
  return (

    <MDBFooter id="footer" className='text-center text-white mt-3' style={{
      position: 'relative',
      bottom: '0',
      width: '100%', height: '240px'
    }}>
      <MDBContainer className='p-4 pb-0'>
        <section className=''>
          <p className='d-flex justify-content-center align-items-center'>



          </p>
        </section>
      </MDBContainer>

      <div className='footer text-center p-5'>
        <em>Signup for free or login</em><br />
        <br /><button type='button' className="bg-light mt-2 mb-2 pl-4 pr-4 pt-1 pb-1" style={{ borderRadius: '5px', border: 'none', marginRight: '10px' }}>
          <Nav.Link className="text-dark" as={Link} to='/login'>
            <FontAwesomeIcon size="lg" icon={faRightToBracket} className="footer-non-auth-icons" />
          </Nav.Link>

        </button><button type='button' className="bg-light mt-2 mb-2 pl-4 pr-4 pt-1 pb-1" style={{ borderRadius: '5px', border: 'none' }}>

          <Nav.Link className="text-dark" as={Link} to='/signup'>
            <FontAwesomeIcon size="lg" icon={faUserPlus} className="footer-non-auth-icons" />
          </Nav.Link>

        </button><br />

        <a href="https://yevheniiairapetian.com" className="text-light footer-info" target="_blank" >
          Yevhenii Airapetian
        </a>
        <br />
        <br />
        <span>© 2024 Copyright: R3PLAY APP</span>

      </div>
    </MDBFooter>

  );
}