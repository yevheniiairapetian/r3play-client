import React from "react";
import { Link } from 'react-router-dom';


export const Header = () => {
    return (
        <div
        className='header p-5 text-center bg-image'
        style={{ backgroundImage: "url('http://www.normansblog.de/wp-content/uploads/2009/06/movies.jpg')", height: '400px', width:'100%'}}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center pb-4'>
            <div className='text-white'>
              <h1 className='pt-4 mb-3'>Movies, Anime and TV Series</h1>
              <h4 className='pt-3 mb-3'>Explore the library</h4>
              <Link to={`/movies`}>
              <button className="check-more-header-btn pt-2 pb-2 pl-4 pr-4 w-50" variant="outline-light">
                Check out more
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
}