import Spinner from 'react-bootstrap/Spinner';
import React from "react";

export const Spin = () =>{
    return (
      <Spinner animation="border" variant="success" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }