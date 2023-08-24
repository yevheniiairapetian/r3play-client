import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setmovies] = useState([
    {
      id: 1,
      title: "The Expandables 3",
      description:"The Expandables 3 is a 2014 American action film directed by Patrick Hughes and written by Creighton Rothenberger, Raktin Benedikt and Sylvester Stallone. It is the third installment in \"The Expandables\" franchise and the sequel to \"The Expandables (2010)\" and \"The Expandables (2012)",
      genre: {
        name: "Action",
        description:"Action film is a film genre in which the protagonist is thrust into a series of events that typically involve violence and physical feats. The genre tend to feature a mostly resourceful hero struggling against incredible odds."
      },
      director:{
        name: "Patrick Hughes",
        bio: "Patrick Hughes (born May 13, 1978) is an Australian film director and screenwriter born in Black Rock, a suburb of Melbourne.",
        birth:"1978",
    },
      
      imagePath:"https://th.bing.com/th/id/OIP.5V1he-HBifroFBmyKDLwYwHaK-?pid=ImgDet&rs=1",
      featured: "false",
      actors:['Sylvster Stallone', 'Jason Statham', 'Jet Li', 'Dolph Lundgren', 'Randy Couture', 'Terry Crews', 'Harrison Ford', 'Mel Gibson', 'Kellan Lutz'],
      rating: "31",
      releaseDate: "2014"
    },
    {
        id: 2,
        title: "The Matrix Reloaded",
        description:"The Matrix Reloaded is an American science fiction action film directed by the Wachowskis which is a sequel to \"The Matrix (1999) \" movie.",
        genre: {
          name: "Sci-Fi",
          description:"Science fiction (or Sci-Fi) is a genre of speculative fiction, which typically deals with imaginative and futuristic concepts such as advanced science and technology, space exploration etc."
        },
        director:{
          name: "The Wachowskis",
          bio: "Lilly Wachowski and Lana Wachowski are American film and television directors, writers, and producers."
        },
        imagePath:"https://th.bing.com/th/id/R.63d508d17750033c3861908a16db5d94?rik=WJFGvAVTTkWNzA&riu=http%3a%2f%2fimage.tmdb.org%2ft%2fp%2foriginal%2ftdTDA9z2laqYJOHBIrMnEYI8Lg8.jpg&ehk=pR0hXuKkr6RZsKw4leGycsPEWXzdE5u2U6lW3CoNaDs%3d&risl=&pid=ImgRaw&r=0",
        featured: "false",
        actors:['Keanu Reeves', 'Laurence Fishbourne', 'Carrie-Anne Moss'],
        rating: "73",
        releaseDate: "2003"
    },
    {
      id: 3,
      title: "Inception",
      description:"Inception is a 2010 science finction action film written and directed by Christopher Nolan. The film stars Leonardo DiCaprio, Ken Watanabe, Joseph Gordon-Levitt and others",
      genre: {
        name: "Sci-Fi",
        description:"Science fiction (or Sci-Fi) is a genre of speculative fiction, which typically deals with imaginative and futuristic concepts such as advanced science and technology, space exploration etc."
      },
      director:{
        name: "Christopher Nolan",
        bio: "Christopher Edward Nolan (born 30 July 1970) is a British and American filmmaker known for his Hollywood blockbusters with complex storytelling. Nolan is considered a leading filmaker of the 21st century."
      },
      imagePath:"https://movieswithaplottwist.com/wp-content/uploads/2016/03/Inception-movie-poster.jpg",
      featured: "true",
      actors:['Leonardo DiCaprio', 'Ken Watanabe', 'Joseph Gordon-Levitt', 'Marion Cotillard', 'Elliot Page', 'Tom Hardy', 'Cillian Murphy', 'Tom Berenger', 'Michael Caine'],
      rating: "87",
      releaseDate: "2010"
    }
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
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
    </div>
  );
};
