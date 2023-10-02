import React from 'react';
import { Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import {
  MDBFooter,
  MDBContainer,
} from 'mdb-react-ui-kit';

export const FooterAuthorized = (onLoggedOut) => {
  return (
    <MDBFooter id="footer" className='text-center text-white mt-3' style={{
      position: 'relative',
      width: '100%', height: '100px'
    }}>
      <MDBContainer className='p-4 pb-0'>
        <section className=''>
          <p className='d-flex justify-content-center align-items-center'>
            



          </p>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', color: 'green' }}>

        <br /><button type='button' className="bg-light pl-4 mt-2 mb-2 pr-4 pt-1 pb-1" style={{ borderRadius: '5px', border: 'none', marginRight: '10px' }}>
          <Nav.Link className="text-dark" as={Link} to='/'>
            Home
          </Nav.Link>
        </button><button type='button' className="bg-light pl-4 mt-2 mb-2 pr-4 pt-1 pb-1" style={{ borderRadius: '5px', border: 'none' }}>
          <Nav.Link className="text-dark" as={Link} to='/profile'>
            My Profile
          </Nav.Link>
        </button><br />
        
        <a className="text-success" target="_blank" href='https://yevheniiairapetian.github.io/portfolio-website/'>
          Yevhenii Airapetian<br/>
        </a>© 2023 Copyright: R3PLAY APP

      </div>
    </MDBFooter>
  );
}