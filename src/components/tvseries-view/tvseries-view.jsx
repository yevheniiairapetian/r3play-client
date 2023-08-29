// export const TVseriesView = ({ tvseries, onBackClick }) => {
//     return (
//       <div>
//         <div>
//           <img src={tvseries.ImagePath} />
//         </div>
//         <div>
//           <span>Title: </span>
//             <span>{tvseries.Title}</span>
//         </div>
//         <div>
//           <span>Description: </span>
//             <span>{tvseries.Description}</span>
//         </div>
//         <div>
//           <span>Season: </span>
//             <span>{tvseries.Season}</span>
//         </div>
//         <div>
//           <span>Genre: </span>
//             <span>{tvseries.Genre.Name}</span><br/>
//           <span>Desciption: </span>
//             <span>{tvseries.Genre.Description}</span>
//         </div>
//         <div>
//           <span>Director: </span>
//             <span>{tvseries.Director.Name}</span><br/>
//           <span>Biography: </span>
//             <span>{tvseries.Director.Bio}</span><br/>
//           <span>Birth year: </span>
//             <span>{tvseries.Director.Birth}</span><br/>
//             <span>Death year: </span>
//             <span>{tvseries.Director.Death}</span><br/>
//         </div>
//         <div>
//           <span>Actors: </span>
//             <span>{tvseries.Actors.join(', ')}</span>
//         </div>
//         <div>
//           <span>Featured: </span>
//             <span>{String(tvseries.Featured)}</span>
//         </div>
//         <div>
//           <span>Rotten Tomatoes Audience Rating: </span>
//             <span>{tvseries.Rating}</span>
//         </div>
//         <div>
//           <span>Release Date: </span>
//             <span>{tvseries.ReleaseDate}</span>
//         </div>

//         <button onClick={onBackClick}>Back to movies list</button>
//       </div>
//     );
//   };