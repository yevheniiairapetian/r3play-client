import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Card } from "react-bootstrap";

export const TVseriesView = ({ tvseries }) => {
  const { TVId } = useParams();
  const tvser = tvseries.find((tv) => tv.id === TVId);

  return (
    <>
      <Card>
        <Card.Img className='h-100 card text-bg-dark mb-3' variant={top} src={tvser.ImagePath} />

        <Card.Body className="card-bg-color">
          <Card.Subtitle className="title-color text-center mb-2 text-info pt-3">Title:</Card.Subtitle>
          <Card.Title className="text-success text-center pb-3">{tvser.Title}</Card.Title>
          <Card.Subtitle className="title-color mb-2 text-info pt-3">Release Date: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{tvser.ReleaseDate.slice(0, 4)}</Card.Title>

          <Card.Subtitle className=" mb-2 text-info pt-3">Description: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{tvser.Description}</Card.Title>


          <Card.Subtitle className="title-color mb-2 text-info pt-3"> Duration: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{tvser.Duration}</Card.Title>


          <Card.Subtitle className="title-color mb-2 text-info pt-3">Genre: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{tvser.Genre.Name}</Card.Title><br />
          <Card.Subtitle className="title-color mb-2 text-info pt-3">Desciption: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{tvser.Genre.Description}</Card.Title>


          <Card.Subtitle className="title-color mb-2 text-info pt-3">Director: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{tvser.Director.Name}</Card.Title><br />
          <Card.Subtitle className="title-color mb-2 text-info pt-3">Biography: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{tvser.Director.Bio}</Card.Title><br />
          <Card.Subtitle className="title-color mb-2 text-info pt-3">{tvser.Director.Name}'s Birth year: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{tvser.Director.Birth}</Card.Title><br />
          <Card.Subtitle className="title-color mb-2 text-info pt-3">{tvser.Director.Name}'s Death year: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{tvser.Director.Death ? tvser.Director.Death : "No data"}</Card.Title><br />


          <Card.Subtitle className="title-color mb-2 text-info pt-3">Actors: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{tvser.Actors.join(', ')}</Card.Title>


          <Card.Subtitle className="title-color mb-2 text-info pt-3">IMDb Rating: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{tvser.IMDbRating}</Card.Title>


          <Card.Subtitle className="title-color mb-2 text-info pt-3">Rotten Tomatoes Audience Rating: </Card.Subtitle>
          <Card.Title secondary-color="text-secondary pb-3">{tvser.Rating}</Card.Title>

          <br />

          <Link to={`/`}>
            <Button className="bg-success p-2 w-100">Back to the list</Button>
          </Link>
        </Card.Body>
        <hr />
      </Card>

      <div>

      </div>
      <div>

      </div>
      <div>

      </div>
      <div>

      </div>
    </>


  );
};