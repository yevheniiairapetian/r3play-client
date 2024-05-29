import { useEffect, useState } from 'react';
import { ScrollToTop } from '../ScrollToTop/scroll-to-top';
import { Spin } from '../spinner/spinner';
import { MovieCard } from '../movie-card/movie-card';
import { Fragment } from 'react';
import { ScrollButton } from '../scroll-button/ScrollButton';
import { Header } from '../header/header';
import { MovieView } from '../movie-view/movie-view';
import { TVseriesCard } from '../tvseries-card/tvseries-card';
import { TVseriesView } from '../tvseries-view/tvseries-view';
import { AnimeCard } from '../anime-card/anime-card';
import { AnimeView } from '../anime-view/anime-view';
import { LoginView } from '../login-view/login-view';
import { SignupView } from '../signup-view/signup-view';
import { Footer } from '../footer/footer';
import { NavigationBar } from '../navigation-bar/navigation-bar';
import { ProfileView } from "../profile-view/profile-view";
import { Row, Col, InputGroup, Form } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { UncontrolledExample } from '../Carousel/carousel';
import { FooterAuthorized } from '../footer-authorized/footer-authorized';
export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [tvseries, setTVSeries] = useState([]);
  const [animes, setAnimes] = useState([]);



  useEffect(() => {
    if (!token) return;

    fetch('https://r3play-934f9ea5664d.herokuapp.com/movies', {
      headers: { Authorization: `Bearer ${token}` }
    }).then((response) => response.json())
      .then((data) => {
        setMovies(data);
      })
      .then(() => {
        fetch("https://r3play-934f9ea5664d.herokuapp.com/tvseries", {
          headers: { Authorization: `Bearer ${token}` }
        }).then((response) => response.json())
          .then((data) => {
            setTVSeries(data);

          })
          .then(() => {
            fetch("https://r3play-934f9ea5664d.herokuapp.com/animes", {
              headers: { Authorization: `Bearer ${token}` }
            }).then((response) => response.json())
              .then((data) => {
                setAnimes(data);

              })
          })

      })
  }, [token]);

  return (
    <>
      <BrowserRouter>
        <ScrollButton />
        <ScrollToTop />
        <NavigationBar
          user={user}
          onLoggedOut={() => {
            setUser(null);
            setToken(null);
            localStorage.clear();
          }}

        />
        <Row className="justify-content-center">
          <Routes>
            <Route
              path="/signup"
              element={
                <>
                  {user ? (
                    <Navigate to="/login" replace />
                  ) : (
                    <Row>
                      <Col className="page-content-wrapper" md={8} lg={6} sm={12}>
                        <SignupView />
                      </Col>
                      <Col className="footer">
                        <Footer />
                      </Col>
                    </Row>
                  )}

                </>
              }
            />
            <Route
              path="/login"
              element={
                <>
                  {user ? (
                    <Navigate to="/" />
                  ) : (
                    <Row >
                      <Col className="page-content-wrapper" md={8} lg={6} sm={12} >
                        <LoginView onLoggedIn={(user, token) => { setUser(user); setToken(token) }} />

                      </Col>
                      <Col className="footer">
                        <Footer />
                      </Col>
                    </Row>
                  )}

                </>
              }
            />


            <Route
              path='/movies'
              element={
                <>
                  {!user ? (
                    <>
                      <Navigate to='/login' replace />


                    </>
                  ) : movies.length === 0 ? (
                    <>
                      <Col className="text-center mt-4"><Spin /></Col>
                      {/* <h3 className="text-warning mt-3 mb-3 pt-3 text-center">Session expired. Please log out and then log in again</h3> */}

                    </>
                  ) : (
                    <>
                      <Row className="my-3">


                        <input className="search-input" 
                          id="search search-input input-search"
                          onChange={(e) => setSearch(e.target.value)}
                          placeholder="Search (e.g. Lethal Weapon)"
                          aria-label="Search"
                        />


                      </Row>
                      {/* <UncontrolledExample></UncontrolledExample> */}
                      {/* <Header></Header> */}

                      <Row className=''>


                        {movies.filter((movie) => {
                          return search === "" ?
                            movie :
                            movie.Title.toLowerCase().includes(search.toLowerCase());

                        }

                        ).map((movie) => (
                          <Col className="pl-5 pr-5 ml-5 mr-5 mt-4 all-media-container" key={movie._id} md={4} xl={2} lg={3} sm={6} xs={12}>
                            <MovieCard

                              className="flexible-media ml-5 mr-5 "
                              movie={movie}
                              user={user}
                              token={token}
                              setUser={setUser}
                            />
                          </Col>
                        ))}


                      </Row>
                    </>
                  )}
                  <FooterAuthorized/>
                </>
              }
            />

            <Route
              path='/tvseries'
              element={
                <>
                  {!user ? (
                    <>
                      <Navigate to='/login' replace />


                    </>
                  ) : movies.length === 0 ? (
                    <>
                      <Col className="text-center mt-4"><Spin /></Col>
                      {/* <h3 className="text-warning mt-3 mb-3 pt-3 text-center">Session expired. Please log out and then log in again</h3> */}

                    </>
                  ) : (
                    <>
                      <Row className="my-3">


                        <input className="search-input"
                          id="search search-input input-search"
                          onChange={(e) => setSearch(e.target.value)}
                          placeholder="Search (e.g. House)"
                          aria-label="Search"
                        />


                      </Row>
                      {/* <UncontrolledExample></UncontrolledExample> */}
                      {/* <Header></Header> */}

                      <Row>


                        {tvseries.filter((tvseries) => {
                          return search === "" ?
                            tvseries :
                            tvseries.Title.toLowerCase().includes(search.toLowerCase());
                        }

                        ).map((tvseries) => (
                          <Col className="pl-5 pr-5 ml-5 mr-5 mt-4 all-media-container" key={tvseries._id} md={4} xl={2} lg={3} sm={6} xs={12}>
                            <TVseriesCard
                              className="flexible-media ml-5 mr-5"
                              tvseries={tvseries}
                              user={user}
                              token={token}
                              setUser={setUser}
                            />
                          </Col>
                        ))}


                      </Row>
                    </>
                  )}
                  <FooterAuthorized />
                </>
              }
            />



            <Route
              path='/anime'
              element={
                <>
                  {!user ? (
                    <>
                      <Navigate to='/login' replace />


                    </>
                  ) : movies.length === 0 ? (
                    <>
                      <Col className="text-center mt-4"><Spin /></Col>
                      {/* <h3 className="text-warning mt-3 mb-3 pt-3 text-center">Session expired. Please log out and then log in again</h3> */}

                    </>
                  ) : (
                    <>
                      <Row className="my-3">


                        <input className="search-input"
                          id="search search-input input-search"
                          onChange={(e) => setSearch(e.target.value)}
                          placeholder="Search (e.g. Ergo Proxy)"
                          aria-label="Search"
                        />


                      </Row>
                      {/* <UncontrolledExample></UncontrolledExample> */}
                      {/* <Header></Header> */}

                      <Row>


                        {animes.filter((animes) => {
                          return search === "" ?
                            animes :
                            animes.Title.toLowerCase().includes(search.toLowerCase());
                        }

                        ).map((animes) => (
                          <Col className="pl-5 pr-5 ml-5 mr-5 mt-4 all-media-container" key={animes._id} md={4} xl={2} lg={3} sm={6} xs={12}>
                            <AnimeCard
                              className="flexible-media ml-5 mr-5"
                              animes={animes}
                              user={user}
                              token={token}
                              setUser={setUser}
                            />
                          </Col>

                        ))}


                      </Row>
                    </>
                  )}
                  <FooterAuthorized />
                </>
              }
            />


            <Route
              path='/movies/:movieId'
              element={
                <>
                  {!user ? (
                    <>
                      <Navigate to='/login' replace />


                    </>
                  ) : movies.length === 0 ? (
                    <>
                      <Col className="text-center mt-4"><Spin /></Col>
                      {/* <h3 className="text-warning mt-3 mb-3 pt-3 text-center">Session expired. Please log out and then log in again</h3> */}

                    </>
                  ) : (
                    <Col md={8}>

                      <MovieView movies={movies} />

                    </Col>
                  )}
                  <FooterAuthorized />
                </>
              }
            />
            <Route
              path='/tvseries/:TVId'
              element={
                <>
                  {!user ? (
                    <>
                      <Navigate to='/login' replace />


                    </>
                  ) : tvseries.length === 0 ? (
                    <>
                      <Col className="text-center mt-4"><Spin /></Col>
                      {/* <h3 className="text-warning mt-3 mb-3 pt-3 text-center">Session expired. Please log out and then log in again</h3> */}

                    </>
                  ) : (
                    <Col md={8}>

                      <TVseriesView tvseries={tvseries} />
                    </Col>
                  )}
                  <FooterAuthorized />
                </>
              }
            />
            <Route
              path='/animes/:AnimeId'
              element={
                <>
                  {!user ? (
                    <>
                      <Navigate to='/login' replace />


                    </>
                  ) : animes.length === 0 ? (
                    <>
                      <Col className="text-center mt-4"><Spin /></Col>
                      {/* <h3 className="text-warning mt-3 mb-3 pt-3 text-center">Session expired. Please log out and then log in again</h3> */}

                    </>
                  ) : (
                    <Col md={8}>

                      <AnimeView animes={animes} />
                    </Col>
                  )}
                  <FooterAuthorized />
                </>
              }
            />
            <Route
              path="/"
              element={
                <>
                  <>
                    {!user ? (
                      <>
                        <Navigate to='/login' replace />


                      </>
                    ) : movies.length === 0 ? (
                      <>

                        <Col className="text-center mt-4"><Spin /></Col>
                        {/* <h3 className="text-warning mt-3 mb-3 pt-3 text-center">Session expired. Please log out and then log in again</h3> */}

                      </>
                    ) : (
                      <>
                        
                        <UncontrolledExample></UncontrolledExample>
                        <Header></Header>








                      </>
                    )}

                  </>
                  <FooterAuthorized />
                </>


              }

            />
            <Route
              path='/profile'
              element={
                <>
                  {!user ? (
                    <Navigate to='/login' replace />
                  ) : (
                    <Col>
                      <ProfileView
                        user={user}
                        token={token}
                        setUser={setUser}
                        movies={movies}
                        tvseries={tvseries}
                        animes={animes}
                      />
                    </Col>
                  )}
                  <FooterAuthorized />
                </>
              }
            />

          </Routes>

        </Row>

      </BrowserRouter>

    </>

  )

}