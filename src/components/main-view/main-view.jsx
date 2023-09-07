import { useState, useEffect } from "react";
import { Col, Row, Button, Badge } from "react-bootstrap";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { TVseriesCard } from "../tvseries-card/tvseries-card";
import { TVseriesView } from "../tvseries-view/tvseries-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [tvseries, setTVSeries] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedTVseries, setSelectedTVseries] = useState(null);
  let similarMovies = [];
  let sameDirector = [];
  let sameActors = [];
  let sameRating = [];
  let similarTVseries = [];
  let sameTVDirector = [];
  let sameTVRating = [];
  let sameTVActors = [];
  if (selectedMovie) {
    similarMovies = movies.filter(movie => movie.id !== selectedMovie.id && movie.Genre.Name === selectedMovie.Genre.Name);
    sameDirector = movies.filter(movie => movie.id !== selectedMovie.id && movie.Director.Name === selectedMovie.Director.Name);
    sameActors = movies.filter(movie => movie.id !== selectedMovie.id && selectedMovie.Actors.some(actor => movie.Actors.includes(actor)));
    sameRating = movies.filter(movie => movie.id !== selectedMovie.id && movie.Rating === selectedMovie.Rating);
  }

  if (selectedTVseries) {
    similarTVseries = tvseries.filter(tvseries => tvseries.id !== selectedTVseries.id && tvseries.Genre.Name === selectedTVseries.Genre.Name);
    sameTVDirector = tvseries.filter(tvseries => tvseries.id !== selectedTVseries.id && tvseries.Director.Name === selectedTVseries.Director.Name);
    sameTVActors = tvseries.filter(tvseries => tvseries.id !== selectedTVseries.id && selectedTVseries.Actors.some(actor => tvseries.Actors.includes(actor)));
    sameTVRating = tvseries.filter(tvseries => tvseries.id !== selectedTVseries.id && tvseries.Rating === selectedTVseries.Rating);
  }
  useEffect(() => {
    if (!token) {
      return;
    }
    fetch("https://r3play-934f9ea5664d.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => response.json())
      .then((data) => {
        const moviesFromApi = data.map((movie) => {
          return {
            id: movie._id,
            Title: movie.Title,
            Description: movie.Description,
            Genre: {
              Name: movie.Genre.Name,
              Description: movie.Genre.Description
            },
            Director: {
              Name: movie.Director.Name,
              Bio: movie.Director.Bio,
              Birth: movie.Director.Birth,
              Death: movie.Director.Death
            },
            ImagePath: movie.ImagePath,
            Featured: movie.Featured,
            Actors: movie.Actors,
            Rating: movie.Rating,
            ReleaseDate: movie.ReleaseDate,
            Duration: movie.Duration,
            IMDbRating: movie.IMDbRating
          };
        });

        setMovies(moviesFromApi);
      }).then(() => {
        fetch("r3play-934f9ea5664d.herokuapp.com/tvseries", {
          headers: { Authorization: `Bearer ${token}` }
        })
          .then((response) => response.json())
          .then((data) => {
            const TVseriesFromApi = data.map((tvseries) => {
              return {
                id: tvseries._id,
                Title: tvseries.Title,
                Description: tvseries.Description,
                Genre: {
                  Name: tvseries.Genre.Name,
                  Description: tvseries.Genre.Description
                },
                Director: {
                  Name: tvseries.Director.Name,
                  Bio: tvseries.Director.Bio,
                  Birth: tvseries.Director.Birth,
                  Death: tvseries.Director.Death
                },
                ImagePath: tvseries.ImagePath,
                Featured: tvseries.Featured,
                Actors: tvseries.Actors,
                Rating: tvseries.Rating,
                ReleaseDate: tvseries.ReleaseDate,
              };
            })
            setTVSeries(TVseriesFromApi);
          });
      })
  }, [token]);

  return (
    <>
      <Row>
        {!user ? (

          <>
          <Col md={5}>
            <LoginView
              onLoggedIn={(user, token) => {
                setUser(user);
                setToken(token);
              }} />
            
            or
            <SignupView />
          </Col>
                      </>
        ) : selectedMovie ? (
          <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
        ) : selectedTVseries ? (
          <TVseriesView tvseries={selectedTVseries} onBackClick={() => setSelectedTVseries(null)} />
        ) : movies.length === 0 ? (
          <div>The movie list is empty!</div>
        ) : (
          <>  {movies.map((movie) => (

            <Col md={4} key={movie.id}>
            <MovieCard
              
              movie={movie}
              onMovieClick={(newSelectedMovie) => {
                setSelectedMovie(newSelectedMovie);
              }}
            />
            </Col>

          ))}
            {tvseries.map((tvseries) => (
              <Col md={4} key={tvseries.id}>
              <TVseriesCard
                
                tvseries={tvseries}
                onTVseriesClick={(newSelectedTVseries) => {
                  setSelectedTVseries(newSelectedTVseries);
                }}
              />
            </Col>



            ))}
          </>
        )}
      </Row>
      <Row>

        <Button className="btn-secondary" onClick={() => { setUser(null); setToken(null); localStorage.clear(); }}>Logout</Button>
        <hr />
        <br />
      </Row>
      <Row>
        <h2><Badge bg="secondary">Similar Movies</Badge></h2>
        {similarMovies.map((movie) => (
          <Col md={4}>
          <MovieCard key={movie.id} movie={movie} onMovieClick={(newSelectedMovie) => setSelectedMovie(newSelectedMovie)} />
          </Col>
        ))
        }

      </Row>
      <Row>
        <h2><Badge bg="secondary">Similar TV series</Badge></h2>
        {similarTVseries.map((tvseries) => (
          <Col md={4}>
          <TVseriesCard key={tvseries.id} tvseries={tvseries} onTVseriesClick={(newSelectedTVseries) => setSelectedTVseries(newSelectedTVseries)} />
          </Col>
        ))
        }

      </Row>
      <Row>
        <h2><Badge bg="secondary">Movies with the Same Rating</Badge></h2>
        {sameRating.map((movie) => (
          <Col md={4}>
          <MovieCard key={movie.id} movie={movie} onMovieClick={(newSelectedMovie) => setSelectedMovie(newSelectedMovie)} />
          </Col>
        ))
        }
      </Row>
      <Row>
        <h2><Badge bg="secondary">TV series with the Same Rating</Badge></h2>
        {sameTVRating.map((tvseries) => (
          <Col md={4}>
          <TVseriesCard key={tvseries.id} tvseries={tvseries} onTVseriesClick={(newSelectedTVseries) => setSelectedTVseries(newSelectedTVseries)} />
          </Col>
        ))
        }
      </Row>

      <Row>
        <h2><Badge bg="secondary">Movies Starring the Same Actors</Badge></h2>
        {sameActors.map((movie) => (
          <Col md={4}>
          <MovieCard key={movie.id} movie={movie} onMovieClick={(newSelectedMovie) => setSelectedMovie(newSelectedMovie)} />
          </Col>
        ))
        }
      </Row>

      <Row>
        <h2><Badge bg="secondary">TV series Starring the Same Actors</Badge></h2>
        {sameTVActors.map((tvseries) => (
          <Col md={4}>
          <TVseriesCard key={tvseries.id} tvseries={tvseries} onTVseriesClick={(newSelectedTVseries) => setSelectedTVseries(newSelectedTVseries)} />
          </Col>
        ))
        }
      </Row>
      <Row>
        <h2><Badge bg="secondary">Movies of the Same Director</Badge></h2>
        {sameDirector.map((movie) => (
          <Col md={4}>
          <MovieCard key={movie.id} movie={movie} onMovieClick={(newSelectedMovie) => setSelectedMovie(newSelectedMovie)} />
          </Col>
        ))
        }
      </Row>
      <Row>
        <h2><Badge bg="secondary">TV series of the Same Director</Badge></h2>
        {sameTVDirector.map((tvseries) => (
          <Col md={4}>
          <TVseriesCard key={tvseries.id} tvseries={tvseries} onTVseriesClick={(newSelectedTVseries) => setSelectedTVseries(newSelectedTVseries)} />
          </Col>
        ))
        }
      </Row>
    </>

  )
}