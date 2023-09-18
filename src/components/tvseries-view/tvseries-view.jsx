import { Badge } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export const TVseriesView = ({ tvseries }) => {
  const { TVId } = useParams();
  const tvser = tvseries.find((tv) => tv.id === TVId);

  return (
    <>
      <div bg-color="body-bg">
        <div>
          <img src={tvser.ImagePath} />
        </div>
        <div>
          <span className="title-color"><Badge bg="secondary p-2">Title: </Badge></span>
          <span secondary-color="text-secondary">{tvser.Title}</span>
        </div>
        <div>
          <span><Badge color="text-primary" bg="secondary p-2">Description: </Badge></span>
          <span secondary-color="text-secondary">{tvser.Description}</span>
        </div>
        <div>
          <span><Badge color="text-primary" bg="secondary p-2">Season: </Badge></span>
          <span secondary-color="text-secondary">{tvser.Season}</span>
        </div>
        <div>
          <span><Badge color="text-primary" bg="secondary p-2">Duration: </Badge></span>
          <span secondary-color="text-secondary">{tvser.Duration}</span>
        </div>
        <div>
          <span><Badge color="text-primary" bg="secondary p-2">Genre: </Badge></span>
          <span secondary-color="text-secondary">{tvser.Genre.Name}</span><br />
          <span><Badge color="text-primary" bg="secondary p-2">Desciption: </Badge></span>
          <span secondary-color="text-secondary">{tvser.Genre.Description}</span>
        </div>
        <div>
          <span><Badge color="text-primary" bg="secondary p-2">Director: </Badge></span>
          <span secondary-color="text-secondary">{tvser.Director.Name}</span><br />
          <span><Badge color="text-primary" bg="secondary p-2">Biography: </Badge></span>
          <span secondary-color="text-secondary">{tvser.Director.Bio}</span><br />
          <span><Badge color="text-primary" bg="secondary p-2">Birth year: </Badge></span>
          <span secondary-color="text-secondary">{tvser.Director.Birth}</span><br />
          <span><Badge color="text-primary" bg="secondary p-2">Death year: </Badge></span>
          <span secondary-color="text-secondary">{tvser.Director.Death}</span><br />
        </div>
        <div>
          <span><Badge color="text-primary" bg="secondary p-2">Actors: </Badge></span>
          <span secondary-color="text-secondary">{tvser.Actors.join(', ')}</span>
        </div>
        <div>
          <span><Badge color="text-primary" bg="secondary p-2">IMDb Rating: </Badge></span>
          <span secondary-color="text-secondary">{tvser.IMDbRating}</span>
        </div>
        <div>
          <span><Badge color="text-primary" bg="secondary">Rotten Tomatoes Audience Rating: </Badge></span>
          <span secondary-color="text-secondary">{tvser.Rating}</span>
        </div>
        <div>
          <span><Badge color="text-primary" bg="secondary p-2">Release Date: </Badge></span>
          <span secondary-color="text-secondary">{tvser.ReleaseDate}</span>
        </div>
        <br />
        <Link>
          <button class="btn btn-secondary">Back to the list</button>
        </Link>
        <hr />
      </div>

    </>

  );
};