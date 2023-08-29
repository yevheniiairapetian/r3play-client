import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";

/* 
import { useState, useEffect } from "react";
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
  const [selectedMovie, setSelectedMovie] = useState(null);
  // const [TVeries, setTVseries] = useState([]);
  // const [selectedTVseries, setSelectedTVseries] = useState(null);
  const [tvseries, setTVseries] = useState([]);
  const [selectedTVseries, setSelectedTVseries] = useState(null);
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
            Season: {},
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
          };
        })
        setMovies(moviesFromApi);
      },

        fetch("https://r3play-934f9ea5664d.herokuapp.com/tvseries", {
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
            setTVseries(TVseriesFromApi);
          }), [token]);
        
*/
export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
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
          };
        });

        setMovies(moviesFromApi);
      });
  }, [token]);

  if (!user) {
    return (
      <>
        <LoginView
          onLoggedIn={(user, token) => {
            setUser(user);
            setToken(token);
          }} />
        <br />
        <em><strong>or</strong></em>
        <SignupView />
      </>)

  }

  if (selectedMovie) {
    let similarMovies = movies.filter(movie => movie.id !== selectedMovie.id && movie.Genre.Name === selectedMovie.Genre.Name);
    let sameDirector = movies.filter(movie => movie.id !== selectedMovie.id && movie.Director.Name === selectedMovie.Director.Name);
    // let sameActors = movies.filter(movie => movie.id !== selectedMovie.id && selectedMovie.Actors.includes(movie.Actors) === true);
    let sameRating = movies.filter(movie => movie.id !== selectedMovie.id && movie.Rating === selectedMovie.Rating);
    return (
      <>
        <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
        <hr />
        <br />
        <h2>Similar Movies</h2>
        {similarMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onMovieClick={(newSelectedMovie) => setSelectedMovie(newSelectedMovie)} />
        ))
        }
        <h2>Movies with the Same Rating</h2>
        {sameRating.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onMovieClick={(newSelectedMovie) => setSelectedMovie(newSelectedMovie)} />

        ))
        }


        {/* <h2>Movies starring the same actors</h2>
      {sameActors.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onMovieClick={(newSelectedMovie) => setSelectedMovie(newSelectedMovie)} />
      ))
      } */}
        <h2>Movies of the same director</h2>
        {sameDirector.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onMovieClick={(newSelectedMovie) => setSelectedMovie(newSelectedMovie)} />
        ))
        }
      </>
    );
  }

  if (movies.length === 0) {
    return <div>The movie list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
      <button onClick={() => { setUser(null); setToken(null); localStorage.clear(); }}>Logout</button>
    </div>
  );
};