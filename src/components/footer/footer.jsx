import React from 'react';
import { Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import {
  MDBFooter,
  MDBContainer,
} from 'mdb-react-ui-kit';

export const Footer = () => {
  return (
    <MDBFooter id="footer" className='text-center text-white mt-3' style={{
      position: 'relative',
      bottom: '0',
      width: '100%', height: '80px'
    }}>
      <MDBContainer className='p-4 pb-0'>
        <section className=''>
          <p className='d-flex justify-content-center align-items-center'>
            <span className='me-3'>Register for free or login</span>
            
            
          </p>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', color: 'green', width: '100%' }}>

        <br /><button type='button' className="bg-light mt-2 mb-2 pl-4 pr-4 pt-1 pb-1" style={{ borderRadius: '5px', border: 'none', marginRight: '10px' }}>
          <Nav.Link className="text-dark" as={Link} to='/login'>
            Login
          </Nav.Link>

        </button><button type='button' className="bg-light mt-2 mb-2 pl-4 pr-4 pt-1 pb-1" style={{ borderRadius: '5px', border: 'none' }}>

          <Nav.Link className="text-dark" as={Link} to='/signup'>
            Signup
          </Nav.Link>

        </button>
        
        <br />© 2023 Copyright: R3PLAY APP<br /><a className='text-success' target="_blank" href='https://yevheniiairapetian.github.io/portfolio-website/'>
          Yevhenii Airapetian
        </a>
      </div>
    </MDBFooter>
  );
}