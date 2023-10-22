# r3play-client
This project contains the front-end part of the R3play back-end ([here](https://github.com/yevheniiairapetian/r3play)) written with React for displaying information about movies, anime, and TV series.

## Technologies Used
- Javascript/React
- React Bootstrap
- SCSS
- HTML
- React FontAwesome

## Project Dependencies
- React as a front-end library
- React Bootstrap for design/responsive design
- Parcel for the build process
- React FontAwesome for icons
- _Please see the package.json file for other project dependencies_

## Views & Features:
### All views
- Ability to set theme (dark or light) (_currently in test mode_)
- Ability to click on the _back to top_ button for quick navigation

## Project Screenshot
[(<a href="https://ibb.co/Mc8mYBT"><img src="https://i.ibb.co/D9GZxrX/2023-10-04-19h44-50.png" alt="2023-10-04-19h44-50" border="0"></a>)]([https://youtu.be/vt5fpE0bzSY](https://streamable.com/qglgcd))   
## Project In Use Preview
[![Watch the video](https://i.ibb.co/Mc8mYBT/2023-10-04-19h44-50.png)](https://streamable.com/qglgcd)

### Main view
#### If not authorized:
- Displays login, signup, and theme menu links
#### If authorized:
- Displays home, profile, logout, and theme menu links
- Returns ALL movies, anime, and TV series to the user (each movie, anime, and TV series item with an image, genre, and release year)
- Shows an image slider with navigation to movie, anime, and TV series views.
- Displays the user's name in the navigation
- Filtering the list of movies, anime, and TV series with a "search" feature
- Ability to select a movie, anime, and TV series for more details
- Ability to log out
- Ability to navigate to the Profile view
- Ability to add a movie, anime, and TV series to favorites/delete them from favorites
### Single Movie, Anime, and TV series views
#### For Movie View
##### Returns data:
- Title
- Description
- Genre (name and description)
- Director (name, bio, birth year, death year)
- Image
- Release year
- Rating (IMDb and Rotten Tomatoes Audience rating)
- Actors list
- Etc, about a single movie to the user
#### For Anime and TV series
##### Returns data:
- Title
- Description
- Genre (name and description)
- Director (name, bio, birth year, death year)
- Image
- Release year
- Rating (IMDb and Rotten Tomatoes Audience rating)
- Actors list
- Episodes list
- Etc, for a single Anime and TV series to the user
#### For Movie, Anime, TV series views
- Displays a section with interesting facts (can be collapsed/expanded)
- Shows a video player with the movie, anime, and TV series Youtube trailer.
- Ability to return back to the main view (with the list of all movies, anime, and TV series)
#### Displays recommendations on:
- Similar movies, anime, and TV series
- Movies, anime, and TV series by the same director 
- What to watch with the same duration
- Movies, anime, and TV series where the same actors are playing
- Movies, anime, and TV series with the same IMDb Rating
- Movies, anime, and TV series with the same Rotten Tomatoes Audience Rating
- What to watch with the same genre
- What to watch with the same release year
### Login view
- Allows users to log in with a username and password
- Uses user-friendly modals to show information
- Uses input validation
### Signup view
- Allows new users to register (username, password, email, date of birth)
- Uses user-friendly modals to show information
- Uses input validation

### Profile view
- Displays user registration details
- Uses user-friendly modals to show success/failure information
- Allows users to update their info (username, password, email, date of birth)
- Displays the favorite movies, anime, and TV series list (can be expanded/collapsed)
- Has separate counters for favorite movies, anime, and TV series list
- Allows users to remove a movie, anime, and TV series from their list of favorites
- Allows existing users to deregister

### Footer
#### If authorized:
- Has the quick navigation buttons to go to the Profile view and Main view
#### If not authorized:
- Has the quick navigation buttons to the Login View and Signup View

## Live Version
The App is live [here](https://r3play.netlify.app/)

## Clone and Preview
To clone the app use, the following command: `console git clone git@github.com:yevheniiairapetian/r3play-client.git` Or download directly by clicking on <> Code button > Download ZIP. Navigate to the ```r3play-client``` folder with the ```cd r3play-client``` in the terminal, and install the required dependencies using the `npm install command`. Then run the app with the ```parcel src/index.html``` command and access it at ```localhost:1234``` in the browser.

## Contact:
Feel free to contact me via[ LinkedIn](https://www.linkedin.com/in/yevhenii-airapetian/) or  
[email](mailto:sonkozhenia11@gmail.com) or 
via the contact information on the [website](https://yevheniiairapetian.github.io/portfolio-website/contact.html) 
