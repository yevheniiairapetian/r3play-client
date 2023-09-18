import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const TVseriesCard = ({ tvseries }) => {
  return (
    <Card className="h-100" >
      <Card.Img src={tvseries.ImagePath} />
      <Card.Body>
        <Card.Title className="bg-secondary p-2">{tvseries.Title}</Card.Title>
        <Card.Text className="text-secondary">{tvseries.Description}</Card.Text>
        <Link to={`/tvseries/${encodeURIComponent(tvseries.id)}`}>
          <Button variant="link">Open</Button>
        </Link>
      </Card.Body>
    </Card>

  );
};

TVseriesCard.propTypes = {
  tvseries: PropTypes.shape({
    id: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Season: PropTypes.shape({

    }),
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Birth: PropTypes.string,
      Death: PropTypes.string
    }),
    ImagePath: PropTypes.string,
    Featured: PropTypes.bool,
    Actors: PropTypes.array,
    Rating: PropTypes.string,
    ReleaseDate: PropTypes.string
  }).isRequired,
};