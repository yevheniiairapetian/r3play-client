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
                    <Navigate to="/" />
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
              path='/movies/:movieId'
              element={
                <>
                  {!user ? (
                    <>
                      <Navigate to='/login' replace />

                      <h3>Session expired. Please log in again</h3>
                    </>
                  ) : movies.length === 0 ? (
                    <>
                      <Col className="text-center mt-4"><Spin /></Col>

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

                      <h3>Session expired. Please log in again</h3>
                    </>
                  ) : tvseries.length === 0 ? (
                    <>
                      <Col className="text-center mt-4"><Spin /></Col>

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

                      <h3>Session expired. Please log in again</h3>
                    </>
                  ) : animes.length === 0 ? (
                    <>
                      <Col className="text-center mt-4"><Spin /></Col>

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

                        <h3>Session expired. Please log in again</h3>
                      </>
                    ) : movies.length === 0 ? (
                      <>

                        <Col className="text-center mt-4"><Spin /></Col>

                      </>
                    ) : (
                      <>

                        <Row className="my-3">


                          <input style={{ color: 'black', fontStyle: 'italic', borderRadius: '7px' }}
                            id="search search-input input-search"
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search (e.g. Harry Potter and the Chamber of Secrets)"
                            aria-label="Search"
                          />


                        </Row>
                        <UncontrolledExample></UncontrolledExample>
                        <Header></Header>

                        {movies.filter((movie) => {
                          return search === "" ?
                            movie :
                            movie.Title.toLowerCase().includes(search.toLowerCase());
                        }

                        ).map((movie) => (
                          <Col className="mb-4 all-media-container" key={movie._id} md={6} xl={4} lg={4} sm={12} xs={10}>
                            <MovieCard
                              className="flexible-media"
                              movie={movie}
                              user={user}
                              token={token}
                              setUser={setUser}
                            />
                          </Col>
                        ))}
                        {tvseries.filter((tvseries) => {
                          return search === "" ?
                            tvseries :
                            tvseries.Title.toLowerCase().includes(search.toLowerCase());
                        }

                        ).map((tvseries) => (
                          <Col className="mb-4 all-media-container" key={tvseries._id} md={6} xl={4} lg={4} sm={12} xs={10}>
                            <TVseriesCard
                              className="flexible-media"
                              tvseries={tvseries}
                              user={user}
                              token={token}
                              setUser={setUser}
                            />
                          </Col>
                        ))}
                        {animes.filter((animes) => {
                          return search === "" ?
                            animes :
                            animes.Title.toLowerCase().includes(search.toLowerCase());
                        }

                        ).map((animes) => (
                          <Col className="mb-4 all-media-container" key={animes._id} md={6} xl={4} lg={4} sm={12} xs={10}>
                            <AnimeCard
                              className="flexible-media"
                              animes={animes}
                              user={user}
                              token={token}
                              setUser={setUser}
                            />
                          </Col>

                        ))}


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