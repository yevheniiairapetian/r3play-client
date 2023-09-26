import React from "react";
// import {MDBBtn} from 'mdb-react-ui-kit';

export const Header = () => {
    return (
        <div
        className='p-5 mb-2 text-center bg-image'
        style={{ backgroundImage: "url('https://balkandiskurs.com/app/uploads/2016/11/movie-scene.jpg')", height: '400px' }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center pb-4 h-100'>
            <div className='text-white'>
              <h1 className='pt-4 mb-3'>Movies and TV Series</h1>
              <h4 className='pt-3 mb-3'>Explore the movies and tv series library</h4>
              <button className="bg-primary pt-2 pb-2 pl-4 pr-4 w-50  text-white">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}