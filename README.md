# r3play-client
This project contains the front-end part of the R3play back-end ([here](https://github.com/yevheniiairapetian/r3play)) written with React for displaying the information about movies, anime and tv series.

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


### Main view
- Returns ALL movies, anime and TV series to the user (each movie, anime and TV series item with an image)
- Shows an image slider with navigation to movie, anime, and TV series views.
- Displays the user's name in the navigation
- Filtering the list of movies, anime and TV series with a "search" feature
- Ability to select a movie, anime, and TV series for more details
- Ability to log out
- Ability to navigate to Profile view
- Ability to add a movie, anime and TV series to favorites/delete them from favorites
### Single Movie, Anime, TV series view
- Returns data (title, description, genre, director, director's bio, image, release year, rating (IMDb and Rotten Tomatoes Audience rating), actors, etc) about a single movie, anime, TV series to the user
- Displays a section with interesting facts (can be collapsed/expanded)
- Shows a video player with the movie, anime, TV series Youtube trailer.
- Ability to return back to the list
Displays recommendations on:
- Similar movies, anime, TV series
- Movies, anime, and TV series by the same director 
- Same time to watch
- Movies, anime, TV series where the same actors are starring
- Same IMDb Rating
- Same Rotten Tomatoes Audience Rating
- Same genre
- Same release year
### Login view
- Allows users to log in with a username and password
- Uses user-friendly modals to show information
### Signup view
- Allows new users to register (username, password, email, date of birth)
- Uses user-friendly modals to show information

### Profile view
- Displays user registration details
- Uses user-friendly modals to show information
- Allows users to update their info (username, password, email, date of birth)
- Displays the favorite movies, anime and TV series (can be expanded/collapsed)
_ Has a counter of favorite items
- Allows users to remove a movie, anime, TV series from their list of favorites
- Allows existing users to deregister

### Footer
If authorized:
- Has the quick navigation buttons to go to the Profile view and Main view
If not authrorized:
- Has the quick navigation buttons to the Login View and Signup View

## Live Version
The App is live [here](https://r3play.netlify.app/)

## Clone and Preview
To clone the app use the following command: `console git clone git@github.com:yevheniiairapetian/r3play-client.git` Or download directly by clicking on <> Code button > Download ZIP. Navigate to the ```r3play-client``` folder with the ```cd r3play-client``` in the terminal, install the required dependencies using the `npm install command`. Then run the app with the ```parcel src/index.html``` command and access it at ```localhost:1234``` in the browser.

## Contact:
Feel free to contact me via[ LinkedIn](https://www.linkedin.com/in/yevhenii-airapetian/) or  
[email](mailto:sonkozhenia11@gmail.com) or 
via the contact information on the [website](https://yevheniiairapetian.github.io/portfolio-website/contact.html) 
