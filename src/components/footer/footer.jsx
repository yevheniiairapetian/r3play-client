import React from 'react';
import { Nav } from "react-bootstrap";
import {Link} from 'react-router-dom';
import {
  MDBFooter,
  MDBContainer,
  MDBBtn
} from 'mdb-react-ui-kit';

export const Footer = () => {
  return (
    <MDBFooter id="footer" className='text-center text-white mt-3' style={{ backgroundColor: 'black', position: 'relative',
    bottom: '0',
    width: '100%' }}>
      <MDBContainer className='p-4 pb-0'>
        <section className=''>
          <p className='d-flex justify-content-center align-items-center'>
            <span className='me-3'>Register for free</span>
            <MDBBtn type='button' className="bg-light" rounded>
            
              <Nav.Link className="text-dark" as={Link} to='/signup'>
									Signup!
								</Nav.Link>
            </MDBBtn>
          </p>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <br/><a className='text-white' target="_blank" href='https://yevheniiairapetian.github.io/portfolio-website/'>
        Yevhenii Airapetian
        </a>
      </div>
    </MDBFooter>
  );
}