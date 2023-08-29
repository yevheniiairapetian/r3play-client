// import PropTypes from "prop-types";

// export const TVseriesCard = ({ tvseries, onTVseriesClick }) => {
//     return (
//       <div
//         onClick={() => {
//           onTVseriesClick(tvseries);
//         }}
//       >
//         {tvseries.Title}
//       </div>
//     );
//   };
  
//   TVseriesCard.propTypes = {
//     movie: PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       Title: PropTypes.string.isRequired,
//       Description: PropTypes.string.isRequired,
//       Season: PropTypes.shape({

//       }),
//       Genre: PropTypes.shape({
//         Name: PropTypes.string.isRequired,
//         Description: PropTypes.string.isRequired}),
//       Director: PropTypes.shape({
//         Name: PropTypes.string.isRequired,
//         Bio: PropTypes.string.isRequired,
//         Birth: PropTypes.string,
//         Death: PropTypes.string 
//       }),
//       ImagePath: PropTypes.string,
//       Featured: PropTypes.bool,
//       Actors: PropTypes.array,
//       Rating: PropTypes.string,
//       ReleaseDate: PropTypes.string
// }).isRequired,
//     onTVseriesClick: PropTypes.func.isRequired
//   };