import { useEffect, useState } from 'react';
import { MovieCard } from '../movie-card/movie-card';
import {Header} from '../header/header';
import { MovieView } from '../movie-view/movie-view';
import { TVseriesCard } from '../tvseries-card/tvseries-card';
import { TVseriesView } from '../tvseries-view/tvseries-view';
import { AnimeCard } from '../anime-card/anime-card';
import { AnimeView } from '../anime-view/anime-view';
import { LoginView } from '../login-view/login-view';
import { SignupView } from '../signup-view/signup-view';
import { NavigationBar } from '../navigation-bar/navigation-bar';
import { ProfileView } from "../profile-view/profile-view";
import { Row, Col, InputGroup, Form } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {UncontrolledExample} from '../Carousel/carousel';
export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [tvseries, setTVSeries] = useState([]);
  const [anime, setAnime] = useState([]);



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
                setAnime(data);
    
              })
            })

      })
  }, [token]);

  return (
    <>
      <BrowserRouter>
        <NavigationBar
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
                    <Col md={8} lg={6} sm={12}>
                      <SignupView />
                    </Col>
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
                    <Col md={8} lg={6} sm={12} >
                      <LoginView onLoggedIn={(user, token) => { setUser(user); setToken(token) }} />
                    </Col>
                  )}
                </>
              }
            />
            <Route
              path='/movies/:movieId'
              element={
                <>
                  {!user ? (
                    <Navigate to='/login' replace />
                  ) : movies.length === 0 ? (
                    <Col>The list is empty!</Col>
                  ) : (
                    <Col md={8}>
                      <MovieView movies={movies}/>
                    
                    </Col>
                  )}
                </>
              }
            />
             <Route
              path='/tvseries/:TVId'
              element={
                <>
                  {!user ? (
                    <Navigate to='/login' replace />
                  ) : tvseries.length === 0 ? (
                    <Col>The list is empty!</Col>
                  ) : (
                    <Col md={8}>
                      <TVseriesView tvseries={tvseries}/>
                    </Col>
                  )}
                </>
              }
            /> 
            <Route
              path='/anime/:AnimeId'
              element={
                <>
                  {!user ? (
                    <Navigate to='/login' replace />
                  ) : anime.length === 0 ? (
                    <Col>The list is empty!</Col>
                  ) : (
                    <Col md={8}>
                      <AnimeView anime={anime}/>
                    </Col>
                  )}
                </>
              }
            /> 
            <Route
              path="/"
              element={
                <>
                  {!user ? (
                    <Navigate to="/login" replace />
                  ) : movies.length === 0 ? (
                    <Col>The list is empty!</Col>
                  ) : (
                    <>
                      <Row className="my-3">
                        <form>
                          <InputGroup>
                            <Form.Control
                              onChange={(e) => setSearch(e.target.value)}
                              placeholder="Movie Search"
                              aria-label="Movie Search"
                            />
                          </InputGroup>
                        </form>
                      </Row>
                      <UncontrolledExample></UncontrolledExample>
                      <Header></Header>
                      {movies.filter((movie) => {
                        return search === "" ?
                          movie :
                          movie.Title.toLowerCase().includes(search.toLowerCase());
                      }

                      ).map((movie) => (
                        <Col className="mb-4" key={movie._id} md={6} xl={4} lg={4} sm={12} xs={10}>
                          <MovieCard
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
                        <Col className="mb-4" key={tvseries._id} md={6} xl={4} lg={4} sm={12} xs={10}>
                          <TVseriesCard
                            tvseries={tvseries}
                            user={user}
                            token={token}
                            setUser={setUser}
                          />
                        </Col>
                      ))}
                      {anime.filter((anime) => {
                        return search === "" ?
                          anime :
                          anime.Title.toLowerCase().includes(search.toLowerCase());
                      }

                      ).map((anime) => (
                        <Col className="mb-4" key={anime._id} md={6} xl={4} lg={4} sm={12} xs={10}>
                          <AnimeCard
                            anime={anime}
                            user={user}
                            token={token}
                            setUser={setUser}
                          />
                        </Col>
                      ))}
                    </>
                  )}
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
                    <Col md={12} lg={8} sm={12}>
                      <ProfileView
                        user={user}
                        token={token}
                        setUser={setUser}
                        movies={movies}
                        tvseries={tvseries}
                        anime={anime}
                      />
                    </Col>
                  )}
                </>
              }
            />
            
          </Routes>
          
        </Row>
        
      </BrowserRouter>

    </>

  )

}