import PropTypes from "prop-types";

export const TVseriesCard = ({ tvseries, onTVseriesClick }) => {
    return (
        <Card className="h-100" onClick={() => { onTVseriesClick(tvseries); }}>
      <Card.Img src={tvseries.ImagePath} />
      <Card.Body>
        <Card.Title className="bg-secondary p-2">{tvseries.Title}</Card.Title>
        <Card.Text className="text-primary">{tvseries.Description}</Card.Text>
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
        Description: PropTypes.string.isRequired}),
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
    onTVseriesClick: PropTypes.func.isRequired
  };