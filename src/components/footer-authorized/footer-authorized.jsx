import React from 'react';

import { Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faHouseChimney, faFilm, faTv, faRobot, faUserPlus, faUser, faCircleLeft, faRightToBracket, faSun } from '@fortawesome/free-solid-svg-icons';
import {
  MDBFooter,
  MDBContainer,
} from 'mdb-react-ui-kit';

export const FooterAuthorized = (onLoggedOut) => {
  return (
    <MDBFooter id="footer" className='text-center text-white ' style={{
      position: 'relative',
      width: '100%', height: '240px'
    }}>
      <MDBContainer className='p-0 pb-0 '>
        <section className=''>
          <p className='d-flex justify-content-center align-items-center'>




          </p>
        </section>
      </MDBContainer>

      <div className='text-center footer pt-4 pb-4'>

        <br /><button type='button' className="bg-light pl-4 mt-2 mb-2 pr-4 pt-1 pb-1" style={{ borderRadius: '5px', border: 'none', marginRight: '10px' }}>
          <Nav.Link className="" as={Link} to='/'>
            <FontAwesomeIcon size="lg" icon={faHouseChimney} className="footer-auth-icons" />
          </Nav.Link>
        </button><button type='button' className="bg-light pl-4 mt-2 mb-2 pr-4 pt-1 pb-1" style={{ borderRadius: '5px', border: 'none' }}>
          <Nav.Link className="text-dark" as={Link} to='/profile'>
            <FontAwesomeIcon size="lg" icon={faUser} className="footer-auth-icons" />
          </Nav.Link>
        </button><br /><br />

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